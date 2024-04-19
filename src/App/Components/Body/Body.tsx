import { Grid } from "@mui/material";
import Header from "./Header.tsx";
import React from "react";
import fs from "fs";
import TextReact from "./tech/react.tsx";
import TextJava from "./tech/java.tsx";
import TextHtmlCss from "./tech/htmlcss.tsx";

type BodyProps = {
	value: string;
};
function Body(props: BodyProps) {
	const [child, setChild] = React.useState(<> </>);

	React.useEffect(() => {
		switch (props.value) {
			case "react":
				setChild(<TextReact />);
				break;
			case "java":
				setChild(<TextJava />);
				break;
			case "html_css":
				setChild(<TextHtmlCss />);
				break;
		}
	}, [props.value]);

	return (
		<Grid
			container
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
			}}
		>
			<Grid
				item
				sx={{
					height: "100%",
					background: "lightblue",
				}}
			>
				<Header value={props.value} />
			</Grid>
			<Grid item>{child}</Grid>
		</Grid>
	);
}

export default Body;
