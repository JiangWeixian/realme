import { Processor } from 'windicss/lib'
import { HTMLParser } from 'windicss/utils/parser'
import typography from 'windicss/plugin/typography'

// Get windi processor
const processor = new Processor({
  plugins: [typography({ dark: true })],
  darkMode: 'media'
})

export function generateStyles(html: string) {
  // Parse all classes and put into one line to simplify operations
  const htmlClasses = new HTMLParser(html)
    .parseClasses()
    .map(i => i.result)
    .join(' ')

  // Generate preflight based on the HTML we input
  const preflightSheet = processor.preflight(html)

  // Process the HTML classes to an interpreted style sheet
  const interpretedSheet = processor.interpret(htmlClasses).styleSheet

  // Build styles
  const APPEND = false
  const MINIFY = false
  const styles = interpretedSheet.extend(preflightSheet, APPEND).build(MINIFY)

  return styles
}