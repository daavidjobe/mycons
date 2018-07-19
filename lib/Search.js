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

var Search = function Search(props) {
    return _react2.default.createElement(
        _Svg2.default,
        _extends({ viewBox: '0 0 25 25' }, props),
        _react2.default.createElement(
            'g',
            { stroke: 'none' },
            _react2.default.createElement(
                'g',
                { transform: 'translate(1.000000, 1.000000)' },
                _react2.default.createElement('rect', { x: '0', y: '0', width: '24', height: '24' }),
                _react2.default.createElement('ellipse', { stroke: '#000000', cx: '10.5', cy: '10', rx: '10.5', ry: '10' }),
                _react2.default.createElement('path', { d: 'M23.5,23.5 L17.5,17.5', stroke: '#000000' })
            )
        )
    );
};

exports.default = Search;
module.exports = exports['default'];