import Menu from "./Components/Menu/Menu";
import { Grid } from "@mui/material";
import Body from "./Components/Body.tsx";
import React from "react";

function App() {
	const [value, setValue] = React.useState("aboutMe");

	const handelOnClick = (_event: any, value: any) => {
		console.log(_event);
		setValue(value);
	};

	return (
		<Grid container spacing={1}>
			<Grid item xs={2}>
				{/*Menu principal // A propops de moi*/}
				<Menu onChange={handelOnClick} />
			</Grid>
			<Grid item sx={{ padding: 0 }}>
				<Body value={value} />
			</Grid>
		</Grid>
	);
}

export default App;
