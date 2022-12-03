import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import { green, red } from '@mui/material/colors';
// import blue from 'material-ui/colors/blue';
import { createStyles, ThemeProvider } from '@mui/styles';

import Dashboard from './pages/Dashboard';

import logo from './logo.svg';
import './App.css';

import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
	},
]);

const theme = createStyles({
	palette: {
		primary: {
			main: red[700],
		},
		secondary: {
			main: green[600],
		},
	},
});

function App() {
	return (
		<div className="App2">
			<ThemeProvider theme={theme}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</div>
	);
}

export default App;
