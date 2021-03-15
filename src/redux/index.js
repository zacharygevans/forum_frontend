import { combineReducers, createStore } from 'redux'

function auth (state = {}, action) {
  switch (action.type) {
    case 'login': {
      const token = action.payload.token
      const tokenParts = token.split('.')
      const encodedPayload = tokenParts[1]
      const rawPayload = atob(encodedPayload)
      const user = JSON.parse(rawPayload)
      return { authenticated: true, username: action.payload.username, userId: user.id }
    }
    case 'logout':
      return { authenticated: false }
    default:
      return state
  }
}

function topic (state = {}, action) {
  switch (action.type) {
    case 'setTopic':
      return { topic: action.payload.topic }
    case 'setTopics':
      return { topics: action.payload.topics }
    default:
      return state
  }
}

export const store = createStore(
  combineReducers({ auth, topic })
)
