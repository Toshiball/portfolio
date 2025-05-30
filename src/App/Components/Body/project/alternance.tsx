import { Box, Paper, Typography } from "@mui/material";

function TextAlternance() {
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
				<Typography variant="h4" gutterBottom>
					Alternance chez Quest Innov : Gestion des Récoltes Agricoles
				</Typography>
				<Typography variant="body1" paragraph>
					Dans le cadre de mon alternance, j'ai eu l'opportunité de contribuer au projet GeoCrops, une
					application SaaS novatrice visant à améliorer la gestion des récoltes agricoles pour optimiser les
					déplacements de camions entre l'usine et le champ.
				</Typography>
				<Typography variant="body1" paragraph>
					Aux côtés de mon maître d'alternance et de mes collègues, nous avons entrepris le développement de
					cette solution en utilisant un ensemble de technologies modernes. La partie front-end de
					l'application a été réalisée en React, HTML/CSS et TypeScript/JavaScript, tandis que la partie
					back-end a été mise en œuvre avec TypeScript/JavaScript et un serveur Node.js.
				</Typography>
				<Typography variant="h5" gutterBottom>
					Présentation
				</Typography>
				<Typography variant="body1" paragraph>
					Ce projet est une application SaaS innovante visant à optimiser la gestion des récoltes agricoles et
					les déplacements des camions entre l'usine et le champ.
				</Typography>
				<Typography variant="h5" gutterBottom>
					Lancement du projet
				</Typography>
				<Typography variant="body1" paragraph>
					Quest Innov avait besoin d'une solution pour visualiser et gérer efficacement les récoltes
					agricoles. Le projet visait à digitaliser le processus pour améliorer la logistique des camions et
					optimiser les déplacements entre les champs et l'usine. Un des défis était de gérer des données
					volumineuses et de les présenter de manière intuitive aux utilisateurs.
				</Typography>
				<Typography variant="h5" gutterBottom>
					Les étapes
				</Typography>
				<Typography variant="body1" paragraph>
					Le projet s'est déroulé en plusieurs étapes :
				</Typography>
				<Typography variant="body1" paragraph>
					1. <strong>Collecte des besoins utilisateurs</strong>: La première phase a consisté à établir un
					cahier des charges détaillé, élaboré en collaboration avec les agriculteurs et les gestionnaires
					impliqués dans le projet. Cette étape a permis d’identifier les besoins fonctionnels et les
					contraintes spécifiques du terrain. Le cahier des charges a ensuite été relu et validé avec les
					parties prenantes afin de garantir une parfaite compréhension des attentes.
				</Typography>
				<Typography variant="body1" paragraph>
					2. <strong>Développement du front-end</strong> : J’ai participé au développement de l’interface
					utilisateur en utilisant les technologies modernes de React 19, notamment les hooks, le context API,
					ainsi que TypeScript, HTML et CSS. Une composante majeure de cette interface est la visualisation
					cartographique des parcs de bennes dans une zone de séchage. Grâce à la bibliothèque React-Leaflet,
					nous avons conçu une carte interactive avec un fond blanc, sur laquelle sont dessinées dynamiquement
					des zones sous forme de polygones à partir de coordonnées GPS. L’un des défis techniques les plus
					complexes a été la conversion de fichiers XLSX en zones géographiques exploitables. J’ai développé
					un algorithme capable d’interpréter les couleurs des cellules Excel afin de déduire leur
					emplacement, leur taille et leur regroupement, permettant ainsi de générer des polygones
					géolocalisés cohérents sur la carte.
				</Typography>
				<Typography variant="body1" paragraph>
					3. <strong>Développement du back-end</strong> : La partie serveur de l’application a été développée
					en Node.js avec TypeScript. J’ai utilisé une base de données PostgreSQL pour le stockage des
					données. Plusieurs fonctionnalités clés ont été intégrées : Import des parcelles agricoles via des
					fichiers KML, traités grâce à un algorithme de conversion vers des objets JavaScript, ensuite
					exploités par différentes fonctions métier. Historique des contrats liés aux agriculteurs, enrichi
					par des indicateurs de performance (KPI). Gestion de l’authentification des utilisateurs via un
					système de hachage des mots de passe, chaque utilisateur étant rattaché à un groupe agro-alimentaire
					distinct par un identifiant unique.
				</Typography>
				<Typography variant="body1" paragraph>
					4. <strong>Intégration et mise en production</strong> : La mise en production a été assurée
					manuellement sur un serveur dédié, avec l’installation des dépendances nécessaires et la
					configuration de la base de données. Bien qu’aucun pipeline CI/CD n’ait été mis en place, un suivi
					post-déploiement a été réalisé à travers les retours utilisateurs, permettant de corriger rapidement
					les anomalies et d’ajuster l’outil en fonction des besoins du terrain..
				</Typography>
				<img
					src={"https://storage.akuma.network/api/public/dl/B-jOI7tp/Portfolio/image/projet/alter_1.png"}
					alt="process_dryer"
					style={{ width: "55%", borderRadius: "10px", marginBottom: "20px", marginLeft: "15px" }}
				/>
				<Typography variant="body1" paragraph>
					Voici l'interface dynamique pour la mise en séchage d'équipement
				</Typography>
				<Typography variant="h5" gutterBottom>
					Les résultats
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Pour moi</strong> : Ce projet m'a permis de développer des compétences en développement full
					stack, y compris la gestion de l'hébergement et des déploiements. J'ai également amélioré mes
					compétences en communication et en gestion de projet en collaborant avec diverses parties prenantes.
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Pour l'entreprise</strong> : L'application a considérablement amélioré la gestion des
					récoltes et la logistique des déplacements, réduisant les coûts et augmentant l'efficacité. Les
					utilisateurs ont rapporté une satisfaction notable quant à l'efficacité et à la convivialité de
					l'application.
				</Typography>
				<Typography variant="h5" gutterBottom>
					Les acteurs
				</Typography>
				<Typography variant="body1" paragraph>
					Tout au long du projet, j'ai collaboré avec mon maître d'alternance, les agriculteurs, et les
					gestionnaires pour assurer que l'application réponde aux besoins des utilisateurs finaux. La
					communication régulière avec toutes les parties prenantes a été essentielle pour le succès du
					projet.
				</Typography>
				<Typography variant="h5" gutterBottom>
					Les lendemains du projet
				</Typography>
				<Typography variant="body1" paragraph>
					Le projet a atteint ses objectifs initiaux, mais de nombreuses fonctionnalités supplémentaires
					pourraient être développées, telles qu'un système de statistiques pour analyser les performances par
					région et un module de gestion d'itinéraire optimisé pour les déplacements des camions.
				</Typography>
				<Typography variant="h5" gutterBottom>
					Mon point de vue
				</Typography>
				<Typography variant="body1" paragraph>
					Ce projet a été une expérience enrichissante et formatrice. Il m'a permis de prendre en charge un
					projet complet, de la conception à la mise en production, tout en développant des compétences en
					communication et en gestion de projet. Cette expérience a renforcé mon intérêt pour le développement
					full stack et la gestion de projets techniques complexes.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextAlternance;
