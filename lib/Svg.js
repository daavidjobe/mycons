'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Svg = function Svg(_ref) {
  var children = _ref.children,
      color = _ref.color,
      size = _ref.size,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      width = _ref.width,
      height = _ref.height,
      props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style', 'width', 'height']);

  var computedSize = size || '1em';

  var styleProp = _extends({
    verticalAlign: 'middle'
  }, style);

  var computedColor = color || style.color;
  if (computedColor) {
    styleProp.color = computedColor;
  }

  return _react2.default.createElement('svg', _extends({
    children: children,
    fill: 'transparent',
    preserveAspectRatio: 'xMidYMid meet',
    height: height || computedSize,
    width: width || computedSize
  }, props, {
    style: styleProp
  }));
};

exports.default = Svg;
module.exports = exports['default'];