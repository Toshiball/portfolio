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
					Mon expertise en matière de technologies API s'est avérée être un atout essentiel dans le
					développement back-end d'applications web, garantissant à la fois leur fonctionnalité et leur
					sécurité. Lors de mon stage, j'ai eu l'opportunité de mettre en pratique cette compétence de manière
					concrète. L'une de mes missions consistait à concevoir une API en PHP, répondant aux normes de
					sécurité les plus strictes pour protéger à la fois l'API elle-même et la base de données associée.
				</Typography>
				<Typography variant="body1" paragraph>
					Dans ce contexte, mon maître de stage souhaitait enrichir une application web existante avec un
					système complet de gestion des utilisateurs, incluant la connexion, la création de compte, la
					gestion de session, ainsi que leur sauvegarde. Cette application permettait aux utilisateurs
					d'explorer et de manipuler des objets 3D disposés sur une carte mondiale, offrant ainsi une
					expérience immersive unique.
				</Typography>
				<Typography variant="body1" paragraph>
					L'une de mes tâches principales a été de concevoir et de développer l'API nécessaire pour gérer
					l'authentification des utilisateurs, leur création et la gestion de sauvegarde de leur session de
					travaille. Pour assurer la bonne gestion de session de chaque utilisateur, j'ai mis en place des
					routes d'accès sécurisées, vérifiant à chaque requête l'identité de l'utilisateur et son niveau
					d'accréditation. J'ai également implémenté des mécanismes de chiffrement pour protéger les données
					sensibles et garantir leur confidentialité.
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
					Classant mon niveau de maîtrise comme confirmé, je demeure cependant toujours en quête de
					perfectionnement. Je reste constamment à l'affût des nouvelles tendances et bonnes pratiques en
					matière d'API, explorant les forums spécialisés et affinant mes compétences pour garantir une
					expérience utilisateur toujours plus optimale.
				</Typography>
				<Typography variant="body1" paragraph>
					L'importance de cette compétence dans mon rôle actuel ne peut être sous-estimée. Elle me permet de
					contribuer activement au développement back-end de nos projets, assurant ainsi la qualité et la
					stabilité de nos services. Après plusieurs mois de travail intensif sur les API, j'ai acquis une
					expertise significative dans ce domaine, me permettant de travailler de manière autonome sur des
					projets de grande envergure.
				</Typography>
				<Typography variant="body1" paragraph>
					Avec le recul, je conseille vivement à tous les professionnels de rester constamment informés sur
					les nouvelles tendances en matière de sécurité et d'optimisation des API. Se familiariser avec les
					outils et frameworks populaires est également crucial pour optimiser son flux de travail et rester
					compétitif sur le marché.
				</Typography>
				<Typography variant="body1" paragraph>
					En parallèle, mes ambitions à long terme incluent l'approfondissement de mes connaissances en design
					web et l'exploration de domaines connexes tels que l'UX/UI design, élargissant ainsi mes compétences
					et perspectives professionnelles. Dans cette optique, je prévois de suivre des cours avancés en API
					REST et en développement back-end, afin de continuer à améliorer mes compétences et demeurer à la
					pointe de l'industrie.
				</Typography>
				<Typography variant="body1" paragraph>
					Cette compétence a été mise en œuvre avec succès dans divers projets professionnels, notamment dans
					le cadre de mon expérience en alternance et de mes précédents stages, notamment chez Cinetech. Elle
					constitue un pilier fondamental de mon parcours professionnel, m'ouvrant ainsi de nouvelles portes
					vers l'excellence et l'innovation dans le domaine du développement web.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextAPI;
