import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
// import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemText from '@mui/material/ListItemText';

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});

export default function Sidebar() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, left: open });
	};
	const pathArray = ['/'];
	const list = () => (
		<div className={clsx(classes.list)} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
			<List>
				{['Home'].map((text, index) => (
					<ListItem
						button
						onClick={(e) => {
							toggleDrawer(false);
							window.location.href = pathArray[index];
						}}
						key={text}
					>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
		</div>
	);

	return (
		<React.Fragment key="left">
			<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
				<MenuIcon />
			</IconButton>
			<Drawer anchor="left" open={state['left']} onClose={toggleDrawer(false)}>
				{list()}
			</Drawer>
		</React.Fragment>
	);
}
