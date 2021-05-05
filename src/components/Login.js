import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { store } from '../redux'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default () => {
  const classes = useStyles()
  const { handleSubmit, register, remember } = useForm({
    defaultValues: {
      remember: true
    }
  })
  const [error, setError] = useState('')
  const history = useHistory()

  const onSubmit = handleSubmit(async (data) => {
    const { username, password, remember } = data
    try {
      const response = await axios.post('/login', { username, password })
      const token = response.data.token
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` }
      store.dispatch({ type: 'login', payload: { username, token } })
      if (remember) {
        localStorage.setItem('token', token)
        localStorage.setItem('username', username)
      }
      history.push('/')
    } catch (error) {
      if (error.response.status === 401) {
        setError('Invalid credentials')
      } else {
        setError('Something went wrong')
      }
    }
  })

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          {error || 'Log in'}
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            autoComplete='username'
            autoFocus
            inputRef={register}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            inputRef={register}
          />
          <FormControlLabel
            control={<Checkbox color='primary' />}
            label='Remember me'
            name='remember'
            value={remember}
            inputRef={register}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Link href='/register' variant='body2'>
                {'Don\'t have an account? Register'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
