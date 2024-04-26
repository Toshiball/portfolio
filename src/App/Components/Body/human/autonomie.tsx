import { Box, Paper, Typography } from "@mui/material";

function TextAutonomie() {
	return (
		<Box>
			<Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
				<Typography variant="h5" gutterBottom>
					Autonomie Professionnelle
				</Typography>
				<Typography variant="body1" paragraph>
					L'autonomie, notamment dans le domaine professionnel, se définit comme la capacité à prendre en
					charge une tâche ou à résoudre un problème de manière indépendante. Il est crucial de ne pas la
					confondre avec l'indépendance. En effet, l'autonomie implique également la capacité à solliciter de
					l'aide lorsque nécessaire, tandis que l'indépendance se réfère davantage à la résolution autonome de
					problèmes ou à l'accomplissement de tâches sans recourir à l'assistance d'autrui.
				</Typography>
				<Typography variant="body1" paragraph>
					Dans le cadre de mes études, ainsi que lors de mon expérience en alternance chez Quest Innov, j'ai
					souvent dû faire preuve d'autonomie. L'un des projets qui m'a le plus fait progresser dans ce
					domaine a été l'intégration d'une interface permettant l'automatisation de l'importation de données
					sur les parcelles agricoles. J'ai été chargé du développement de l'ensemble de l'interface, de la
					conception de l'algorithme et de son intégration dans la base de données.
				</Typography>
				<Typography variant="body1" paragraph>
					Cependant, c'est lors de ma mission chez Quest Innov, notamment sur l'intégration d'un système de
					supervision du traitement du maïs en usine, que j'ai véritablement pu évaluer mes compétences en
					autonomie. Après quelques indications de mon chef d'équipe, j'ai pu explorer et modifier plusieurs
					aspects de ce système complexe de manière autonome. J'ai principalement travaillé seul sur la phase
					initiale du projet, élaborant le schéma des tables pour la base de données et les mettant en place,
					ainsi que les différents processus à suivre. Ensuite, j'ai commencé à intégrer une version de la vue
					en direct des bennes placées sur les emplacements de séchage, permettant une navigation sur un
					schéma représentant ces emplacements en vue du dessus et une interaction avec ceux-ci.
				</Typography>
				<Typography variant="body1" paragraph>
					Malgré le fait que j'ai souvent travaillé seul sur certaines tâches ou parties des projets, je n'ai
					pas hésité à solliciter l'aide de mon équipe lorsque cela était nécessaire. Cette capacité à
					demander de l'aide distingue l'autonomie de l'indépendance. Sans cette sollicitation, les tâches en
					question auraient pu prendre beaucoup plus de temps à réaliser, voire échouer.
				</Typography>
				<Typography variant="body1" paragraph>
					En m'auto-évaluant, je constate que l'autonomie professionnelle est une compétence essentielle,
					surtout dans le domaine du développement informatique. En choisissant cette voie, je me suis préparé
					dès mes projets scolaires à être autonome, en vue de mes expériences professionnelles chez Quest
					Innov en tant que stagiaire puis alternant. Un développeur autonome est capable de trouver des
					solutions à presque tous les problèmes rencontrés, et c'est pourquoi je m'efforce de mettre en
					pratique cette compétence autant que possible.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextAutonomie;
