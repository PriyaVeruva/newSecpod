import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/formSlice'
import createSagaMiddleware from'redux-saga'
import rootSaga from "../../reduxsaga/userSaga";
const sagaMiddleWare=createSagaMiddleware()
export const store=configureStore({
	reducer:{
		user:userReducer
	},
	middleware:()=>[sagaMiddleWare]
})
sagaMiddleWare.run(rootSaga)