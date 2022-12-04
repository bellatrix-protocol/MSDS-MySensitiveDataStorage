import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Navbar from './components/navbar';
import { green, red, blue } from '@mui/material/colors';
import { useSigner } from 'wagmi';

import AddData from './components/AddData.js';
import QueryData from './components/QueryData.js';
// import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" href="">
				MSDS
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const mdTheme = createTheme({
	palette: {
		primary: {
			main: blue[600],
		},
		secondary: {
			main: green[600],
		},
	},
});

function DashboardContent() {
	// const { data: signer } = useSigner();
	return (
		<ThemeProvider theme={mdTheme}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />

				<Box
					component="main"
					sx={{
						backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
						flexGrow: 1,
						height: '100vh',
						overflow: 'auto',
					}}
				>
					<Navbar />
					<Toolbar />
					<Container maxWidth="lg" sx={{ mt: 0, mb: 2 }}>
						<Grid container spacing={3}>
							{/* Chart */}
							<Grid item xs={12} md={8} lg={8}>
								<Paper
									sx={{
										p: 2,
										display: 'flex',
										flexDirection: 'column',
										height: '70vh',
									}}
								>
									<QueryData />
								</Paper>
							</Grid>
							{/* Recent Deposits */}
							<Grid item xs={12} md={4} lg={4}>
								<Paper
									sx={{
										p: 2,
										display: 'flex',
										flexDirection: 'column',
										height: '70vh',
									}}
								>
									<AddData />
									{/* <Deposits /> */}
								</Paper>
							</Grid>
						</Grid>
						<Copyright sx={{ pt: 4 }} />
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default function Dashboard() {
	return <DashboardContent />;
}
