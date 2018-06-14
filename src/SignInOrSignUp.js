import React, {Component} from 'react';
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

class SignInOrSignUp extends Component{
	constructor(props){
		super(props);
		this.state = {
			selected: 'signUp'
		}
	}
	switch (e) {
   		this.setState({
      		selected: e.target.value
    	})
	}
	render(){
		return(
	      <div className="signInOrSignUp">
	        <nav>
	            <input type="radio" value="signUp" 
	              checked={this.state.selected === 'signUp'}
	              onChange={this.switch.bind(this)}
	            <input type="radio" value="signIn" 
	              checked={this.state.selected === 'signIn'}
	              onChange={this.switch.bind(this)}
	        </nav>
	        <div className="panes">
	          {this.state.selected === 'signUp' ? 
	          	<SignUpForm formData={this.props.formData}
	          	onSubmit={this.props.onSignUp}
	          	onChange={this.props.onChange}/>
	           : null}
	          {this.state.selected === 'signIn' ? 
	          	<SignInForm formData={this.props.formData}
	          	onSubmit={this.props.onSignIn}
	          	onChange={this.props.onChange}
	          	onForgotPassword={this.props.onForgotPassword} />
	          : null}
	        </div>
	      </div>
		)
	}
}

export default SignInOrSignUp;

