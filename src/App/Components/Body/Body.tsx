import { Grid } from "@mui/material";
import Header from "./Header.tsx";
import React from "react";
import fs from "fs";
import TextReact from "./tech/react.tsx";
import TextJava from "./tech/java.tsx";
import TextHtmlCss from "./tech/htmlcss.tsx";
import TextAPI from "./tech/api.tsx";
import TextJSTS from "./tech/jsts.tsx";
import AboutMe from "./AboutMe.tsx";
import TextAutonomie from "./human/autonomie.tsx";
import TextCommunication from "./human/communication.tsx";
import TextAgile from "./human/agile.tsx";
import TextDesign from "./human/design.tsx";
import TextAlternance from "./project/alternance.tsx";
import TextCinetech from "./project/cinetech.tsx";
import TextKinacrew from "./project/kinacrew.tsx";
import TextPoketech from "./project/poketech.tsx";
import TextStage from "./project/stage.tsx";
import MenuButton from "../Menu/MenuButton.tsx";

type BodyProps = {
	value: string;
	handelOnClick: (_event: any, value: any) => void;
};
function Body(props: BodyProps) {
	const [child, setChild] = React.useState(<> </>);
	const [linkCompetences, setLinkCompetences] = React.useState<Array<string>>([]);
	const [linkProjets, setLinkProjets] = React.useState<Array<string>>([]);

	React.useEffect(() => {
		switch (props.value) {
			case "aboutMe":
				setChild(<AboutMe />);
				setLinkProjets([]);
				setLinkCompetences([]);
				break;
			case "react":
				setChild(<TextReact />);
				setLinkProjets(["alternance", "stage"]);
				setLinkCompetences([]);
				break;
			case "java":
				setChild(<TextJava />);
				setLinkProjets(["cinetech", "kinacrew"]);
				setLinkCompetences([]);
				break;
			case "html_css":
				setChild(<TextHtmlCss />);
				setLinkProjets(["cinetech", "alternance", "stage"]);
				setLinkCompetences([]);
				break;
			case "api":
				setChild(<TextAPI />);
				setLinkProjets(["cinetech", "kinacrew", "stage"]);
				setLinkCompetences([]);
				break;
			case "ts_js":
				setChild(<TextJSTS />);
				setLinkProjets(["alternance", "stage"]);
				setLinkCompetences([]);
				break;
			case "sql":
				setLinkProjets(["cinetech", "alternance", "kinacrew", "stage"]);
				setLinkCompetences([]);
				break;
			case "autonomie":
				setChild(<TextAutonomie />);
				setLinkProjets(["poketech", "cinetech", "kinacrew", "alternance", "stage"]);
				setLinkCompetences([]);
				break;
			case "communication":
				setChild(<TextCommunication />);
				setLinkProjets(["poketech", "alternance"]);
				setLinkCompetences([]);
				break;
			case "agile":
				setChild(<TextAgile />);
				setLinkProjets(["poketech", "cinetech", "kinacrew", "alternance", "stage"]);
				setLinkCompetences([]);
				break;
			case "design":
				setChild(<TextDesign />);
				setLinkProjets(["poketech", "cinetech"]);
				setLinkCompetences([]);
				break;
			case "alternance":
				setChild(<TextAlternance />);
				setLinkProjets([]);
				setLinkCompetences(["react", "html_css", "ts_js", "sql", "autonomie", "agile", "communication"]);
				break;
			case "cinetech":
				setChild(<TextCinetech />);
				setLinkProjets([]);
				setLinkCompetences(["java", "html_css", "sql", "api", "design", "agile", "autonomie"]);
				break;
			case "kinacrew":
				setChild(<TextKinacrew />);
				setLinkProjets([]);
				setLinkCompetences(["java", "sql", "api", "agile", "autonomie"]);
				break;
			case "poketech":
				setChild(<TextPoketech />);
				setLinkProjets([]);
				setLinkCompetences(["design", "agile", "autonomie", "communication"]);
				break;
			case "stage":
				setChild(<TextStage />);
				setLinkProjets([]);
				setLinkCompetences(["react", "html_css", "ts_js", "sql", "api", "autonomie", "agile"]);
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
			<Grid item sx={{ display: "flex", justifyContent: "center" }}>
				{linkCompetences.map((comt) => {
					let goodstring = comt.replace("_", "/");
					return (
						<MenuButton
							label={goodstring}
							variant={"outlined"}
							value={comt}
							onClick={props.handelOnClick}
							style={{ marginLeft: 2 }}
						/>
					);
				})}
				{linkProjets.map((proj) => {
					return (
						<MenuButton
							label={proj}
							variant={"outlined"}
							value={proj}
							onClick={props.handelOnClick}
							style={{ marginLeft: 2 }}
						/>
					);
				})}
			</Grid>
		</Grid>
	);
}

export default Body;
