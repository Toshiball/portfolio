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
					Je suis un développeur passionné, animé par trois valeurs fondamentales : l'apprentissage continu,
					la curiosité intellectuelle et la rigueur. Ma démarche professionnelle repose sur la conviction que
					l’amélioration passe par une remise en question permanente et un effort constant pour progresser,
					tant sur le plan technique que personnel. Que ce soit dans un cadre académique ou en entreprise, je
					m’investis pleinement dans les projets qui me sont confiés, avec le souci du travail bien fait, de
					la collaboration efficace et de l’impact concret.
				</Typography>

				<Typography variant="h5" gutterBottom>
					Mon projet professionnel
				</Typography>
				<Typography variant="body1" paragraph>
					Je suis actuellement en alternance chez Quest Innov en tant que développeur Full-Stack, tout en
					poursuivant ma cinquième année à l’ESIEA Sud, spécialité Ingénierie du Logiciel. Mon objectif est
					d’obtenir le diplôme d’Expert en Ingénierie du Logiciel (RNCP niveau 7), après un parcours atypique
					démarré par un baccalauréat professionnel en Systèmes Électroniques et Numériques (SEN). Chez Quest
					Innov, j’ai eu l’opportunité de travailler pendant deux années sur des projets techniques concrets,
					notamment dans le secteur agricole. J’ai contribué au développement d’une application cartographique
					interactive permettant de visualiser des zones de séchage de bennes à partir de fichiers XLSX et
					KML. Ce projet m’a permis de renforcer mes compétences en visualisation de données spatiales,
					architecture logicielle et optimisation d’algorithmes.
				</Typography>

				<Typography variant="h5" gutterBottom>
					Compétences techniques
				</Typography>
				<Typography variant="body1" component="div" paragraph>
					<ul style={{ paddingLeft: "20px" }}>
						<li>
							<strong>Front-end :</strong> React 19, React-Leaflet, TypeScript, HTML, CSS
						</li>
						<li>
							<strong>Back-end :</strong> Node.js, PostgreSQL, gestion de fichiers KML/XLSX, manipulation
							d’objets géospatiaux
						</li>
						<li>
							<strong>Autres outils :</strong> Git, méthodes Agile, gestion de projet avec Notion ou
							Trello
						</li>
					</ul>
				</Typography>

				<Typography variant="h5" gutterBottom>
					Ma méthode de travail
				</Typography>
				<Typography variant="body1" paragraph>
					Je privilégie une approche itérative et orientée utilisateur, en intégrant régulièrement les retours
					terrain. J’accorde une grande importance à la qualité du code, à sa lisibilité et à sa
					maintenabilité. Même sans pipeline CI/CD actuellement, je veille à livrer des solutions robustes et
					documentées.
				</Typography>

				<Typography variant="h5" gutterBottom>
					Mes qualités humaines
				</Typography>
				<Typography variant="body1" paragraph>
					Curieux, rigoureux et persévérant, j’aime apprendre, comprendre et partager. Je suis à l’aise dans
					les environnements collaboratifs, et je cherche toujours à progresser en tirant parti des retours et
					des expériences collectives.
				</Typography>

				<Typography variant="h5" gutterBottom>
					Mes centres d’intérêt
				</Typography>
				<Typography variant="body1" paragraph>
					La musique occupe une place importante dans ma vie. J’écoute une grande variété de genres :
					Dance/Electro, Rock, Hardstyle, et les classiques des années 90. C’est une source d’énergie et de
					concentration.
				</Typography>
				<Typography variant="body1" paragraph>
					Je suis aussi passionné de jeux vidéo, notamment d’aventures solo immersives et de jeux de
					construction. J’ai un attrait particulier pour les univers post-apocalyptiques comme Fallout, Metro
					ou S.T.A.L.K.E.R., qui stimulent ma créativité et me permettent de m’évader.
				</Typography>

				<Typography variant="h5" gutterBottom>
					Objectif futur
				</Typography>
				<Typography variant="body1" paragraph>
					Mon ambition est d’évoluer vers un poste de lead developer ou de référent technique, dans une
					entreprise innovante et humaine. Je m’intéresse tout particulièrement aux secteurs de l’agriculture
					connectée, de l’environnement et de la tech responsable.
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
