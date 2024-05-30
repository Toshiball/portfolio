import { Box, Paper, Typography } from "@mui/material";
import { CopyBlock } from "react-code-blocks";

function TextJava() {
	return (
		<Box>
			<Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
				<Typography variant="h5" gutterBottom>
					Expérience en Java
				</Typography>
				<Typography variant="body1" paragraph>
					Java est un langage de programmation polyvalent et orienté objet largement utilisé pour le
					développement d'applications, en particulier pour les applications d'entreprise, les applications
					mobiles Android et les applications web.
				</Typography>
				<Typography variant="body1" paragraph>
					Ayant évolué dans divers contextes professionnels et académiques, ma maîtrise de la technologie Java
					s'est avérée être un atout inestimable. Cette compétence s'est révélée essentielle pour répondre aux
					exigences de développement d'API tant pour des applications mobiles que web, notamment dans le cadre
					de projets académiques et de groupe.
				</Typography>
				<Typography variant="body1" paragraph>
					Lors du projet KinaCrew, l'une de mes missions a été de développer une API (application programming
					interface ou « interface de programmation d'application ») en Java pour permettre d'effectuer des
					requêtes à notre base de données MySQL. J'ai pu mettre en place des routes efficaces et optimiser la
					manipulation des données, notamment lors de l'enregistrement de formulaires. Par exemple, nous
					devions enregistrer les informations d'un exercice donné par un kiné (le type d'exercice, le nombre
					de répétitions, la durée de la séance et le lien de la vidéo si une vidéo était disponible) et
					notifier le patient de son nouveau programme d'exercices. Le challenge était de bien notifier la
					bonne personne sur l'application mobile.
				</Typography>
				<Typography variant="body1" paragraph>
					Pour réussir à bien envoyer la notification à la bonne personne, nous avons mis en place, lors de la
					création de l'exercice, un système de notification qui envoie un message à l'utilisateur concerné.
					Pour commencer, nous devons demander l'autorisation de l'utilisateur pour envoyer des notifications
					avec le code suivant :
				</Typography>
				<CopyBlock
					startingLineNumber={1}
					showLineNumbers
					language={"xml"}
					text={
						"<manifest ...>\n" +
						'    <uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>\n' +
						"    <application ...>\n" +
						"        ...\n" +
						"    </application>\n" +
						"</manifest>"
					}
				/>
				<Typography variant="body1" paragraph>
					Ensuite, nous construisons notre notification :
				</Typography>
				<CopyBlock
					startingLineNumber={1}
					showLineNumbers
					language={"java"}
					text={`NotificationCompat.Builder builder = new NotificationCompat.Builder(this, CHANNEL_ID)
        .setSmallIcon(R.drawable.notification_icon)
        .setContentTitle("Avez-vous des exercices ?")
        .setContentText(contentExercice)
        .setPriority(NotificationCompat.PRIORITY_DEFAULT);`}
				/>
				<Typography variant="body1" paragraph>
					Grâce à ce code, on peut envoyer des notifications au besoin.
				</Typography>
				{/**/}
				<Typography variant="body1" paragraph>
					Ma maîtrise autonome de Java, acquise au fil de six mois d'expérience pratique, m'a permis de mener
					à bien ces projets avec efficacité. Je suis constamment à la recherche d'opportunités
					d'optimisation, en explorant les dernières fonctionnalités de Java pour garantir une qualité
					toujours plus élevée dans mes réalisations.
				</Typography>
				<Typography variant="body1" paragraph>
					Bien que cette compétence ne soit pas cruciale pour mon rôle actuel, je reste convaincu de son
					importance dans le domaine du développement logiciel. Mon conseil pour les aspirants développeurs
					est de rester à jour avec les nouvelles versions et les meilleures pratiques de Java, étant donné la
					dynamique active de sa communauté.
				</Typography>
				<Typography variant="body1" paragraph>
					À long terme, je ne vise pas nécessairement à devenir un expert Java, mais je reste ouvert à l'idée
					de me perfectionner dans ce domaine si les opportunités se présentent. Bien que je n'aie pas prévu
					de suivre des formations spécifiques sur Java dans un avenir proche, mes réalisations antérieures,
					notamment dans les projets CineTech et KinaCrew, attestent de ma capacité à utiliser cette
					technologie de manière efficace et créative.
				</Typography>
			</Paper>
			{/*Ayant évolué dans divers contextes professionnels et académiques, ma maîtrise de la technologie Java
				s'est avérée être un atout inestimable. Cette compétence s'est révélée essentielle pour répondre aux
				exigences de développement d'API tant pour des applications mobiles que web, notamment dans le cadre de
				projets académiques et de groupe. Lors de mon parcours scolaire, l'une de mes missions les plus
				mémorables a été de développer une API permettant d'effectuer des requêtes sur une base de données, dans
				le but de fournir une couverture exhaustive des fonctionnalités pour une application web spécifique. Ma
				capacité à concevoir des routes efficaces et à optimiser la manipulation des données, notamment lors de
				l'enregistrement de formulaires, a permis d'atteindre des performances remarquables. En effet, le temps
				d'appel de l'API a été réduit à moins d'une seconde, ce qui a grandement amélioré l'expérience
				utilisateur. Ma maîtrise autonome de Java, acquise au fil de six mois d'expérience pratique, m'a permis
				de mener à bien ces projets avec efficacité. Je suis constamment à la recherche d'opportunités
				d'optimisation, en explorant les dernières fonctionnalités de Java pour garantir une qualité toujours
				plus élevée dans mes réalisations. Bien que cette compétence ne soit pas cruciale pour mon rôle actuel,
				je reste convaincu de son importance dans le domaine du développement logiciel. Mon conseil pour les
				aspirants développeurs est de rester à jour avec les nouvelles versions et les meilleures pratiques de
				Java, étant donné la dynamique active de sa communauté. À long terme, je ne vise pas nécessairement à
				devenir un expert Java, mais je reste ouvert à l'idée de me perfectionner dans ce domaine si les
				opportunités se présentent. Bien que je n'aie pas prévu de suivre des formations spécifiques sur Java
				dans un avenir proche, mes réalisations antérieures, notamment dans les projets CineTech et KinaCrew,
				attestent de ma capacité à utiliser cette technologie de manière efficace et créative.*/}
		</Box>
	);
}

export default TextJava;
