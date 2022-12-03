// import { red400 } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/styles/colors/';

// A custom theme for this app
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#e56cd6',
		},
		secondary: {
			main: '#79857b',
		},
		error: {
			main: '#ef1111',
		},
		background: {
			default: '#ffffff',
		},
	},
});

export default theme;
