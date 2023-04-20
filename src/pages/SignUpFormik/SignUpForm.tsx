import React, { useState } from "react";
import { Form, Field, FormikHelpers, Formik } from "formik";
import { TextField, IconButton, InputAdornment, Checkbox } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./SignUpForm.css";
import { validateField, validationSchema } from "./SignUpValidationSchema";
import { TERMS_CONDITIONS } from "../../utils/cms";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails, UserState } from "../../redux/features/formSlice";
import { FormFieldsData } from "./data";
import * as Yup from "yup";
const SignUpForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const dispatch = useDispatch();
	const formData = useSelector((state: any) => state.user);
	console.log(formData, "formData");
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
		<div className="signUpFormContents">
			<Formik
				initialValues={formData}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }: any) => (
					<Form>
						{FormFieldsData.map((ele, i) => {
							return (
								<div key={i}>
									<Field
										label={ele.label}
										name={ele.name}
										as={TextField}
										fullWidth={ele.fullWidth}
										variant={ele.variant}
										validate={validateField(
											ele.name,
											Yup.string().required()
										)}
										error={
											touched[ele.name] &&
											Boolean(errors[ele.name])
										}
										helperText={
											touched[ele.name] &&
											errors[ele.name]
										}
										InputLabelProps={{
											style: {
												fontSize: "24px",
												color:
													touched[
														ele.name
													] &&
													errors[
														ele.name
													]
														? "var(--error)"
														: "var(--darkPara)",
												fontFamily:
													"Futura-Medium",
											},
										}}
										type={
											ele.name ===
												"password" &&
											(showPassword
												? "text"
												: "password")
										}
										InputProps={
											ele.name === "password"
												? {
														endAdornment:
															(
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
															borderColor:
																errors.name &&
																"var(--error)",
															color:
																touched[
																	ele
																		.name
																] &&
																Boolean(
																	errors[
																		ele
																			.name
																	]
																) &&
																"var(--error)",
														},
												  }
												: ele.name !==
														"" && {
														style: {
															borderColor:
																errors.name &&
																"var(--error)",
															color:
																touched[
																	ele
																		.name
																] &&
																Boolean(
																	errors[
																		ele
																			.name
																	]
																) &&
																"var(--error)",
														},
												  }
										}
									/>
								</div>
							);
						})}

						<div className="termsConditions">
							<Checkbox
								defaultChecked
								sx={{
									"& .MuiSvgIcon-root": {
										fontSize: 28,
									},
								}}
							/>
							{TERMS_CONDITIONS}
						</div>
						<ButtonComponent
							variant="contained"
							type="submit"
							fullWidth={true}
							className="button"
							buttonText={"GET STARTED NOW"}
							onClick={""}
						/>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default SignUpForm;
