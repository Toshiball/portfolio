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
					J'ai rapidement commencé à utiliser SQL et l'ai appliqué dans tous mes projets depuis lors.
					L'utilisation d'une base de données est presque systématique dans chaque projet, et SQL permet de
					gérer facilement les données de ces bases via des scripts. Il existe également des gestionnaires de
					bases de données comme MySQL ou PostgreSQL, qui facilitent le développement des scripts et
					permettent de modifier la structure des bases de données de manière simplifiée.
				</Typography>
				<Typography variant="body1" paragraph>
					Le premier projet où j'ai utilisé SQL était le projet Cinetech, un système de création et de gestion
					de covoiturages pour le cinéma, réalisé durant mon quatrième semestre à l'ESIEA. J'ai mis en place
					un schéma de base de données avec l'aide d'un MCD/MLD (Modèle Conceptuel de Données / Modèle Logique
					de Données), ce qui m'a permis de bien comprendre toutes les tables et les données nécessaires.
				</Typography>
				<Typography variant="body1" paragraph>
					Nous avons ainsi créé une base de données pour la gestion des covoiturages et développé des scripts
					SQL pour ajouter les données d'un nouveau compte lors de l'inscription, afin que l'utilisateur
					puisse ensuite se connecter. Il peut ensuite créer un covoiturage en sélectionnant son lieu de
					départ, le cinéma de destination et le film avec l'heure de la séance. Si une erreur survient lors
					de l'ajout du covoiturage et qu'il souhaite modifier une valeur, il peut le faire via une interface
					utilisateur, ce qui déclenche l'exécution du script SQL permettant de modifier cette valeur dans la
					base de données.
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
					SQL est le langage de requête le plus célèbre et le plus utilisé dans le monde. Comme mentionné
					précédemment, presque toute application a besoin d'une base de données, et SQL est le langage le
					plus efficace et le plus lisible pour la gestion de ces bases. C'est pourquoi, en tant que
					développeur, il est essentiel de posséder au moins des connaissances de base en langage de requête
					pour comprendre et développer des scripts. SQL est le langage que je recommande sans hésitation en
					raison de sa popularité.
				</Typography>
				<Typography variant="body1" paragraph>
					Grâce à mes expériences avec ce langage, je pense être compétent pour aider une équipe à mettre en
					place une base de données SQL et à développer les scripts nécessaires à son utilisation et à son
					maintien. Ces expériences, ainsi que mon travail actuel chez Quest Innov, me permettent de continuer
					à m'améliorer et de me projeter dans mon parcours professionnel.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextSQL;
