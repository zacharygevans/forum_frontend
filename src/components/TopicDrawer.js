import { Divider, Drawer, IconButton, ListItem, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { store } from '../redux'

export default function TopicDrawer (props) {
  const { open, handleDrawerClose } = props
  const [topics, setTopics] = useState([])

  useEffect(async () => {
    const response = await axios.get('/topics')
    const topics = response.data.topics
    setTopics(topics)
    store.dispatch({ type: 'setTopics', payload: { topics } })
  }, [])

  return (
    <Drawer
      variant="persistent"
      open={open}
    >
      <div>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
        <ListItem button component={Link} to="/">
          <ListItemText primary="All" />
        </ListItem>
        {topics.map(topic => (
          <ListItem button key={topic.title} component={Link} to={'/' + topic.title}>
            <ListItemText primary={topic.title} />
          </ListItem>
        ))}
    </Drawer>
  )
}

TopicDrawer.propTypes = {
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func
}
