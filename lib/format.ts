import trim from 'lodash/trim'
import trimStart from 'lodash/trimStart'
import trimEnd from 'lodash/trimEnd'
import type { FlattenSimpleInterpolation } from 'styled-components'
import { API_URL } from './constants'
import isString from 'lodash/isString'
import qs from 'query-string'

export const cssText = (source: FlattenSimpleInterpolation) => {
  return trim(trimEnd(trimStart(trim(source.toString()), '& {'), '}'))
}

const withoutHash = (str: string) => (str.startsWith('#') ? trimStart(str, '#') : str)

export const buildUrl = (props: Record<string, any>, endpoints: string) => {
  const params: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(props)) {
    if (isString(value)) {
      // currently value is always string
      params[key] = withoutHash(value as string)
    } else {
      params[key] = value
    }
  }
  return `${API_URL}${endpoints}?${qs.stringify(params)}`
}

export const normalizeSteps = (steps: (string | number)[]) => {
  return steps.map((v) => {
    if (isNaN(Number(v))) {
      return v
    }
    return Number(v)
  })
}

type ResponseParams = {
  /**
   * a of a / b
   */
  current?: number | string,
  /**
   * b of a / b
   */
  target: number,
  /**
   * Base value when current / target = 1
   */
  base: number,
  unit?: string
}

export const responsive = ({ current, target, base, unit = 'px' }: ResponseParams) => {
  return `${(Number(current ?? target) / target) * base}${unit}`
}
