'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = onEvent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onEvent(props) {

	// if props children are not passed
	if (!props.children) {

		console.error("You didn't provided any children component to onEnter");
		return _react2.default.createElement(
			'span',
			null,
			' You didn\'t provided any children component to onEnter '
		);
	} else if (typeof props.children.length === 'undefined') {
		// if single child is provided

		var handler = function handler(event) {
			if (event.key == 'Enter') {
				// if enter key is pressed
				if (props.enter) {
					// if enter prop is passed
					props.enter(event);
				}
			} else if (event.key === ' ' && event.key.length == 1) {
				// if space key is pressed
				if (props.space) {
					// if space prop is passed
					props.space(event);
				}
			}
		};

		var newElement = _react2.default.cloneElement(props.children, { onKeyPress: handler }); // clone the element and pass the onKeyPress prop

		return newElement;
	} else {
		console.error('Pass just one element to OnEnter component you provided ' + props.children.length);
		return _react2.default.createElement(
			'span',
			null,
			' Pass just one element to OnEnter component you provided ',
			props.children.length,
			' '
		);
	}
}
