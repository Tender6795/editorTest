import { useState } from 'react'
import { Box, Modal, Button, ButtonGroup } from '@mui/material'
import { RichTextEditor } from '../RichTextEditor/RichEditor'
import { style } from './style'

export const CustomModal = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState('')

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const changeData = data => {
    setData(data)
  }
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
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
            <Button>Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  )
}
