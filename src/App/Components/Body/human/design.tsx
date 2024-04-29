import { Box, Paper, Typography } from "@mui/material";

function TextDesign() {
	return (
		<Box>
			<Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
				<Typography variant="h5" gutterBottom>
					Design
				</Typography>
				<Typography variant="body1" paragraph>
					Le design est la capacité d'un individu à concevoir et réaliser un concept visuellement attrayant et
					fonctionnel. On peut le définir comme une manière d'harmoniser différentes idées et/ou concepts pour
					produire de manière efficace un impact visuel ou une expérience utilisateur donnée.
				</Typography>
				<Typography variant="body1" paragraph>
					On l'associe généralement à l'art sous toutes ses formes, que ce soit le design graphique, le design
					sonore, le design cinématographique, etc. Mais le design peut également permettre de trouver des
					solutions innovantes à un problème donné, et donc être utile dans le cadre professionnel, notamment
					dans le milieu de l'entreprise.
				</Typography>
				<Typography variant="body1" paragraph>
					Le design est quelque chose que j'ai développé lors de mes projets scolaires et que j'ai mis à
					profit dans mes projets d'études à l'ESIEA, notamment lors de mes projets de première et troisième
					semestres.
				</Typography>
				<Typography variant="body1" paragraph>
					Dans le cadre du projet du premier semestre, axé sur la communication, j'ai réalisé le flyer de
					promotion des portes ouvertes du 48e régiment de transmissions, ce qui m'a pris plusieurs semaines
					en raison des retours et des ajustements à effectuer. Pour le projet du premier semestre également,
					centré sur la création d’un site web vitrine pour les bibliothèques sonores de Dax, j'ai réalisé le
					logo de l’équipe et le bandeau sur la page d’accueil du site.
				</Typography>
				<Typography variant="body1" paragraph>
					Le projet du troisième semestre m'a permis de continuer à développer mes compétences en design
					graphique en créant une affiche pour notre projet informatique « Hacktu ».
				</Typography>
				<Typography variant="body1" paragraph>
					J’ai également réalisé la totalité de l’interface graphique de l’application lors de mon stage avec
					les retours de mon maître de stage en utilisant React et la bibliothèque Material UI. De plus, le
					portfolio a été entièrement conçu avec un design fait main.
				</Typography>
				<Typography variant="body1" paragraph>
					Bien que j'aie réussi à produire des créations visuellement attrayantes et fonctionnelles dans mes
					différents projets de design, je reconnais que j'ai parfois eu du mal à gérer efficacement les
					retours et les ajustements nécessaires. Cela a entraîné des retards et des compromis dans la qualité
					finale de mes travaux. Pour m'améliorer, je dois travailler sur ma capacité à intégrer les critiques
					de manière plus fluide.
				</Typography>
				<Typography variant="body1" paragraph>
					Tout le monde devrait cultiver sa créativité, en particulier dans des métiers tels que le
					développement informatique. Dans ce domaine, il est souvent nécessaire de faire preuve de créativité
					pour trouver des solutions techniques, que ce soit au début d'un projet lors du choix de
					l'architecture ou lors de la correction de bugs, où il n'y a jamais qu'une seule solution.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextDesign;
