import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createStore,applyMiddleware,compose} from 'redux';
import {rootReducer} from './rootreducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore,getFirestore} from 'redux-firestore';
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase';
import fbconfig from './fb';

const store=createStore(rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
		reduxFirestore(fbconfig),
		reactReduxFirebase(fbconfig,{useFirestoreForProfile:true,userProfile:'users',attachAuthIsReady:true})
		   )
	);

store.firebaseAuthIsReady.then(() => {
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
});
