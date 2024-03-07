import { Grid } from "@mui/material";

type HeaderProps = {
	value: string;
};
function Header(props: HeaderProps) {
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
				<div>{props.value}</div>
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
				Outil
			</Grid>
		</Grid>
	);
}

export default Header;
