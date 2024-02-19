import { Button } from "@mui/material";
import React from "react";

type ButtonProps = {
	label: string;
	value: string;
	variant: "text" | "outlined" | "contained";
	onClick?: () => void;
	style?: React.CSSProperties;
};
function MenuButton(props: ButtonProps) {
	return (
		<Button variant={props.variant || "text"} onClick={props.onClick} sx={props.style}>
			{props.label}
		</Button>
	);
}

export default MenuButton;
