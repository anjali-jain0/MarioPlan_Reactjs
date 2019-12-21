const initState={
	authError:null
};

export const authReducer = (state=initState,action) => {
    
    if(action.type==='LOGIN_ERROR'){
    console.log('login error');
	return {
		...state,
		authError:'Login failed'
		};
    }
    else if(action.type==='LOGIN_SUCCESS'){
    console.log('login success');
	return {
		...state,
		authError:'Login success'
		};
    }
    else if(action.type==='SIGNOUT_SUCCESS'){
    console.log('signout success');
    	return state;
    }
    else if(action.type==='SIGNUP_SUCCESS'){
    console.log('signup success');
        return {
            ...state,
            authError:null
        }
    }
    else if(action.type==='SIGNUP_ERROR'){
    console.log('signup error');
        return{
            ...state,
            authError:action.err.message
        }
    }
    else{
    return state;
    }
}
