import React, { useContext } from 'react'
import { AppBar, Box, Typography, Button, Toolbar } from '@mui/material'
import { AuthModal } from '../AuthModal/AuthModal'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'
import { deleteTokenFromLocalStore } from '../../helpers'

export const HeaderMenu = observer(() => {
  const { user } = useContext(Context)

  const logoutHandle = () =>{
    user.setUser({})
    user.setIsAuth(false)
    deleteTokenFromLocalStore()
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {!user.isAuth ? (
            <AuthModal />
          ) : (
            <Button color="inherit" onClick={logoutHandle}>LogOut</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
})
