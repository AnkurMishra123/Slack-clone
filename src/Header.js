import React from 'react'
import "./Header.css"
import { Avatar } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
  return (
    <div className='header'>
      <div className="header__left">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 24, height: 24 }}
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>

    </div>
  )
}

export default Header