import React, {Component} from 'react';
export default function(props){
	return(
		<form className="signIn" onSubmit={props.onSubmit}> {/* 登录*/}
		    <div className="row">
		      <input type="text" className="SignUpOrSignIn-input" placeholder="your username" value={props.formData.username} onChange={props.onChange.bind(this, 'username')}/>
		    </div>
		    <div className="row">
		      <input type="password" className="SignUpOrSignIn-input" placeholder="password" value={props.formData.password} onChange={props.onChange.bind(this, 'password')}/>
		    </div>
		    <div className="row-actions">
		      <button type="submit" className="signbutton">Sign In</button>
		      <a href="#" className="forgetPsw"onClick={props.onForgotPassword}>forget password？</a>
		    </div>
		</form>
	)
}