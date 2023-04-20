import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { SIGNUP_API } from "../config /config";
import {
	setUserDetails,
	setSuccessData,
	setFailureData,
} from "../redux/features/formSlice";
interface responseData {
	data: any;
}
function* userSaga(action: any) {
	try {
		const response: responseData = yield call(
			axios.post,
			SIGNUP_API,
			action.payload
		);
		const responseData: responseData = yield response.data;
     yield put(setSuccessData(responseData));
} 
catch (error: any) {
		yield put(setFailureData(error.message));
	}
}
function* rootSaga() {
	yield takeEvery(setUserDetails, userSaga);
	// to make multiple api calls declare the action and decalre function and inside function make over the api call
}
export default rootSaga;
