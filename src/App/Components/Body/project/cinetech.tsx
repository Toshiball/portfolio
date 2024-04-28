import { Box, Paper, Typography } from "@mui/material";

function TextCinetech() {
	return (
		<Box>
			<Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
				<Typography variant="h5" gutterBottom>
					Cinetech : Covoiturage pour les Cinéphiles
				</Typography>
				<Typography variant="body1" paragraph>
					Cinetech, une application SAAS révolutionnaire, a vu le jour dans le cadre de notre projet de groupe
					à l'école. Notre objectif était clair : permettre aux passionnés de cinéma qui rencontrent des
					difficultés de déplacement d'accéder facilement aux salles de cinéma grâce au covoiturage.
				</Typography>
				<Typography variant="body1" paragraph>
					En collaboration avec mes camarades de classe, nous avons développé Cinetech en utilisant des
					technologies de pointe telles que Angular, Java EE et une API personnalisée. Cette combinaison nous
					a permis de créer une plateforme fluide et robuste pour nos utilisateurs.
				</Typography>
				<Typography variant="body1" paragraph>
					L'un des défis majeurs auxquels nous avons été confrontés était la mise en place de l'annulation
					d'un covoiturage. C'est ici que mon rôle s'est avéré crucial. J'ai pris en charge le développement
					de cette fonctionnalité, en ajoutant la possibilité d'annuler un covoiturage dans notre API, puis en
					l'intégrant de manière transparente dans notre application. Cette étape a nécessité une coordination
					étroite avec l'équipe pour garantir une expérience utilisateur sans faille.
				</Typography>
				<Typography variant="body1" paragraph>
					Outre cette contribution, j'ai également travaillé sur plusieurs autres aspects de l'application.
					J'ai notamment œuvré sur le profil utilisateur, la création de films, l'ajout de séances et la
					réservation de covoiturages. Mon engagement dans ces domaines a permis de garantir la richesse
					fonctionnelle de Cinetech.
				</Typography>
				<Typography variant="body1" paragraph>
					Lorsque nous avons présenté notre produit au product owner, nous avons été ravis de constater sa
					satisfaction. L'application était livrée dans les délais impartis et répondait pleinement à ses
					attentes. Son approbation a été un témoignage de notre succès et de notre capacité à relever les
					défis techniques et fonctionnels.
				</Typography>
				<Typography variant="body1" paragraph>
					En résumé, Cinetech représente bien plus qu'un simple projet académique. C'est le fruit d'une
					collaboration passionnée et d'un dévouement inlassable envers l'innovation. Nous sommes fiers de
					l'impact positif qu'il pourrait avoir sur la vie des cinéphiles à travers le monde.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextCinetech;
