import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import Sidebar from './sidebar';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function Navbar() {
	const classes = useStyles();
	const auth = window.localStorage.getItem('token') ? true : false;

	const handleClick = () => {
		window.localStorage.removeItem('token');
		window.location.href = '/';
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Sidebar />
					<Typography variant="h6" className={classes.title}>
						MSDS: My Sensitive Data Storage
					</Typography>
					{auth && (
						<div>
							<IconButton
								aria-label="logout button"
								edge="start"
								className={classes.menuButton}
								onClick={handleClick}
								color="inherit"
							>
								<ExitToAppIcon />
							</IconButton>
						</div>
					)}
					<ConnectButton
						sx={{
							backgroundColor: '#FFFFFF',
						}}
					/>
				</Toolbar>
			</AppBar>
		</div>
	);
}
