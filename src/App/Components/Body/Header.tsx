import { Button, createTheme, Grid, Typography } from "@mui/material";
import MenuButton from "../Menu/MenuButton.tsx";
import { useEffect, useState } from "react";
import Yantramanav from "../../../assets/font/Yantramanav-Medium.ttf";
import ContactMe from "./ContactMe.tsx";

type HeaderProps = {
	value: string;
};
function Header(props: HeaderProps) {
	const [title, setTitle] = useState<string>("");
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		switch (props.value) {
			case "aboutMe":
				setTitle("SARMENTO Christopher");
				break;
			case "react":
				setTitle("React");
				break;
			case "java":
				setTitle("Java");
				break;
			case "html_css":
				setTitle("HTML/CSS");
				break;
			case "api":
				setTitle("API");
				break;
			case "ts_js":
				setTitle("TypeScript/JavaScript");
				break;
			case "sql":
				setTitle("SQL");
				break;
			case "autonomie":
				setTitle("Autonomie");
				break;
			case "communication":
				setTitle("Communication");
				break;
			case "agile":
				setTitle("Agile");
				break;
			case "design":
				setTitle("Design");
				break;
			case "alternance":
				setTitle("Alternance");
				break;
			case "cinetech":
				setTitle("Cinetech");
				break;
			case "kinacrew":
				setTitle("Kinacrew");
				break;
			case "poketech":
				setTitle("Poketech");
				break;
			case "stage":
				setTitle("Stage");
				break;
			default:
				setTitle("A propos de moi");
				break;
		}
	}, [props.value]);

	return (
		<Grid
			container
			sx={{
				height: "75px",
			}}
		>
			<Grid
				item
				xs={10}
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					height: "100%",
				}}
			>
				<Typography variant={"h3"} fontFamily={"Yantramanav"}>
					{title}
				</Typography>
			</Grid>
			<Grid
				item
				xs={2}
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					height: "100%",
				}}
			>
				<Button variant={"contained"} onClick={handleOpen}>
					Me contacter
				</Button>
				<ContactMe open={open} onClose={handleClose} />
			</Grid>
		</Grid>
	);
}

export default Header;
