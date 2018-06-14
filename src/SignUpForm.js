import React, { Component } from 'react';
import MaskedInput from 'react-text-mask'
import emailMask from 'text-mask-addons/dist/emailMask'
export default function(props){
	return(
	  <form className="signUp" onSubmit={props.onSubmit}> {/* 注册*/}
	    <div className="row">
	     <MaskedInput mask={emailMask} type="text" className="SignUpOrSignIn-input" placeholder="your email" value={props.formData.email} onChange={props.onChange.bind(this, 'email')}/>
	    </div>
	    <div className="row">
	      <input type="text" className="SignUpOrSignIn-input" placeholder="your username" value={props.formData.username} onChange={props.onChange.bind(this, 'username')}/>
	    </div>
	    <div className="row">
	      <input type="password" className="SignUpOrSignIn-input" placeholder="password" value={props.formData.password} onChange={props.onChange.bind(this, 'password')}/>
	    </div>
	    <div className="row-actions">
	      <button type="submit" className="signbutton">Sign Up</button>
	    </div>
	  </form>
	)
}

