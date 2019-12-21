export const createProject= (project) => {
	return (
         (dispatch,getState,{getFirestore,getFirebase}) => {

         	const firestore=getFirestore();
            const profile=getState().firebase.profile;
            const authorId=getState().firebase.auth.uid;
         	firestore.collection('projects').add({
         		...project,
         		authorFirstName:profile.firstname,
         		authorLastName:profile.lastname,
         		authorId:authorId,
         		createdAt:new Date()
         	}).then(() => {
         		dispatch({type:'CREATE_PROJECT',project});
         	}).catch((err) => {
         		dispatch({type:'CREATE_PROJECT_ERROR',err});
         	});
         }
	)
};