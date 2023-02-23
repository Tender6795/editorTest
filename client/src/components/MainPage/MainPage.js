import React, { useContext } from 'react'
import { Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { Context } from '../..'
import { PagesList } from '../PagesList/PagesList'

export const MainPage = observer(() => {
  const { user } = useContext(Context)

  return (
    <>
      {!user.isAuth ? (
        <Typography
          variant="h3"
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
          }}
        >
          You don't authirization
        </Typography>
      ) : (
        <PagesList />
      )}
    </>
  )
})
