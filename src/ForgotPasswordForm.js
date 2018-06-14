import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    }
  }


  render() {
    const { classes } = this.props;
	const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value}>
            <Tab label="Reset Password" />
          </Tabs>
        </AppBar>
        {value === 0 &&<TabContainer>
          <div className="panes">
			    <form className="forgotPassword" onSubmit={this.props.onSubmit}> {/* 登录*/}
			      <div className="row">
			        <input type="text" value={this.props.formData.email} className="SignUpOrSignIn-input"
			          onChange={this.props.onChange.bind(this, 'email')}/>
			      </div>
			      <div className="row-actions">
			        <button className="signbutton" type="submit">send email to reset password</button>
			        <a href="#" className="forgetPsw" onClick={this.props.onSignIn}>back to login</a>
			      </div>
			    </form>
			 </div>
        </TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);