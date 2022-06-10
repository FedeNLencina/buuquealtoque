
import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

export default function NavBar() {
    return (<>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        component={Link}
                        to={'/home'}
                        sx={{ mr: 2 }}
                    >
                        <HomeIcon />
                    </IconButton >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        component={Link}
                        to={'/search'}
                        sx={{ mr: 2 }}
                    >
                        <SearchIcon />
                    </IconButton >
                    <Typography component='div' variant="h6" sx={{ flexGrow: 1 }}>
                        Buque Al Toque
                    </Typography>
                    <Button component={Link} to='/' color="inherit">Salir</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </>
    );
}