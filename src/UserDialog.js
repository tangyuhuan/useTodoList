import React, { Component } from 'react';
import './UserDialog.css'
import {signUp, signIn, sendPasswordResetEmail} from './leanCloud'
import ForgotPasswordForm from './ForgotPasswordForm'
//import SignInOrSignUp from './SignInOrSignUp'
import SimpleTabs from './SimpleTabs'
class UserDialog extends Component{
	constructor(props){
		super(props)
		this.state = {
			selectedTab: 'signInOrSignUp', // 'forgotPassword'
			formData: {
				email: '',
				username:'',
				password:'',
			}
		}
	}
	signUp(e){
		e.preventDefault()
		let {email, username, password} = this.state.formData
    	var validUsernameTest = /^\w{3,}$/
		if(username.length<3){
			alert('用户名必须大于三个字符');
			return;
		}
		var validPasswordTest = /^\w{6,}$/
		if(!validPasswordTest.test(password)){
			alert('密码只能由字母、数字、下划线组成，且必须大于6个字符');
			return;
		}
	    let success = (user)=>{
	        this.props.onSignUp(user)
	    }
	    let error = (error)=>{
      		switch(error.code){
        	case 202:
          		alert('用户名已被占用')
          		break
          	case 125:
          		alert('请输入有效的email地址')
          		break
        	default:
          		alert(error)
          		break
          	}
	    }
	    signUp(email, username, password, success, error)
	}
	signIn(e){
		e.preventDefault()
    	let {username, password} = this.state.formData
    	let success = (user)=>{
      		this.props.onSignIn(user)
    	}
    	let error = (error)=>{
	      	switch(error.code){
	        case 210:
	          alert('用户名与密码不匹配')
	          break
	        case 211:
	          alert('找不到该用户')
	          break
	        default:
	          alert(error)
	          break
	      }
    	}
    	signIn(username, password, success, error)
  	}
	changeFormData(key,e){
		let formdata = e.target.value;
		if(key==='password'){
			this.setState(preState => ({
				formData:{...preState.formData, password:formdata}
			}))	
		}else if(key==='username'){
			this.setState(preState => ({
				formData:{...preState.formData, username:formdata}
			}))	
		}else if(key==='email'){
			this.setState(preState => ({
				formData:{...preState.formData, email:formdata}
			}))		
		}else{
			console.log('changeFormData error!')
		}
	}
	showForgotPassword(){
        this.setState({
        	selectedTab: 'forgotPassword'
        })
	}
	resetPassword(e){
		e.preventDefault()
		sendPasswordResetEmail(this.state.formData.email)    
	}
	returnToSignIn(){
	    this.setState({
        	selectedTab: 'signInOrSignUp'
        })
  	}
	render(){
		return(
			<div className="UserDialog-Wrapper">
			   <div className="UserDialog">
				    {
				    	this.state.selectedTab === 'signInOrSignUp' ? 
				    	<SimpleTabs 
				    	formData={this.state.formData} 
				    	onSignIn={this.signIn.bind(this)}
				    	onSignUp={this.signUp.bind(this)}
				    	onChange={this.changeFormData.bind(this)}
				    	onForgotPassword={this.showForgotPassword.bind(this)}
				    	/>: 
					    <ForgotPasswordForm formData={this.state.formData}
					    onSubmit={this.resetPassword.bind(this)}
					    onChange={this.changeFormData.bind(this)}
					    onSignIn={this.returnToSignIn.bind(this)} />
				 	}
			   </div>
			 </div>
		)
	}
}

export default UserDialog;