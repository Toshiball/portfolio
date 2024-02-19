import MenuButton from "../MenuButton.tsx";
import { Chip, Divider, Grid, Typography } from "@mui/material";

type MenuProps = {
	onChange?: (_event, value) => void;
};
function Menu(props: MenuProps) {
	const handleClick = (value: string) => {
		return (event: React.MouseEvent) => {
			props.onChange && props.onChange(event, value);
		};
	};

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
			<Divider variant={"middle"} sx={{ width: "85%" }}>
				<Chip label={<Typography>Projet</Typography>} size="small" />
			</Divider>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"React"}
					variant={"outlined"}
					value={"react"}
					onClick={handleClick("react")}
					style={{ width: "100%" }}
				/>
			</Grid>
			<Grid item sx={{ width: "75%", paddingTop: 2 }}>
				<MenuButton
					label={"PHP"}
					variant={"outlined"}
					value={"php"}
					onClick={handleClick("php")}
					style={{ width: "100%" }}
				/>
			</Grid>
		</Grid>
	);
}

export default Menu;
