import { Box, Grid, Paper, Typography } from "@mui/material";
import CustomTimeLine from "./CustomTimeLine.tsx";

function AboutMe() {
	return (
		<Box>
			<Paper
				elevation={3}
				style={{
					padding: "20px",
					marginBottom: "20px",
					display: "flex",
					flexDirection: "column",
					flexWrap: "nowrap",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography variant="h5" gutterBottom>
					Qui suis-je ?
				</Typography>
				<Typography variant="body1" paragraph>
					Ma démarche professionnelle est guidée par trois valeurs essentielles : l'apprentissage continu, la
					curiosité et la rigueur. Je crois fermement que le développement personnel et professionnel passe
					par une volonté constante d'apprendre et de se perfectionner. Cette philosophie m'incite à
					m'investir pleinement dans les projets sur lesquels je travaille, tout en cherchant à atteindre mes
					objectifs de carrière.
				</Typography>
				<Typography variant="h5" gutterBottom>
					Mon projet professionnel
				</Typography>
				<Typography variant="body1" paragraph>
					Actuellement en alternance chez Quest Innov et étudiant en cinquième année à l'école ESIEA Sud, je
					me spécialise dans l'Ingénierie du Logiciel. Mon objectif est d'obtenir le diplôme d'Expert en
					Ingénierie du Logiciel (RNCP de niveau 7), après avoir obtenu un baccalauréat professionnel en
					Systèmes Électroniques et Numériques (SEN). Chez Quest Innov, en tant que développeur Full-Stack,
					j'ai accumulé deux années d'expérience. Cette opportunité m'a permis de travailler sur des projets
					variés et stimulants, renforçant ainsi mes compétences techniques et mon adaptabilité aux besoins du
					marché.
				</Typography>
				<Typography variant="h5" gutterBottom>
					Mes principales qualités humaines
				</Typography>
				<Typography variant="body1" paragraph>
					Je suis quelqu'un de passionné par l'apprentissage et la découverte. Ma curiosité intellectuelle me
					pousse à explorer constamment de nouveaux domaines et à améliorer mes compétences. La rigueur et la
					persévérance sont également des qualités qui me définissent, me permettant de mener à bien les
					projets auxquels je participe.
				</Typography>
				<Typography variant="h5" gutterBottom>
					Mes principaux centres d'intérêt
				</Typography>
				<Typography variant="body1" paragraph>
					La musique tient une place importante dans ma vie. J'apprécie une grande variété de genres musicaux,
					allant de la Dance/Electro au rock, en passant par la hardstyle et les classiques des années 90. La
					musique est pour moi une source d'inspiration et de relaxation, que ce soit pour se détendre après
					une journée de travail ou pour trouver l'énergie nécessaire à la réalisation de nouveaux projets.
				</Typography>
				<Typography variant="body1" paragraph>
					Les jeux vidéo constituent une autre de mes grandes passions. J'aime explorer des aventures solo
					immersives, où je peux me plonger dans l'histoire captivante d'un personnage. De plus, les jeux de
					construction me permettent d'exprimer ma créativité et d'explorer des mondes nouveaux. Je suis
					particulièrement fasciné par les univers post-apocalyptiques, comme ceux que l'on retrouve dans des
					jeux tels que Fallout, Metro ou S.T.A.L.K.E.R. Ces jeux m'offrent un moyen de me détendre et de
					m'évader du quotidien.
				</Typography>
			</Paper>
			<Grid container sx={{ display: "flex", flexDirection: "column" }}>
				<Grid item sx={{ display: "flex", justifyContent: "center" }}>
					<Typography variant="h4" fontFamily={"Yantramanav"}>
						Mon parcours
					</Typography>
				</Grid>
				<Grid item>
					<CustomTimeLine />
				</Grid>
			</Grid>
		</Box>
	);
}

export default AboutMe;
