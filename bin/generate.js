const { readdir, readFileSync, writeFileSync } = require('fs')
const { resolve, basename, join } = require('path')
const cheerio = require('cheerio')
const { capitalize, camelcase, iconTemplate } = require('./helpers')

const abs = resolve(__dirname, '..')

const base = (...args) => resolve(...[abs, ...args])

const clean = ($el, $) => {
  const attrs = [
    'xlink:href',
    'clip-path',
    'fill-opacity',
    'fill',
    'fill-rule',
    'stroke-width',
    'stroke-linecap',
    'id'
  ]
  attrs.forEach((attr) => {
    $el.removeAttr(attr)
    if ($el.children().length === 0) {
      return false
    }
    $el.children().each((index, el) => {
      clean($(el), $)
    })
    return true
  })
}

const createIcon = (location, component) => {
  writeFileSync(location, component)
  console.log('Created:', location)
}

const createIndex = () => {
  readdir(base('dist'), (err, files) => {
    if (err !== null) { throw err }
    const text = files.map((file) => {
      const icon = base('icons', file)
      const name = basename(icon, '.js')
      return `export { default as ${name} } from './${name}'\n`
    }).join('\n')
    writeFileSync(base('dist', 'index.js'), text)
  })
}

readdir(base('icons'), (err, files) => {
  if (err !== null) { throw err }

  files.forEach((file) => {
    const iconPath = base('icons', file)
    const filename = capitalize(camelcase(basename(iconPath, '.svg')))
    const svg = readFileSync(iconPath, 'utf-8')
    const $ = cheerio.load(svg, {
      xmlMode: true
    })
    const $svg = $('svg')
    clean($svg, $)
    const html = $svg.html()
    var viewBox = $svg.attr('viewBox')
    const component = iconTemplate(filename, html, viewBox)
    return createIcon(base('dist', filename + '.js'), component)
  })
  createIndex()
})
