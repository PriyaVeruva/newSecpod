import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface UserState {
	name: string;
	phoneNumber: string;
	email: string;
	companyName: string;
	password: string;
}
export const initialState: UserState = {
	name: "",
	phoneNumber: "",
	email: "",
	companyName: "",
	password: "",
};
const userSlice = createSlice({
	name: "signup",
	initialState,
	reducers: {
		setUserDetails: (state, action: PayloadAction<UserState>) => {
			state.name = action.payload.name;
			state.phoneNumber = action.payload.phoneNumber;
			state.email = action.payload.email;
			state.companyName = action.payload.companyName;
			state.password = action.payload.password;
		},
		setSuccessData: (state: any, action) => {
			state = action.payload;
		},
		setFailureData: (state: any, action) => {
			state = action.payload;
		},
	},
});
export const { setUserDetails, setSuccessData, setFailureData } =
	userSlice.actions;
export default userSlice.reducer;
