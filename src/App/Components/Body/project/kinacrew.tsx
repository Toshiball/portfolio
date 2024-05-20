import { Box, Paper, Typography } from "@mui/material";

function TextKinacrew() {
	return (
		<Box>
			<Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
				<Typography variant="h5" gutterBottom>
					Projet Kinacrew : Application Android pour les kinésithérapeutes
				</Typography>
				<Typography variant="body1" paragraph>
					Kinacrew est le fruit d'une collaboration au sein de mon groupe lors de notre cursus. Notre objectif
					: créer une application Android innovante répondant aux besoins spécifiques des professionnels de la
					kinésithérapie et de leurs patients. Avec une équipe dévouée, nous avons mis en œuvre nos
					compétences en développement Android, Java et Kotlin pour donner vie à ce projet ambitieux.
				</Typography>
				<Typography variant="body1" paragraph>
					L'une de mes contributions majeures a été de mettre en place la gestion des connexions différenciées
					entre les patients et les kinésithérapeutes. Cela a nécessité une compréhension approfondie de
					l'interaction entre l'application et notre API, permettant de basculer dynamiquement entre les
					interfaces en fonction du type de compte connecté.
				</Typography>
				<Typography variant="body1" paragraph>
					Outre cette fonctionnalité cruciale, j'ai également travaillé sur d'autres aspects clés de
					l'application. J'ai notamment développé la page des paramètres, offrant aux utilisateurs la
					possibilité de modifier des éléments essentiels tels que le mot de passe et l'e-mail associé à leur
					compte. De plus, j'ai contribué à la conception de la page dédiée aux kinésithérapeutes, leur
					permettant de distribuer efficacement des programmes d'exercices à leurs patients.
				</Typography>
				<Typography variant="body1" paragraph>
					Le succès de Kinacrew a été manifeste dès sa livraison dans les délais impartis. Notre client était
					pleinement satisfait du produit final, témoignant ainsi de notre capacité à répondre à leurs besoins
					et à fournir une solution fonctionnelle et intuitive. Ce projet a été une expérience enrichissante,
					renforçant ma confiance dans mes compétences et ma capacité à collaborer efficacement au sein d'une
					équipe pour atteindre des objectifs communs.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextKinacrew;
