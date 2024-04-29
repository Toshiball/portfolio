import { Box, Paper, Typography } from "@mui/material";

function TextStage() {
	return (
		<Box>
			<Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
				<Typography variant="h5" gutterBottom>
					Stage : Développement d'une Application SAAS pour la Visualisation 3D
				</Typography>
				<Typography variant="body1" paragraph>
					Durant mon stage, j'ai eu l'opportunité de travailler sur un projet ambitieux : la conception et le
					développement d'une application SAAS (Software as a Service) permettant la visualisation d'objets en
					3D, de photomaillages et de cadastres. Sous la direction de mon maître de stage, j'ai été chargé de
					mener à bien ce projet et d'en assurer la réalisation technique.
				</Typography>
				<Typography variant="body1" paragraph>
					Pour concrétiser cette vision, nous avons utilisé un ensemble de technologies modernes. La partie
					front-end de l'application a été développée en React, HTML/CSS et TypeScript/JavaScript, offrant
					ainsi une interface utilisateur dynamique et réactive. Quant à la partie back-end, nous avons opté
					pour une combinaison de PHP pour la gestion de l’API et de MySQL pour assurer le stockage et la
					gestion efficace des données.
				</Typography>
				<Typography variant="body1" paragraph>
					Au cours du développement, nous avons rencontré plusieurs défis techniques. Parmi ceux-ci, la
					nécessité de mettre en œuvre une fonctionnalité de "Clipping" sur des objets projetés en
					photomaillage était particulièrement complexe. Grâce à des recherches approfondies et à la
					contribution de la communauté des développeurs via des forums spécialisés, nous avons pu trouver une
					solution adaptée, que nous avons ensuite intégrée après quelques ajustements de code.
				</Typography>
				<Typography variant="body1" paragraph>
					Un autre défi majeur a été de mettre en place un système de gestion de session robuste pour
					permettre aux utilisateurs de sauvegarder leur travail. Pour résoudre cette problématique, nous
					avons exploité les capacités de stockage interne du navigateur et avons mis en place une sauvegarde
					instantanée dans la base de données, garantissant ainsi la sécurité et la fiabilité des données
					utilisateur.
				</Typography>
				<Typography variant="body1" paragraph>
					Dans le cadre de ce projet, j'ai eu l'occasion de travailler principalement en autonomie. Bien que
					j'aie bénéficié de l'aide occasionnelle de personnes présentes dans la pépinière d'entreprise où se
					déroulait mon stage, j'ai pris en charge la conception et le développement de l'ensemble de
					l'application.
				</Typography>
				<Typography variant="body1" paragraph>
					Lors de la présentation de l'application à mon maître de stage, celle-ci a été accueillie avec
					enthousiasme. Mon maître de stage s'est montré très satisfait du résultat obtenu, soulignant
					notamment la qualité de l'interface utilisateur et la fluidité de l'expérience utilisateur. Cette
					réception positive a renforcé ma confiance en mes compétences et a été une source de grande
					satisfaction personnelle.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextStage;
