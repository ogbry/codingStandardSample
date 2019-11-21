import React from 'react';

import { LandingPage } from './layouts';
import { SignIn } from './components/SignIn';
function App() {
	return (
		<div className="App">
			<LandingPage component={<SignIn />} />
		</div>
	);
}

export default App;
