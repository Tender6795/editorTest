import { Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../..'

export const PagesList = () => {
  const { pages } = useContext(Context)

  return (
    <>
      <Button>Add Page</Button>
      {!!pages.length ? (
        <></>
      ) : (
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
          You have no pages created
        </Typography>
      )}
    </>
  )
}
