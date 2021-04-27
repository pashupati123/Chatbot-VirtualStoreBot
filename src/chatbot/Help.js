import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500
  }
});

export default function Help() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" gutterBottom style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>
          <h5>best way to reach a guest service team member for help.</h5>
        <ul>
          
        
          <li style={{fontFamily: 'HelveticaforTargetBold,Arial'}}>
          While our teams are working to assist guests as quickly as possible, hold times may be longer than usual. Many Target.com order issues can be resolved by clicking on “Fix an issue” within the order details page of your account. We also have answers to frequently asked questions at <a style={{backgroundColor: "white", color: "blue", textDecoration: "none",display: "inline-block" ,width:"100%"}} href="https://help.target.com/help" target="_blank">help.target.com</a>
          </li>
          </ul>
      </Typography>
    </div>
  );
}
