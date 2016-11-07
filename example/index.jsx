import React from 'react';
import ReacDOM from 'react-dom';
import OnEvent from 'react-onevent';

class App extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<div className="col-lg-2">
					<OnEvent
						enter={ (value) => { console.log( 'enter key is pressed data is : ' + value) } }
						space={ (value) => { console.log( 'space key is pressed data is : ' + value) } }
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