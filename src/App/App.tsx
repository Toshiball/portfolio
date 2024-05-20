import Menu from "./Components/Menu/Menu";
import { Grid } from "@mui/material";
import Body from "./Components/Body/Body.tsx";
import React from "react";

function App() {
	const [value, setValue] = React.useState("aboutMe");

	const handelOnClick = (_event: any, value: any) => {
		setValue(value);
	};

	return (
		<Grid
			container
			spacing={1}
			sx={{
				display: "flex",
				flexDirection: "row",
				flexWrap: "nowrap",
				justifyContent: "flex-start",
				width: "100%",
			}}
		>
			<Grid item xs={2}>
				{/*Menu principal // A propops de moi*/}
				<Menu onChange={handelOnClick} value={value} />
			</Grid>
			<Grid item xs={10} sx={{ padding: 0 }}>
				<Body value={value} handelOnClick={handelOnClick} />
			</Grid>
		</Grid>
	);
}

export default App;
