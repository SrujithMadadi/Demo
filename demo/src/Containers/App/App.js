import React from 'react';
import './App.css';
import { StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route,Switch, Redirect } from 'react-router-dom';
import Home from "Containers/Home/Home";

function App() {
	return (
		<StylesProvider injectFirst>
			<BrowserRouter>
					<React.Fragment>
						<Switch>
							<Route path="/home" exact component={Home} />
							<Redirect from="/" to="/home"/>
						</Switch>
					</React.Fragment>
			</BrowserRouter>
		</StylesProvider>
	);
}

export default App;
