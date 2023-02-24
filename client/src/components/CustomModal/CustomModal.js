import { useContext, useState } from 'react'
import { Box, Modal, Button, ButtonGroup } from '@mui/material'
import { RichTextEditor } from '../RichTextEditor/RichEditor'
import { style } from './style'
import { createPage } from '../../api'
import { Context } from '../..'

export const CustomModal = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState('')
  const { pages } = useContext(Context)


  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const changeData = data => {
    setData(data)
  }

  const saveHandle = async () => {
   const res =  await createPage({text: data})
    pages.addPage(res)
    handleClose()
  }

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Add page
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <RichTextEditor changeData={changeData} data={data} />
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button onClick={saveHandle}>Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  )
}
