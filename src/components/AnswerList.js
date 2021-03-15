import axios from 'axios'
import { useState, useEffect } from 'react'
import { Button, Card, CardActionArea, CardContent, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import Answer from './Answer'
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

export default function AnswerList (props) {
  const classes = useStyles()
  const [answers, setAnswers] = useState([])
  const [question, setQuestion] = useState({})
  const [answer, setAnswer] = useState('')
  const { topic, questionId } = useParams()
  const selectAuthenticated = state => state && state.auth.authenticated
  const authenticated = useSelector(selectAuthenticated)
  const selectUserId = state => state && state.auth.userId
  const userId = useSelector(selectUserId)
  const [hack, setHack] = useState(0)

  useEffect(async () => {
    store.dispatch({ type: 'setTopic', payload: { topic } })
    const response = await axios.get(`/questions/${questionId}`)
    setAnswers(response.data.Answers)
    setQuestion(response.data)
  }, [questionId, hack])

  async function makeAnswer () {
    const answerData = {
      text: answer,
      questionId,
      userId
    }
    await axios.post('/answers/', answerData)
    setHack(hack + 1)
  }

  return (
    <main>
      <Grid container spacing={4}>
        <CardActionArea>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {question.title}
                  { question.User && ' - ' + question.User.username}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {question.createdAt}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {question.description}
                </Typography>
              </CardContent>
            </div>
          </Card>
        </CardActionArea>
        {answers.map((answer) => (
          <Answer key={answer.id} answer={answer} />
        ))}
        {
          authenticated &&
          <CardActionArea component="div">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <TextField
                      variant='outlined'
                      margin='normal'
                      required
                      fullWidth
                      id='newAnswer'
                      label='New answer'
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                    <Button
                      fullWidth
                      variant='contained'
                      color='primary'
                      onClick={makeAnswer}
                    >
                      Answer
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
