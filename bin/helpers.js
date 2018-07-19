const capitalize = (str) =>
  str.substring(0, 1).toUpperCase() + str.substring(1)

const toCamelWord = (word, idx) =>
  idx === 0
    ? word.toLowerCase()
    : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

const camelcase = text =>
  text
    .split(/[_-\s]+/)
    .map(toCamelWord)
    .join('')

const iconTemplate = (name, markup, viewBox) => `import React from 'react'
import Svg from './Svg'

const ${name} = props => (
  <Svg viewBox="${viewBox}" {...props}>
    ${markup.trim()}
  </Svg>
)

export default ${name}
`

module.exports.capitalize = capitalize
module.exports.camelcase = camelcase
module.exports.iconTemplate = iconTemplate
