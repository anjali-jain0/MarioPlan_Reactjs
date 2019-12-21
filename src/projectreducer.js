const initState={
	projects:[
		{id:'1',title:'First Project',content:'First Project Content'},
		{id:'2',title:'Second Project',content:'Second Project Content'},
		{id:'3',title:'Third Project',content:'Third Project Content'}
	]
};

export const projectReducer = (state = initState,action) => {

	if(action.type === 'CREATE_PROJECT'){
		console.log('created project',action.project);
	}
    else if(action.type === 'CREATE_PROJECT_ERROR'){
    	console.log('error occured',action.err);
    	return state;
    }
	else{
	return state;
    }
}
