import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const learnmore = () =>{
    window.open("https://www.target.com/c/shipt/-/N-t4bob","_blank");
}

export default function Guestservices() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>Same Day Delivery</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>
          Get it as soon as today,your shopper will leave your order right at your doorstep.
          <br />
          Get groceries, essentials & more delivered to your door by a Shipt shopper.
          <br />
          <Button  className={classes.button} style={{fontFamily: "HelveticaforTargetLight,Arial",color:"#fff",backgroundColor:"#cc0000"}}
                variant="contained" onClick={learnmore}>
                learn more
              </Button>
  
            
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>Contactless shopping options</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>
           No signature required, We'll load your trunk for you, too. Only available in the Target App.
           <br />
           Free with membership or $9.99/order. Your shopper will now leave your order right at your doorstep.
           <br />
           <Button  className={classes.button} style={{fontFamily: "HelveticaforTargetLight,Arial",color:"#fff",backgroundColor:"#cc0000"}}
                variant="contained" onClick={learnmore}>
                learn more
              </Button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>Return product at Target aimed the coronavirus outbreak</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>
          Yes, guests who have items with a “return by date” from March 26-April 26, during which we suspended returns, will have until June 15 to return them.
           <br />
           Target.com purchases can also be returned by mail using our online return center—sign in to your Target account to get started.
          <br />
          <Button  className={classes.button} style={{fontFamily: "HelveticaforTargetLight,Arial",color:"#fff",backgroundColor:"#cc0000"}}
                variant="contained" onClick={learnmore}>
                learn more
              </Button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>Place a shipt order</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>
          Many items are available to order for Same Day Delivery with Shipt. You can start with a free 4-week trial. After that, an annual Shipt plan is just $99 for unlimited orders of $35 or more. Or, you can pay per Same Day Delivery order.
           <br />
           <Button  className={classes.button} style={{fontFamily: "HelveticaforTargetLight,Arial",color:"#fff",backgroundColor:"#cc0000"}}
                variant="contained" onClick={learnmore}>
                learn more
              </Button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>Drive up - contactless</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>
          Drive Up is contactless – the Team Member will scan your pickup bar code through the window and place your items in your car trunk or back seat.           <br />
           <Button  className={classes.button} style={{fontFamily: "HelveticaforTargetLight,Arial",color:"#fff",backgroundColor:"#cc0000"}}
                variant="contained" onClick={learnmore}>
                learn more
              </Button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
