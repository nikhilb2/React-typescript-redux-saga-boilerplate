import React from 'react';
import { connect } from 'react-redux'
import {  withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'


const App: React.FC = (props: any) => {
  console.log(props)
  const { classes } = props
  return (
    <div className={classes.container}>
      Coming soon
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
  )(withStyles({container: {
    backgroundColor: 'black',
    width: '100vw',
    height: '100vh'
  }})(App))
)
