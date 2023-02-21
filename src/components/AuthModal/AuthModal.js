import { useState } from 'react'
import { Box, Modal, Button, ButtonGroup, TextField } from '@mui/material'
import { style } from './style'
import { validateEmail, validatePassword } from '../../helpers'

export const AuthModal = () => {
  const [open, setOpen] = useState(false)
  const initialFormData = {
    email: '',
    password: '',
  }

  const initialErrors = {
    emailErr: false,
    passwordErr: false,
  }

  const [formData, setFormData] = useState(initialFormData)
  const [error, setError] = useState(initialErrors)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validator = () => {
    if (validateEmail(email) && validatePassword(password)) return true
    setError({
      emailErr: !validateEmail(email),
      passwordErr: !validatePassword(password),
    })
    return false
  }

  const submitHandle = type => {
    if(!validator()) return
  }

  //TODO constans
  const loginHandle = () => submitHandle('login')
  const registrationHandle = () => submitHandle('registration')

  const { email, password } = formData
  const { emailErr, passwordErr } = error
  return (
    <>
      <Button onClick={handleOpen}>Auth</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <h1>Auth form</h1>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1 },
            }}
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              name="email"
              error={!emailErr}
              helperText={!emailErr ? 'Not valid email' : ''}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              name="password"
              value={password}
              error={!passwordErr}
              helperText={!passwordErr ? 'Too short password' : ''}
              onChange={handleChange}
            />
          </Box>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button onClick={loginHandle}>Login</Button>
            <Button onClick={registrationHandle}>Registration</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  )
}
