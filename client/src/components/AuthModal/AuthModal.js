import { useContext, useState } from 'react'
import {
  Box,
  Modal,
  Button,
  ButtonGroup,
  TextField,
  Alert,
} from '@mui/material'
import jwtDecode from 'jwt-decode'
import { observer } from 'mobx-react-lite'

import { style } from './style'
import { setTokenToLocalStore, validateEmail, validatePassword } from '../../helpers'
import { TYPE_OF_MODAL } from './constans'
import { login, registration } from '../../api'
import { Context } from '../..'

export const AuthModal = observer(() => {
  const { user } = useContext(Context)

  const [open, setOpen] = useState(false)
  const initialFormData = {
    email: '',
    password: '',
  }

  const initialErrors = {
    emailErr: false,
    passwordErr: false,
    authErr: '',
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

  const submitHandle = async type => {
    if (!validator()) return
    let res
    try {
      if (type === TYPE_OF_MODAL.LOGIN) {
        res = await login({ email, password })
      } else {
        res = await registration({ email, password })
      }
      user.setUser(jwtDecode(res.token))
      user.setIsAuth(true)
      setTokenToLocalStore(res.token)
      handleClose()
    } catch (e) {
      setError({ ...error, authErr: e.message })
    }
  }

  const loginHandle = () => submitHandle(TYPE_OF_MODAL.LOGIN)
  const registrationHandle = () => submitHandle(TYPE_OF_MODAL.REGISTRATION)

  const { email, password } = formData
  const { emailErr, passwordErr, authErr } = error
  return (
    <>
      <Button onClick={handleOpen} color="inherit">
        Auth
      </Button>

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
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              name="email"
              error={emailErr}
              helperText={emailErr ? 'Not valid email' : ''}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              name="password"
              value={password}
              error={passwordErr}
              helperText={passwordErr ? 'Too short password' : ''}
              onChange={handleChange}
            />
            {authErr && (
              <Alert severity="error" color="error">
                {authErr}
              </Alert>
            )}
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
})
