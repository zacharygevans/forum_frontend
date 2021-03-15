import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'

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

export default function Answer (props) {
  const classes = useStyles()
  const { answer } = props

  return (
    <Grid item sm={12} md={12}>
      <CardActionArea>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary">
                {answer.createdAt}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {answer.text} - {answer.User.username}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

Answer.propTypes = {
  answer: PropTypes.object
}
