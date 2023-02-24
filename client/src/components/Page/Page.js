import React from 'react'
import { Paper } from '@mui/material'

export const Page = ({ content }) => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: '10px 0',
          width: '30vw',
          height: '30vh',
          padding:'10px'
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Paper>
    </>
  )
}
