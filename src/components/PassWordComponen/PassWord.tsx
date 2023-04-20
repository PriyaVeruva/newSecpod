import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validationSchema } from "../../pages/SignUpFormik/SignUpValidationSchema";
import { UserState, setUserDetails } from "../../redux/features/formSlice";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import './PassWord.css';
const PassWord = () => {
	const [showPassword, setShowPassword] = useState(false);
	const formData = useSelector((state: any) => state.user);
	console.log(formData, "formData");
	const dispatch = useDispatch();

	const handleSubmit = (
		values: UserState,
		{ resetForm }: FormikHelpers<UserState>
	) => {
		dispatch(setUserDetails(values));
		resetForm();
	};
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event: any) => {
		event.preventDefault();
	};
	return (
		<div>
			<Formik
				initialValues={formData}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }: any) =>
				 (
				<Form>
					<Field
						as={TextField}
						label="Password"
						name="password"
						variant="outlined"
						fullWidth="fullWidth"
						type={showPassword ? "text" : "password"}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										onClick={
											handleClickShowPassword
										}
										onMouseDown={
											handleMouseDownPassword
										}
										edge="end"
									>
										{!showPassword ? (
											<VisibilityOff />
										) : (
											<Visibility />
										)}
									</IconButton>
								</InputAdornment>
							),
							style: {
								borderColor:errors.name &&"var(--error)",
								color:touched.name &&
								Boolean(errors.name) &&"var(--error)",
							},
						}}
						InputLabelProps={{
							style: {
								fontSize: "24px",
								color:
									touched.name &&
									errors.name
										? "var(--error)"
										: "var(--darkPara)",
								fontFamily:
									"Futura-Medium",
							},
						}}
						error={
							touched.name &&
							Boolean(errors.name)
						}
						helperText={
							touched.name &&
							errors.name
						}
					/>
				</Form>
				)}
			</Formik>
		</div>
	);
};

export default PassWord;
