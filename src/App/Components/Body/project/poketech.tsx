import { Box, Paper, Typography } from "@mui/material";

function TextPoketech() {
	return (
		<Box>
			<Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
				<Typography variant="h5" gutterBottom>
					Projet Poketech : Tournoi de Pokémon Caritatif
				</Typography>
				<Typography variant="body1" paragraph>
					Poketech était un projet de formation humaine (PFH) centré sur la création d'un événement caritatif,
					avec une gestion rigoureuse du budget. En collaboration avec mes camarades de classe et
					l'association ARSLA, qui soutient la recherche contre la maladie de Charcot, nous avons organisé un
					tournoi de Pokémon pour collecter des fonds.
				</Typography>
				<Typography variant="body1" paragraph>
					Mon rôle principal dans ce projet était la gestion du budget. J'étais responsable de maintenir notre
					feuille de budget à jour, en enregistrant toutes les données financières. Cela incluait les entrées
					d'argent, telles que les cotisations des membres, ainsi que les sorties d'argent, comme les dons à
					l'association. Cette tâche demandait une attention constante aux détails pour garantir une gestion
					financière précise et transparente.
				</Typography>
				<Typography variant="body1" paragraph>
					En plus de la gestion financière, j'ai activement participé à l'animation du tournoi. Pour faciliter
					la communication avec les participants, j'ai créé un serveur Discord, une plateforme de discussion,
					où j'ai posté les règles du tournoi, des informations importantes et répondu aux questions des
					participants. Cette plateforme a permis de maintenir une interaction fluide et de répondre
					rapidement aux besoins des participants, assurant ainsi le bon déroulement de l'événement.
				</Typography>
				<Typography variant="body1" paragraph>
					Le tournoi a connu un succès modeste, nous permettant de récolter une petite somme d'argent. Grâce à
					nos efforts, nous avons pu faire un don de 120€ à l'association ARSLA. Cette expérience a été
					enrichissante, non seulement parce qu'elle nous a permis de contribuer à une cause noble, mais aussi
					parce qu'elle m'a permis de développer des compétences en gestion de budget et en organisation
					d'événements. Travailler sur ce projet m'a apporté une grande satisfaction personnelle et m'a permis
					de renforcer mes compétences en collaboration et en communication.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextPoketech;
