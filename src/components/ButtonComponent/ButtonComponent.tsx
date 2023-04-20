import React from "react";
import { Button } from "@mui/material";
interface ButtonProps {
	buttonText: string;
	onClick: any;
	variant?: "text" | "outlined" | "contained";
	className?: string;
	fullWidth?: boolean;
	style?: any;
	type?: "button" | "submit" | "reset";
}
const ButtonComponent: React.FC<ButtonProps> = ({
	variant,
	onClick,
	buttonText,
	fullWidth,
	className,
	type,
	style,
}) => {
	return (
		<Button
			variant={variant}
			onClick={onClick}
			type={type}
			fullWidth={fullWidth}
			className={className}
			style={style}
		>
			{buttonText}
		</Button>
	);
};

export default ButtonComponent;
