import { Box, Paper, Typography } from "@mui/material";

function TextAlternance() {
	return (
		<Box>
			<Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
				<Typography variant="h5" gutterBottom>
					Alternance chez Quest Innov : Gestion des Récoltes Agricoles
				</Typography>
				<Typography variant="body1" paragraph>
					Dans le cadre de mon alternance, j'ai eu l'opportunité de contribuer au projet Alternance, une
					application SaaS novatrice visant à améliorer la gestion des récoltes agricoles pour optimiser les
					déplacements de camions entre l'usine et le champ.
				</Typography>
				<Typography variant="body1" paragraph>
					Aux côtés de mon maître d'alternance et de mes collègues, nous avons entrepris le développement de
					cette solution en utilisant un ensemble de technologies modernes. La partie front-end de
					l'application a été réalisée en React, HTML/CSS et TypeScript/JavaScript, tandis que la partie
					back-end a été mise en œuvre avec TypeScript/JavaScript et un serveur Node.js.
				</Typography>
				<Typography variant="body1" paragraph>
					L'une des principales fonctionnalités sur lesquelles j'ai travaillé était la création d'un écran
					permettant la visualisation d'un parc de bennes dans une zone de séchage d'une usine. Cette tâche a
					nécessité une approche ingénieuse pour représenter graphiquement les zones de séchage de manière
					précise. En utilisant des fichiers au format XLSX, nous avons conçu un algorithme capable de
					déterminer les zones, les emplacements et les éléments supplémentaires nécessaires. Ensuite, nous
					avons intégré ces données dans notre application, offrant ainsi une interface intuitive où les
					utilisateurs peuvent naviguer comme sur une carte du monde.
				</Typography>
				<Typography variant="body1" paragraph>
					En plus de cette fonctionnalité, j'ai également contribué à d'autres aspects du projet. Par exemple,
					j'ai travaillé sur la mise en place d'un système d'import de parcelles agricoles via des fichiers
					KML, ainsi que sur la refonte d'une interface permettant l'affichage de l'historique des contrats
					d'une parcelle et la mise en place d'indicateurs de performance clés (KPI).
				</Typography>
				<Typography variant="body1" paragraph>
					Les retours des clients ont été extrêmement positifs, avec une satisfaction notable quant à
					l'efficacité et à la convivialité de l'application. De plus, l'application continue d'évoluer avec
					l'ajout de nouvelles fonctionnalités pour répondre aux besoins changeants de nos utilisateurs.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextAlternance;
