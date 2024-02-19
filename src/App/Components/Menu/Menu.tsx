import MenuButton from "../MenuButton.tsx";
import { Chip, Divider, Grid, Typography } from "@mui/material";

type MenuProps = {
	onChange?: (_event, value) => void;
};
function Menu(props: MenuProps) {
	return (
		<Grid
			container
			sx={{
				display: "flex",
				flexDirection: "column",
				marginTop: "10px",
				alignItems: "center",
				width: "100%",
			}}
		>
			{/*Add typographie*/}
			<Divider variant={"middle"} sx={{ width: "85%", marginTop: 2 }}>
				<Chip label={<Typography>Compétence</Typography>} color={"info"} />
			</Divider>
			<Divider variant={"middle"} sx={{ width: "55%", marginTop: 2 }}>
				<Chip label={<Typography>Technique</Typography>} color={"info"} />
			</Divider>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"API"}
					variant={"outlined"}
					value={"api"}
					onClick={props.onChange}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"HTML/CSS"}
					variant={"outlined"}
					value={"html_css"}
					onClick={props.onChange}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"JAVA"}
					variant={"outlined"}
					value={"java"}
					onClick={props.onChange}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"React"}
					variant={"outlined"}
					value={"react"}
					onClick={props.onChange}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"TS/JS"}
					variant={"outlined"}
					value={"ts_js"}
					onClick={props.onChange}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Divider variant={"middle"} sx={{ width: "55%", marginTop: 2 }}>
				<Chip label={<Typography>Humain</Typography>} color={"info"} />
			</Divider>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"Agile"}
					variant={"outlined"}
					value={"agile"}
					onClick={props.onChange}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"Autonomie"}
					variant={"outlined"}
					value={"autonomie"}
					onClick={props.onChange}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"Communication"}
					variant={"outlined"}
					value={"communication"}
					onClick={props.onChange}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"Desing"}
					variant={"outlined"}
					value={"desing"}
					onClick={props.onChange}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Divider variant={"middle"} sx={{ width: "85%", marginTop: 2 }}>
				<Chip label={<Typography>Projet</Typography>} color={"info"} />
			</Divider>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"Alternance"}
					variant={"outlined"}
					value={"alternance"}
					onClick={props.onChange}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"CineTech"}
					variant={"outlined"}
					value={"cinetech"}
					onClick={props.onChange}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"KineCrew"}
					variant={"outlined"}
					value={"kinacrew"}
					onClick={props.onChange}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"PokeTech"}
					variant={"outlined"}
					value={"poketech"}
					onClick={props.onChange}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"Stage"}
					variant={"outlined"}
					value={"stage"}
					onClick={props.onChange}
					style={{ width: "100%" }}
				/>
			</Grid>
		</Grid>
	);
}

export default Menu;
