import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {

	// Setting Login form states
	constructor(props) {
		super(props);
		this.state = {
			username:'',
			password:''
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({[e.target.name]: e.target.value});
		//Console debug test
		console.log(this.state); 
	}

    render() {
        return (
            <div>
				<link href="StaffLogin.css" rel="stylesheet"/>
			    
			    <div className="overlay">

			    	<div className="login-box">
			    		<form>

					    <h1>login</h1>

					    <div className="textbox"> 
			          		<i className="fas fa-user"></i>
					      	<input
					      		type="username"
					      		id = "username"
					      		name = "username"
					      		placeholder="username"
					      		onChange={this.onChange}
					      	/>
					    </div>

					    <div className="textbox">
			          		<i className="fas fa-user"></i>
					      	<input
					      		type="password"
					      		id = "password"
					      		name = "password"
					      		placeholder="password"
					      		onChange={this.onChange}
					      	/>
					    </div>

			        	<button className="btn" primary>Login</button>
			        	
			        	</form>
					  
					  </div>
				 
				  </div> 

				<Link to='/' className='backLink'>Go back</Link>
			</div>
        );
    }
}

export default LoginForm;