import axios from 'axios'
import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { store } from '../redux'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
}))

export default function Header (props) {
  const classes = useStyles()
  const { drawerOpen, handleDrawerOpen } = props

  function logout () {
    delete axios.defaults.headers.Authorization
    localStorage.clear('token')
    store.dispatch({ type: 'logout' })
  }

  const selectAuthenticated = state => state && state.auth.authenticated
  const authenticated = useSelector(selectAuthenticated)
  const selectUsername = state => state && state.auth.username
  const username = useSelector(selectUsername)

  const selectTopic = state => state && state.topic.topic
  const topic = useSelector(selectTopic)
  const title = topic ? `CodeTalk - ${topic}` : 'CodeTalk'

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, drawerOpen && classes.menuButtonHidden)}
          >
            <MenuIcon />
        </IconButton>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {
          authenticated
            ? (
                <span>
                  <Typography>
                    Welcome, {username}
                  </Typography>
                  <Button variant="outlined" size="small" onClick={logout}>
                    Log out
                  </Button>
                </span>
              )
            : (
                <span>
                  <Button variant="outlined" size="small" component={Link} to="/login">
                    Log in
                  </Button>
                  <Button variant="outlined" size="small" component={Link} to="/register">
                    Register
                  </Button>
                </span>
              )
        }
      </Toolbar>
    </React.Fragment>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  drawerOpen: PropTypes.bool,
  handleDrawerOpen: PropTypes.func,
}
