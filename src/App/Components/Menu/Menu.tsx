import MenuButton from "./MenuButton.tsx";
import { Chip, Divider, Grid, Typography } from "@mui/material";
import React from "react";

type MenuProps = {
	onChange?: (_event: any, value: any) => void;
};
function Menu(props: MenuProps) {
	const [value, setValue] = React.useState("aboutMe");

	const handelOnClick = (_event?: any, value?: any) => {
		setValue(value);
		props.onChange && props.onChange(_event, value);
	};

	return (
		<Grid
			container
			sx={{
				display: "flex",
				flexDirection: "column",
				flexWrap: "nowrap",
				alignItems: "center",
				width: "100%",
				gap: 3,
				height: "100vh",
				overflow: "auto",
			}}
		>
			{/*Add typographie*/}
			<Grid item sx={{ width: "75%" }}>
				<MenuButton
					label={"Accueil"}
					variant={value === "aboutMe" ? "contained" : "outlined"}
					value={"aboutMe"}
					onClick={handelOnClick}
					style={{ width: "100%", marginTop: "15px" }}
				/>
			</Grid>
			<Divider variant={"middle"} sx={{ width: "85%" }}>
				<Chip label={<Typography>Compétence</Typography>} color={"info"} />
			</Divider>
			<Divider variant={"middle"} sx={{ width: "55%" }}>
				<Chip label={<Typography>Technique</Typography>} color={"info"} />
			</Divider>
			<Grid item sx={{ width: "75%" }}>
				<MenuButton
					label={"API"}
					variant={value === "api" ? "contained" : "outlined"}
					value={"api"}
					onClick={handelOnClick}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%" }}>
				<MenuButton
					label={"HTML/CSS"}
					variant={value === "html_css" ? "contained" : "outlined"}
					value={"html_css"}
					onClick={handelOnClick}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%" }}>
				<MenuButton
					label={"JAVA"}
					variant={value === "java" ? "contained" : "outlined"}
					value={"java"}
					onClick={handelOnClick}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%" }}>
				<MenuButton
					label={"React"}
					variant={value === "react" ? "contained" : "outlined"}
					value={"react"}
					onClick={handelOnClick}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%" }}>
				<MenuButton
					label={"TS/JS"}
					variant={value === "ts_js" ? "contained" : "outlined"}
					value={"ts_js"}
					onClick={handelOnClick}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Divider variant={"middle"} sx={{ width: "55%" }}>
				<Chip label={<Typography>Humain</Typography>} color={"info"} />
			</Divider>
			<Grid item sx={{ width: "75%" }}>
				<MenuButton
					label={"Agile"}
					variant={value === "agile" ? "contained" : "outlined"}
					value={"agile"}
					onClick={handelOnClick}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%" }}>
				<MenuButton
					label={"Autonomie"}
					variant={value === "autonomie" ? "contained" : "outlined"}
					value={"autonomie"}
					onClick={handelOnClick}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%" }}>
				<MenuButton
					label={"Communication"}
					variant={value === "communication" ? "contained" : "outlined"}
					value={"communication"}
					onClick={handelOnClick}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%" }}>
				<MenuButton
					label={"Design"}
					variant={value === "design" ? "contained" : "outlined"}
					value={"design"}
					onClick={handelOnClick}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Divider variant={"middle"} sx={{ width: "85%" }}>
				<Chip label={<Typography>Projet</Typography>} color={"info"} />
			</Divider>
			<Grid item sx={{ width: "75%" }}>
				<MenuButton
					label={"Alternance"}
					variant={value === "alternance" ? "contained" : "outlined"}
					value={"alternance"}
					onClick={handelOnClick}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%" }}>
				<MenuButton
					label={"CineTech"}
					variant={value === "cinetech" ? "contained" : "outlined"}
					value={"cinetech"}
					onClick={handelOnClick}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%" }}>
				<MenuButton
					label={"KineCrew"}
					variant={value === "kinacrew" ? "contained" : "outlined"}
					value={"kinacrew"}
					onClick={handelOnClick}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%" }}>
				<MenuButton
					label={"PokeTech"}
					variant={value === "poketech" ? "contained" : "outlined"}
					value={"poketech"}
					onClick={handelOnClick}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%", marginBottom: "10px" }}>
				<MenuButton
					label={"Stage"}
					variant={value === "stage" ? "contained" : "outlined"}
					value={"stage"}
					onClick={handelOnClick}
					style={{ width: "100%" }}
				/>
			</Grid>
		</Grid>
	);
}

export default Menu;
