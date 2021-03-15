import axios from 'axios'
import { useState, useEffect } from 'react'
import { Button, Card, CardActionArea, CardContent, Grid, makeStyles, TextField } from '@material-ui/core'
import Question from './Question'
import { useParams } from 'react-router-dom'
import { store } from '../redux'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
})

export default function QuestionList (props) {
  const classes = useStyles()
  const [questions, setQuestions] = useState([])
  const [question, setQuestion] = useState('')
  const [hack, setHack] = useState(0)
  const { topic } = useParams()
  const selectAuthenticated = state => state && state.auth.authenticated
  const authenticated = useSelector(selectAuthenticated)
  const selectUserId = state => state && state.auth.userId
  const userId = useSelector(selectUserId)

  useEffect(async () => {
    store.dispatch({ type: 'setTopic', payload: { topic } })
    let response
    if (topic) {
      response = await axios.get(`/questions?topic=${topic}`)
    } else {
      response = await axios.get('/questions')
    }
    setQuestions(response.data.questions)
  }, [topic, hack])

  async function ask () {
    const questionData = {
      title: question,
      topicTitle: topic,
      userId
    }
    await axios.post('/questions/', questionData)
    setHack(hack + 1)
  }

  return (
    <main>
      <Grid container spacing={4}>
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
        {
          authenticated && topic &&
          <CardActionArea component="div">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='newQuestion'
                    label='New question'
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                  <Button
                    fullWidth
                    variant='contained'
                    color='primary'
                    onClick={ask}
                  >
                    Ask
                  </Button>
                </CardContent>
              </div>
            </Card>
          </CardActionArea>
        }
      </Grid>
    </main>
  )
}
