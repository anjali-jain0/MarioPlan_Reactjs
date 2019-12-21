import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signUp} from './authactions';

class SignUp extends React.Component {

  state={
    email:'',
    password:'',
    firstname:'',
    lastname:''
  }

  handleChange = (e) => {
    this.setState({[e.target.id]:e.target.value});
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    
    if(this.props.auth.uid){
        return (
            <Redirect to='/' />
            );
    }
    else{
    return (

      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Sign Up</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>
           <div className='input-field'>
            <label htmlFor='firstname'>First Name</label>
            <input type='text' id='firstname' onChange={this.handleChange} />
          </div>
           <div className='input-field'>
            <label htmlFor='lastname'>Last Name</label>
            <input type='text' id='lastname' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-dpth-0'>Sign Up</button>
            <div className='red-text center'>
            {this.props.authError ? <p>{this.props.authError}</p>:null}
          </div>
          </div>
        </form>
      </div>

    );
  }}
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp:(newUser) => dispatch(signUp(newUser)) 
  }
}

const mapStateToProps = (state) => {
  return {
    authError:state.auth.authError,
    auth:state.firebase.auth
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)