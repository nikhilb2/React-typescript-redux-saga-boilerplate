import React from 'react';
import { connect } from 'react-redux'
import {  withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import theme from './theme'
import Typography from '@material-ui/core/Typography'

const App: React.FC = (props: any) => {
  console.log(props)
  const { classes } = props
  return (
    <div className={classes.container}>
      <Typography className={classes.heading}>Coming soon</Typography>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => ({

})

const mapStateToProps = (state: any) => ({

})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles({
    container: {
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh'
    },
    heading: {
      ...theme.typography.caption,
      color: 'white',
      textAlign: 'center'
    }
  })(App))
)
