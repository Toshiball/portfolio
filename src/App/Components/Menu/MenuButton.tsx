import { Button } from "@mui/material";
import React from "react";

type ButtonProps = {
	label: string;
	value: string;
	variant: "text" | "outlined" | "contained";
	onClick?: (_event: any, value: any) => void;
	style?: React.CSSProperties;
	isSelected?: string;
};
function MenuButton(props: ButtonProps) {
	const handleClick = (value: string) => {
		return (event: React.MouseEvent) => {
			props.onClick && props.onClick(event, value);
		};
	};

	return (
		<Button variant={props.variant || "text"} onClick={handleClick(props.value)} sx={props.style}>
			{props.label}
		</Button>
	);
}

export default MenuButton;
