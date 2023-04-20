import { Field, Form } from "formik";
import React from "react";

function TextFieldComponent({
	label,
	name,
	as,
	fullWidth,
	variant,
	error,
	helperText,
	InputProps,
	InputLabelProps,
	...props
}: any) {
	return (
		<div>
			<Form>
				<Field
					label={label}
					name={name}
					as={as}
					fullWidth={fullWidth}
					variant={variant}
					error={error}
					helperText={helperText}
					InputProps={InputProps}
					InputLabelProps={InputLabelProps}
				/>
			</Form>
		</div>
	);
}

export default TextFieldComponent;
