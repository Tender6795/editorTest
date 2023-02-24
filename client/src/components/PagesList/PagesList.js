import { Typography, Box } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../..'
import {  getPages } from '../../api'
import { CustomModal } from '../CustomModal/CustomModal'
import { Page } from '../Page/Page'
import { Spinner } from '../Spinner/Spinner'

export const PagesList = observer(() => {
  const { pages } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPages()
      .then(data => {
        pages.setPages(data)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <Spinner />

  const listOfPages = pages.pages
  return (
    <>
      {!!listOfPages.length ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            height: '80vh',
            margin: '10px',
          }}
        >
          <CustomModal />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            {listOfPages.map(item => (
              <Page key={item.id} content={item.text} />
            ))}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
          }}
        >
          <Typography variant="h3" component="div">
            You have no pages created
          </Typography>
          <CustomModal />
        </Box>
      )}
    </>
  )
})
