import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import LogOutButton from '@material-ui/icons/PowerSettingsNew'
import Grid from '@material-ui/core/Grid'
import logo from '../static-contents/logopng.png'

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 2,
    textAlign: 'center',
    color: '#cc0000',
  },
  button: {
    color: 'white',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  input: {
    display: 'none',
  },
  fab: {
    margin: 2,
  },
  absolute: {
    position: 'absolute',
    bottom: 2,
    right: 2,
  },
})

let HeaderTextStyle = {
  position: 'relative',
  marginLeft: '6%',
  fontFamily: 'HelveticaforTargetLight,Arial',
  fontSize: '12px',
}
class AppHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openFeedbackDialog: false,
      openAboutDialog: false,
      openPrintHolidayDialog: false,
      holidayList: [],
    }
  }
  renderFeedBack = () => {
    window.open('https://pages.git.target.com/EEL/dojo/', '_blank')
  }
  closeFeedBackDialog = () => {
    this.setState({
      openFeedbackDialog: false,
    })
  }

  closePrintHolidayDialog = () => {
    this.setState({
      openPrintHolidayDialog: false,
    })
  }
  openAboutDialog = () => {
    this.setState({
      openAboutDialog: true,
    })
  }
  closeAboutDialog = () => {
    this.setState({
      openAboutDialog: false,
    })
  }

  handleClose = () => {
    this.setState({ open: false })
  }
  render() {
    const { userName } = this.props
    const classes = styles()

    return (
      <div
        style={{
          height: '200px',
          backgroundColor: '#cc0000',
          color: 'white',
        }}
      >
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            sm={6}
            style={{ paddingLeft: '4%', paddingTop: '1%' }}
          >
            <h6>
              <span
                style={{
                  fontFamily: 'HelveticaforTargetLight,Arial',
                  fontWeight: 'lighter',
                  fontSize: '15px',
                }}
              >
                Welcome
              </span>
              <span
                style={{
                  fontFamily: 'HelveticaforTargetBold,Arial',
                  fontWeight: 'bold',
                  marginLeft: '1%',
                  fontSize: '15px',
                }}
              >
                {userName[0]}
              </span>
            </h6>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{ textAlign: 'right', paddingRight: '4%' }}
          >
            <IconButton
              style={{
                marginLeft: '5px',
                width: '80px',
                color: 'white',
                fontFamily: 'HelveticaforTargetLight,Arial',
                fontWeight: 'lighter',
                position: 'relative',
                bottom: '13px',
              }}
              className={classes.button}
              aria-label="Logout "
              onClick={userName[1]}
            >
              <LogOutButton /> <h6 style={HeaderTextStyle}>Logout</h6>
            </IconButton>
          </Grid>
          <Grid item xs={12} style={{ paddingLeft: '3%' }}>
            <br />
            <span style={{ display: 'inline' }}>
              <img
                src={logo}
                alt="logofile"
                style={{
                  height: '53px',
                  width: '53px',
                  display: 'inline',
                  marginLeft: '7px',
                }}
              />
              <span
                style={{
                  position: 'relative',
                  bottom: '12px',
                  fontSize: '38px',
                  fontFamily: 'HelveticaforTargetBold,Arial',
                }}
              >
                 store virtual assistant
              </span>{' '}
            </span>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default AppHeader
