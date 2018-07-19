'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Svg = require('./Svg');

var _Svg2 = _interopRequireDefault(_Svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Details = function Details(props) {
  return _react2.default.createElement(
    _Svg2.default,
    _extends({ viewBox: '0 0 42 42' }, props),
    _react2.default.createElement(
      'g',
      { stroke: '#000000' },
      _react2.default.createElement('circle', { cx: '21', cy: '21', r: '20' }),
      _react2.default.createElement('path', { d: 'M29.3333333,22.6666667 C28.4128588,22.6666667 27.6666667,21.9204746 27.6666667,21 C27.6666667,20.0795254 28.4128588,19.3333333 29.3333333,19.3333333 C30.2538079,19.3333333 31,20.0795254 31,21 C31,21.9204746 30.2538079,22.6666667 29.3333333,22.6666667 Z M21,22.6666667 C20.0795254,22.6666667 19.3333333,21.9204746 19.3333333,21 C19.3333333,20.0795254 20.0795254,19.3333333 21,19.3333333 C21.9204746,19.3333333 22.6666667,20.0795254 22.6666667,21 C22.6666667,21.9204746 21.9204746,22.6666667 21,22.6666667 Z M12.6666667,22.6666667 C11.7461921,22.6666667 11,21.9204746 11,21 C11,20.0795254 11.7461921,19.3333333 12.6666667,19.3333333 C13.5871412,19.3333333 14.3333333,20.0795254 14.3333333,21 C14.3333333,21.9204746 13.5871412,22.6666667 12.6666667,22.6666667 Z' })
    )
  );
};

exports.default = Details;
module.exports = exports['default'];