import React from 'react';
import ReacDOM from 'react-dom';
import OnEvent from './react-onevent';

class App extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<div className="col-lg-2">
					<OnEvent
						enter={ (event) => { console.log( 'enter key pressed') } }
						space={ (event) => { console.log( 'space key pressed') } }
					>
						<input type="text" />
					</OnEvent>
				</div>
			</div>
		)
	}
}

ReacDOM.render(
	<App />, 
	document.getElementById('app')
);