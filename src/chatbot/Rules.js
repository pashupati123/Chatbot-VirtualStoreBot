import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500
  }
});

export default function Rules() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" gutterBottom style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>
          <h5>We’re encouraging guests to observe social distancing and remain six
          feet apart while entering and shopping in our stores.</h5>
        <ul>
          
        
          <li style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>
            Actively monitoring and, when needed, metering guest traffic to
            promote social distancing.
          </li>
          <li style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>Posting signage at the front of every store.</li>
          <li>Implementing floor signage.</li>
          <li style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>
            Dedicating team members to ensure guests wait in line at an
            appropriate distance until they're called to the register.
          </li>
          <li style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>Overhead audio messaging in our stores.</li>
        </ul>
        <h5 style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>We’ve ceased food sampling in our stores, as well as keeping our Starbucks cafes and fitting rooms closed for the time being (however, guests may still use our fitting rooms, or a mother’s room, for nursing if requested).</h5>
      </Typography>
    </div>
  );
}
