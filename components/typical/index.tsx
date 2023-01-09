import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import React from 'react'

import { Svg, SvgProps } from 'components/svg'
import { $typical, $character, $word } from './styles'
import { cssText } from 'lib/format'

const speed = 60

function getOverlap(start: string, [...end]: string) {
  return [...start, NaN].findIndex((char, i) => end[i] !== char)
}

const timespans = (word: string, delay = 0) => {
  const characters = word.split('')
  return characters.map(() => {
    return [60, delay + speed + (Math.random() - 0.5) * speed]
  })
}

type Item = {
  add: number[][]
  delete?: number[][]
  delay: { add: number; delete?: number }
  text: string
}

const create = (length: number) => {
  return new Array(length).fill([0, 0])
}

export const typical = (steps: (string | number)[]) => {
  const map: Record<string, Item> = {}
  let prevText = ''
  let prevIndex = -1
  let delay = 0
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i]
    if (isString(step)) {
      const overlap = getOverlap(prevText, step)
      const uniqText = step.slice(overlap)
      let current = map[i]
      const prev = map[prevIndex]
      // delete non-overlap content
      if (prev) {
        const prevUniqText = prevText.slice(overlap)
        prev.delete = create(overlap).concat(timespans(prevUniqText))
        prev.delay.delete = delay
        delay = 0
      }
      if (!current) {
        map[i] = {
          add: create(overlap).concat(timespans(uniqText)),
          delay: { add: delay },
          text: step,
        }
        current = map[i]
      }
      prevText = step
      prevIndex = i
    } else if (isNumber(step)) {
      delay = step
    }
  }
  return map
}

type Aniamtions = Record<string, { raw: string[]; text: string }>

const toAnimations = (map: Record<string, Item>) => {
  const animations: Aniamtions = {}
  let acc = 0
  for (const [id, item] of Object.entries(map)) {
    if (!animations[id]) {
      animations[id] = { raw: [], text: item.text }
    }
    animations[id].raw = item.add.map(([duration, delay], index) => {
      acc += delay + (index === 0 ? item.delay.add : 0)
      if (duration === 0) {
        return `visible ${duration}ms ${acc.toFixed(2)}ms forwards`
      }
      return `appear ${duration}ms ${acc.toFixed(2)}ms forwards`
    })
    const deletedAnimations = item.delete?.reverse()?.map(([duration, delay], index) => {
      acc += delay + (index === 0 ? item.delay.delete ?? 0 : 0)
      if (duration === 0) {
        return {
          raw: `hidden ${duration}ms ${acc.toFixed(2)}ms forwards`,
          duration,
        }
      }
      return {
        raw: `disappear ${duration}ms ${acc.toFixed(2)}ms forwards`,
        duration,
      }
    })
    deletedAnimations
      ?.filter((animation) => animation.duration === 0)
      .forEach((aniamtion, index) => {
        animations[id].raw[index] += `, ${aniamtion.raw}`
      })
    deletedAnimations
      ?.filter((animation) => animation.duration !== 0)
      .forEach((aniamtion, index) => {
        animations[id].raw[item.delete!.length - index - 1] += `, ${aniamtion.raw}`
      })
    // blinkTextCursor 500ms infinite forwards
    animations[id].raw[item.add!.length - 1] += `, blinkTextCursor 500ms infinite forwards`
  }
  return animations
}

export type TypicalProps = {
  steps: (string | number)[]
} & Pick<SvgProps, 'width' | 'height'>

export const Typical = (props: TypicalProps) => {
  const animations = toAnimations(typical(props.steps))
  const $styles: string[] = []
  Object.values(animations).forEach((item, index) => {
    item.raw.forEach((_, ai) => {
      const raw = `
      .animiation-w-${index}-c-${ai} {
        animation: ${item.raw[ai]}
      }
      `
      $styles.push(raw)
    })
  })
  return (
    <Svg
      width={props.width}
      height={props.height}
      style={
        <style
          dangerouslySetInnerHTML={{
            __html: `
      ${$styles.join('')}
      @keyframes visible {
        from {
          opacity: 1;
          max-width: fit-content;
          border-color: transparent;
        }
        to {
          opacity: 1;
          max-width: fit-content;
          border-color: transparent;
        }
      }
      @keyframes hidden {
        from {
          opacity: 0;
          max-width: 0px;
          border-color: transparent;
        }
        to {
          opacity: 0;
          max-width: 0px;
          border-color: transparent;
        }
      }
      @keyframes appear {
        from {
          opacity: 0;
          max-width: 0px;
          border-color: rgba(255,255,255);
        }
        to {
          max-width: fit-content;
          opacity: 1;
          border-color: transparent;
        }
      }
      @keyframes disappear {
        from {
          opacity: 1;
          max-width: fit-content;
          border-color: transparent;
        }
        to {
          max-width: 0px;
          opacity: 0;
          border-color: rgba(255,255,255,.75);
        }
      }
      @keyframes blinkTextCursor{
        from{border-right-color: rgba(255,255,255,.75);}
        to{border-right-color: transparent;}
      }
      .typical {
        ${cssText($typical)};
      }
      .word {
        ${cssText($word)};
      }
      .character {
        ${cssText($character)}
        max-width: 0px;
        border-right: 1px solid transparent;
      }
      `,
          }}
        />
      }
    >
      <div className="typical">
        {Object.values(animations).map((item, index) => {
          return (
            <div className={`animiation-w-${index} ${item.text} word`} key={index}>
              {item.raw.map((_, ai) => {
                return (
                  <span
                    className={`animiation-w-${index}-c-${ai} ${item.text[ai]} character`}
                    key={ai}
                  >
                    {item.text[ai] === ' ' ? <>&nbsp;</> : item.text[ai]}
                  </span>
                )
              })}
            </div>
          )
        })}
      </div>
    </Svg>
  )
}
