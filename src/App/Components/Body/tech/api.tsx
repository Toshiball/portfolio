import { Box, Paper, Typography } from "@mui/material";
import { CopyBlock } from "react-code-blocks";

function TextAPI() {
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
					Expérience en API
				</Typography>
				<Typography variant="body1" paragraph>
					Une API (Application Programming Interface) est un ensemble de règles et de protocoles permettant à
					différentes applications de communiquer entre elles. Les API sont essentielles pour le développement
					back-end, garantissant à la fois la fonctionnalité et la sécurité des applications web.
				</Typography>
				<Typography variant="body1" paragraph>
					J’ai développé une solide expérience dans l’utilisation des technologies API, ce qui m’a permis de
					créer des applica‍tions web à la fois fonctionnelles et sécurisées. Pendant mon stage, j’ai
					notamment conçu une API en PHP en respectant des normes de séc‍urité strictes, afin de protéger les
					échanges de données et la base de données liée.
				</Typography>
				<Typography variant="body1" paragraph>
					Dans ce cadre, mon maître de stage m’a confié la mission d’‍‍ajouter un système complet de gestion
					des utilisa‍teurs à une application web existante. Cela incluait la création de compte, la
					connexion, la gestion des sessions et la sauv‍egarde des données. L’application offrait une
					expérience immer‍sive en permettant aux utilisateurs d’explorer et de mani‍puler des objets 3D
					placés sur une carte du monde.
				</Typography>
				<Typography variant="body1" paragraph>
					L'une de mes principales missions a été de concevoir et développer l’API perme‍ttant de gérer
					l’authent‍ification des utilisateurs, la créa‍tion de comptes, ainsi que la sauvegarde de leurs
					sessions de travail. Pour assurer une gestion sécurisée des sessions, j’ai mis en place des routes
					protégées qui véri‍fient, à chaque requête, l’iden‍tité de l’utilisateur et son niveau d’accès. J’ai
					également intégré des mécanismes de chiffrement afin de protéger les donné‍‍es sensibles et garantir
					leur confidenti‍alité.
				</Typography>
				<CopyBlock
					startingLineNumber={1}
					customStyle={{ width: "85%", overflowX: "auto", backgroundColor: "#f3f3f3" }}
					showLineNumbers
					language={"php"}
					text={
						"// Préparer et exécuter la requête SQL pour mettre à jour les données de l'utilisateur\n" +
						'$stmt = $conn->prepare("UPDATE users SET data = ? WHERE id = ?");\n' +
						'$stmt->bind_param("si", json_encode($data->data), $user_id);\n' +
						"\n" +
						"if ($stmt->execute()) {\n" +
						"    http_response_code(200);\n" +
						'    echo json_encode(["message" => "Données mises à jour avec succès."]);\n' +
						"} else {\n" +
						"    http_response_code(500);\n" +
						'    echo json_encode(["message" => "Erreur lors de la mise à jour des données."]);\n' +
						"}"
					}
				/>
				<Typography variant="body1" paragraph>
					Je considère avoir un bon niveau en développement d’API, tout en cherchant constamment à progresser.
					Je reste attentif aux évolutions du domaine, en explorant régulièrement les nouvelles tendances, les
					bonnes pratiques et les outils populaires pour rester à jour et proposer des solutions toujours plus
					efficaces.
				</Typography>
				<Typography variant="body1" paragraph>
					Cette compétence est essentielle dans mon travail actuel. Elle me permet de contribuer activement à
					la qualité, la sécurité et la stabilité du back-end de nos projets. Grâce à plusieurs mois de
					pratique, j’ai acquis une expertise solide qui me permet aujourd’hui de travailler de manière
					autonome sur des projets complexes.
				</Typography>
				<Typography variant="body1" paragraph>
					Je recommande vivement à tout développeur de rester informé sur les dernières pratiques en matière
					de sécurité et d’optimisation des API. Maîtriser les bons outils et frameworks fait vraiment la
					différence pour gagner en efficacité et en qualité.
				</Typography>
				<Typography variant="body1" paragraph>
					À long terme, j’aimerais élargir mes compétences en design web, notamment en UX/UI, pour mieux
					relier les aspects techniques et l’expérience utilisateur. C’est dans cette optique que je prévois
					de suivre des formations avancées en API REST et en développement back-end.
				</Typography>
				<Typography variant="body1" paragraph>
					Cette compétence a été un véritable atout dans plusieurs de mes expériences professionnelles,
					notamment en alternance et lors de mes projets, comme chez Cinetech. Elle représente un pilier
					important de mon parcours dans le développement web.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextAPI;
