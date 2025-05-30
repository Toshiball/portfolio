import { Box, Paper, Typography } from "@mui/material";
import { CopyBlock } from "react-code-blocks";

function TextJava() {
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
					Expérience en Java
				</Typography>
				<Typography variant="body1" paragraph>
					Java est un langage de programmation polyvalent et orienté objet largement utilisé pour le
					développement d'applications, en particulier pour les applications d'entreprise, les applications
					mobiles Android et les applications web.
				</Typography>
				<Typography variant="body1" paragraph>
					Au fil de mes expériences scolaires et professionnelles, Java est devenue une vraie force pour moi.
					Cette compétence m’a permis de créer des API solides, utiles aussi bien pour des applications
					mobiles que web, surtout dans des projets en équipe.
				</Typography>
				<Typography variant="body1" paragraph>
					Sur le projet KinaCrew, j’ai eu la chance de développer une API en Java pour communiquer avec notre
					base de données MySQL. Mon rôle était de mettre en place des « routes » efficaces pour gérer les
					données, notamment pour enregistrer les formulaires. Par exemple, il fallait garder en mémoire les
					détails des exercices prescrits par un kiné le type d’exercice, le nombre de répétitions, la durée
					de la séance, et même le lien vers une vidéo si besoin — puis prévenir le patient que son programme
					avait été mis à jour.
				</Typography>
				<Typography variant="body1" paragraph>
					Le vrai challenge ? Faire en sorte que la notification arrive bien à la bonne personne sur
					l’application mobile. Pour ça, on a mis en place un système qui demande d’abord la permission à
					l’utilisateur pour envoyer des notifications, afin d’être sûr de bien suivre chaque patient. Ce
					projet m’a vraiment appris à construire des solutions efficaces et précises, tout en gardant
					l’utilisateur final au cœur des préoccupations.
				</Typography>
				<CopyBlock
					startingLineNumber={1}
					showLineNumbers
					customStyle={{ width: "85%", overflowX: "auto", backgroundColor: "#f3f3f3" }}
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
					customStyle={{ width: "85%", overflowX: "auto", backgroundColor: "#f3f3f3" }}
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
				<Typography variant="body1" paragraph>
					En six mois d’expérience pratique, j’ai pu acquérir une bonne autonomie en Java, ce qui m’a permis
					de mener mes projets avec efficacité. J’aime explorer les nouvelles fonctionnalités du langage pour
					améliorer continuellement la qualité de mon code et optimiser mes réalisations.
				</Typography>
				<Typography variant="body1" paragraph>
					Même si Java n’est pas au cœur de mon poste actuel, je reste convaincu que c’est une compétence
					précieuse dans le développement logiciel. Mon conseil aux développeurs débutants est de toujours se
					tenir informés des évolutions du langage et des bonnes pratiques, car la communauté Java est très
					active et en constante évolution.
				</Typography>
				<Typography variant="body1" paragraph>
					Sur le long terme, je ne vise pas forcément à devenir un expert Java, mais je suis toujours ouvert à
					approfondir mes connaissances si l’occasion se présente. Pour l’instant, je n’ai pas de formation
					spécifique prévue, mais mes expériences sur des projets comme CineTech et KinaCrew montrent que je
					sais utiliser Java de manière efficace et créative quand c’est nécessaire.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextJava;
