import React from 'react';

export default function onEvent (props) {

	// if props children are not passed
	if (!props.children) {
		
		console.error("You didn't provided any children component to onEnter");
		return <span> You didn&apos;t provided any children component to onEnter </span>

	} else if ( typeof props.children.length === 'undefined' ) { // if single child is provided

		let handler = (event) => {
			if (event.key == 'Enter' ) { // if enter key is pressed
				if(props.enter) { // if enter prop is passed
					props.enter(event);
				}
			} else if (event.key === ' ' && event.key.length == 1) { // if space key is pressed
				if(props.space) { // if space prop is passed
					props.space(event);
				}
			}
		}

		let newElement = React.cloneElement(props.children, { onKeyPress: handler }); // clone the element and pass the onKeyPress prop

		return newElement;
	} else {
		console.error('Pass just one element to OnEnter component you provided ' + props.children.length);
		return <span> Pass just one element to OnEnter component you provided {props.children.length} </span>
	}
}