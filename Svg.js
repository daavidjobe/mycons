import React from 'react'

const Svg = ({ children, color, size, style = {}, width, height, ...props }) => {
  const computedSize = size || '1em'

  const styleProp = {
    verticalAlign: 'middle',
    ...style
  }

  const computedColor = color || style.color
  if (computedColor) {
    styleProp.color = computedColor
  }

  return (
    <svg
      children={children}
      fill='transparent'
      preserveAspectRatio='xMidYMid meet'
      height={height || computedSize}
      width={width || computedSize}
      {...props}
      style={styleProp}
    />
  )
}

export default Svg
