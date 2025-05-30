import React from "react";
import { Box, Paper, Typography } from "@mui/material";

function TextReact() {
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
					Expérience en React
				</Typography>
				<Typography variant="body1" paragraph>
					React est une bibliothèque JavaScript open-source développée par Facebook, utilisée pour la création
					d'interfaces utilisateur interactives et dynamiques. Elle permet de créer des composants
					réutilisables qui rendent le développement d'applications web plus efficace et modulaire.
				</Typography>
				<Typography variant="body1" paragraph>
					Apprendre et utiliser React a vraiment fait la différence dans mon parcours. Pendant mon alternance,
					j’ai eu la chance de participer à la refonte de l’interface de gestion du suivi des récoltes pour
					une grosse entreprise agroalimentaire. C’était un projet super motivant, parce qu’on voulait
					vraiment rendre l’application plus moderne et plus agréable à utiliser.
				</Typography>
				<Typography variant="body1" paragraph>
					J’ai pu montrer ce que je savais faire avec React en créant des composants qu’on pouvait réutiliser
					un peu partout — comme des formulaires ou des boutons. Ça a simplifié le boulot de toute l’équipe et
					surtout, ça a rendu l’interface beaucoup plus fluide pour les utilisateurs.
				</Typography>
				<Typography variant="body1" paragraph>
					Le plus impressionnant, c’est qu’on a réussi à diviser par deux le temps de chargement : avant, il
					fallait attendre 3 secondes, maintenant, c’est moins d’une seconde. Ça change tout, surtout pour
					ceux qui utilisent l’application toute la journée ou avec un réseaux réduis !
				</Typography>
				<img
					src={"https://storage.akuma.network/api/public/dl/GIC_F7Kf/Portfolio/image/compt/react_1.png"}
					alt="clipping"
					style={{ width: "55%", borderRadius: "10px", marginBottom: "20px", marginLeft: "15px" }}
				/>
				<Typography variant="body1" paragraph>
					Je me considère aujourd’hui assez autonome avec React, mais je reste toujours curieux et à la
					recherche de nouvelles façons d’optimiser mes projets. Je suis régulièrement les nouveautés et les
					fonctionnalités qui sortent pour offrir une expérience utilisateur toujours plus fluide et agréable.
					C’est une compétence clé dans mon rôle actuel d’Expert en Ingénierie, car React est au cœur de la
					plupart de nos projets web.
				</Typography>
				<Typography variant="body1" paragraph>
					Grâce à cette technologie, j’ai pu gagner rapidement en autonomie, ce que mes collègues ont aussi
					remarqué. Avec un peu de recul, je dirais qu’il est vraiment important de se tenir à jour avec les
					nouvelles versions et les bonnes pratiques, car la communauté React est super active et ça aide
					énormément à progresser.
				</Typography>
				<Typography variant="body1" paragraph>
					Sur le long terme, j’aimerais devenir un vrai référent React dans mon entreprise. Pour ça, je compte
					suivre des formations avancées et découvrir plus en profondeur les bibliothèques et outils autour de
					React, histoire de renforcer encore mes compétences.
				</Typography>
				<Typography variant="body1" paragraph>
					Mes expériences en alternance et en stage m’ont donné de belles occasions de mettre React en
					pratique dans des projets concrets, et je suis vraiment motivé à continuer à développer cette
					expertise dans mes futures missions.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextReact;
