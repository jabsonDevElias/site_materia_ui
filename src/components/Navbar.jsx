import { Pets, Mail, Notifications } from '@mui/icons-material/'

import { AppBar, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
// import styled from 'styled-components'
import styled from '@mui/styled-engine';
import { useState } from 'react';



const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position='fixed'>
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>LAMA DEV</Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='search..' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail color="action" />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications color="action" />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30, bgcolor: 'orange' }} onClick={()=>setOpen(true)}>N</Avatar>
                </Icons>
                <UserBox>
                    <Avatar sx={{ width: 30, height: 30, bgcolor: 'orange' }} onClick={()=>setOpen(true)}>N</Avatar>
                    <Typography variant='span' >Jabson</Typography>
                </UserBox>
            </StyledToolbar>

            <Menu
                id="demo-positioned-menu"
                open={open}
                onClose={()=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>

        </AppBar>
    )
}

export default Navbar