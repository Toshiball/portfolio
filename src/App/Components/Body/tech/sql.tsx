import { Box, Paper, Typography } from "@mui/material";
import { CopyBlock } from "react-code-blocks";

function TextSQL() {
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
					Expérience en SQL
				</Typography>
				<Typography variant="body1" paragraph>
					Le langage SQL (Structured Query Language) a été créé en 1974 par Donald D. Chamberlin et Raymond F.
					Boyce. Utilisé pour communiquer avec des bases de données relationnelles, il permet de lire, créer,
					modifier et supprimer des données. Par exemple, SQL peut servir à gérer des utilisateurs ou des
					référentiels de produits.
				</Typography>
				<Typography variant="body1" paragraph>
					J’ai rapidement appris à utiliser SQL, et depuis, je l’intègre dans presque tous mes projets. La
					gestion d’une base de données est quasiment toujours nécessaire, et SQL est l’outil idéal pour
					manipuler facilement les données via des scripts. Pour m’aider dans cette tâche, j’utilise aussi des
					gestionnaires de bases comme MySQL ou PostgreSQL, qui simplifient la création des scripts et la
					modification de la structure des bases.
				</Typography>
				<Typography variant="body1" paragraph>
					Mon premier vrai projet avec SQL était Cinetech, un système de covoiturage pour aller au cinéma,
					réalisé pendant mon quatrième semestre à l’ESIEA. J’ai commencé par créer un schéma de base de
					données en utilisant un MCD/MLD (Modèle Conceptuel et Logique de Données), ce qui m’a vraiment aidé
					à bien comprendre les différentes tables et les données dont on avait besoin.
				</Typography>
				<Typography variant="body1" paragraph>
					Ensuite, on a mis en place une base de données pour gérer les covoiturages, avec des scripts SQL
					pour ajouter un nouveau compte utilisateur au moment de l’inscription. L’utilisateur peut ensuite se
					connecter, créer un covoiturage en choisissant son point de départ, le cinéma, le film et l’heure de
					la séance. S’il y a une erreur ou s’il veut modifier une information, il peut le faire via
					l’interface utilisateur, qui déclenche alors un script SQL pour mettre à jour les données dans la
					base.
				</Typography>
				<CopyBlock
					startingLineNumber={1}
					customStyle={{ width: "85%", overflowX: "auto", backgroundColor: "#f3f3f3" }}
					showLineNumbers
					language={"sql"}
					text={
						"SELECT \n" +
						"    c.id AS covoiturage_id,\n" +
						"    c.date,\n" +
						"    c.depart,\n" +
						"    c.destination,\n" +
						"    u.id AS utilisateur_id,\n" +
						"    u.nom AS utilisateur_nom,\n" +
						"    u.prenom AS utilisateur_prenom,\n" +
						"    f.id AS film_id,\n" +
						"    f.titre AS film_titre,\n" +
						"    p.id AS passager_id,\n" +
						"    p.nom AS passager_nom,\n" +
						"    p.prenom AS passager_prenom\n" +
						"FROM \n" +
						"    covoiturage c\n" +
						"JOIN \n" +
						"    user u ON c.utilisateur_id = u.id\n" +
						"JOIN \n" +
						"    film f ON c.film_id = f.id\n" +
						"JOIN \n" +
						"    covoiturage_passagers cp ON c.id = cp.covoiturage_id\n" +
						"JOIN \n" +
						"    user p ON cp.passager_id = p.id\n" +
						"WHERE \n" +
						"    c.id = [ID_DU_COVOITURAGE];\n"
					}
				/>
				<Typography variant="body1" paragraph>
					SQL est sans doute le langage de requête le plus connu et le plus utilisé dans le monde. Comme
					presque toutes les applications ont besoin d’une base de données, SQL est le meilleur outil pour
					gérer ces données de façon claire et efficace. C’est pour ça que, pour un développeur, il est
					indispensable d’avoir au moins des bases solides en SQL, pour pouvoir comprendre et écrire des
					scripts.
				</Typography>
				<Typography variant="body1" paragraph>
					Grâce à mes différentes expériences avec SQL, je me sens capable d’aider une équipe à créer une base
					de données et à développer les scripts nécessaires pour la faire fonctionner et la maintenir. Mon
					travail actuel chez Quest Innov me permet d’ailleurs de continuer à progresser et de construire mon
					avenir professionnel avec cette compétence.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextSQL;
