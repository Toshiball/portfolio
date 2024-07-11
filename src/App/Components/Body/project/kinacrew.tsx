import { Box, Paper, Typography } from "@mui/material";
import { CopyBlock } from "react-code-blocks";

function TextKinacrew() {
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
				<Typography variant="h4" gutterBottom>
					Projet Kinacrew : Application Android pour les kinésithérapeutes
				</Typography>
				<Typography variant="body1" paragraph>
					Kinacrew est le fruit d'une collaboration au sein de mon groupe lors de notre cursus. Notre objectif
					: créer une application Android innovante répondant aux besoins spécifiques des professionnels de la
					kinésithérapie et de leurs patients. Avec une équipe dévouée, nous avons mis en œuvre nos
					compétences en développement Android, Java et Kotlin pour donner vie à ce projet ambitieux.
				</Typography>
				<Typography variant="h4" gutterBottom>
					Présentation
				</Typography>
				<Typography variant="body1" paragraph>
					Kinacrew est une application Android destinée aux kinésithérapeutes et à leurs patients. Conçu
					durant notre cursus, ce projet avait pour objectif de répondre aux besoins spécifiques des
					professionnels de la kinésithérapie en offrant une solution mobile innovante et pratique.
				</Typography>
				<Typography variant="h4" gutterBottom>
					Lancement du projet
				</Typography>
				<Typography variant="body1" paragraph>
					Au départ, notre groupe a identifié un besoin crucial parmi les kinésithérapeutes : une application
					mobile permettant de gérer les patients et de distribuer des programmes d'exercices. Le défi initial
					était de développer une application intuitive et fonctionnelle qui faciliterait la communication
					entre les kinésithérapeutes et leurs patients, tout en intégrant des fonctionnalités de gestion de
					compte sécurisées.
				</Typography>
				<Typography variant="h4" gutterBottom>
					Les étapes
				</Typography>
				<Typography variant="body1" paragraph>
					La réalisation de ce projet s'est déroulée en plusieurs étapes :
				</Typography>
				<Typography variant="body1" paragraph>
					1. <strong>Recherche et planification :</strong> Nous avons commencé par une phase de recherche pour
					comprendre les besoins des utilisateurs finaux, à savoir les kinésithérapeutes et leurs patients.
					Cette étape a impliqué des entretiens et des questionnaires pour recueillir des informations
					précises sur leurs attentes et leurs contraintes.
				</Typography>
				<Typography variant="body1" paragraph>
					2. <strong>Conception et développement :</strong> J'ai joué un rôle clé dans la mise en place de la
					gestion des connexions différenciées entre les patients et les kinésithérapeutes. Cela a nécessité
					une compréhension approfondie de l'interaction entre l'application et notre API, permettant de
					basculer dynamiquement entre les interfaces en fonction du type de compte connecté. J'ai également
					développé la page des paramètres, offrant aux utilisateurs la possibilité de modifier des éléments
					essentiels tels que le mot de passe et l'e-mail associé à leur compte. De plus, j'ai contribué à la
					conception de la page dédiée aux kinésithérapeutes, leur permettant de distribuer efficacement des
					programmes d'exercices à leurs patients.
				</Typography>
				<Typography variant="body1" paragraph>
					3. <strong>Tests et validation :</strong> Nous avons effectué des tests rigoureux pour nous assurer
					que toutes les fonctionnalités de l'application étaient opérationnelles et intuitives. Les retours
					des utilisateurs testeurs ont été pris en compte pour effectuer les ajustements nécessaires.
				</Typography>
				<Typography variant="body1" paragraph>
					4. <strong>Lancement et mise en production :</strong> Une fois l'application validée, elle a été
					déployée et mise à disposition des utilisateurs. Nous avons également assuré un suivi post-lancement
					pour garantir le bon fonctionnement de l'application et répondre aux éventuelles questions des
					utilisateurs.
				</Typography>
				<CopyBlock
					startingLineNumber={1}
					customStyle={{ width: "85%", overflowX: "auto", backgroundColor: "#f3f3f3" }}
					showLineNumbers
					language={"Java"}
					text={
						"@Override\n" +
						"    protected void onCreate(Bundle savedInstanceState) {\n" +
						"        super.onCreate(savedInstanceState);\n" +
						"        setContentView(R.layout.activity_exercices_detail);\n" +
						"\n" +
						"        youTubePlayerView = findViewById(R.id.youtube_video_exo);\n" +
						"        getLifecycle().addObserver(youTubePlayerView);\n" +
						"        tv_exodetail_nom = findViewById(R.id.tv_exodetail_nom);\n" +
						"        tv_exercice_detail_repet = findViewById(R.id.tv_exercice_detail_repet);\n" +
						"        tv_exercice_detail_commentaire = findViewById(R.id.tv_exercice_detail_commentaire);\n" +
						"        tv_exercice_detail_equipement = findViewById(R.id.tv_conseil_detail_equipement);\n" +
						"        tv_exo_countdown = findViewById(R.id.tv_exo_countdown);\n" +
						"        tv_exo_countdown.setVisibility(View.INVISIBLE);\n" +
						"        iv_exo_pause = findViewById(R.id.iv_exo_pause);\n" +
						"        getData();\n" +
						"        setData();\n" +
						"\n" +
						"\n" +
						"        iv_exo_pause.setOnClickListener(new View.OnClickListener() {\n" +
						"            @Override\n" +
						"            public void onClick(View view) {\n" +
						"                if (timerRunning) {\n" +
						"\n" +
						"                } else {\n" +
						"                    startTimer();\n" +
						"                    tv_exo_countdown.setVisibility(View.VISIBLE);\n" +
						"                    iv_exo_pause.setVisibility(View.INVISIBLE);\n" +
						"                }\n" +
						"            }\n" +
						"        });\n" +
						"\n" +
						"        updateCountDownText();\n" +
						"    }\n"
					}
				/>
				<Typography variant="caption" sx={{ marginBottom: "15px" }}>
					Création de la vue pour la pages de l'exercice sélectionner
				</Typography>
				<Typography variant="h4" gutterBottom>
					Les résultats
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Pour moi :</strong>
					Ce projet m'a permis de m'impliquer dans l'ensemble du processus de développement, depuis la
					conception jusqu'à la mise en production. J'ai pu exercer mes compétences en développement Android,
					Java et Kotlin, tout en prenant en charge des aspects clés de la gestion de projet. Cette expérience
					a renforcé ma confiance dans mes compétences techniques et ma capacité à collaborer efficacement au
					sein d'une équipe.
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Pour l'entreprise :</strong>
					L'application Kinacrew a été bien accueillie par les utilisateurs finaux, en particulier les
					kinésithérapeutes qui ont trouvé l'outil très utile pour la gestion de leurs patients et la
					distribution des programmes d'exercices. L'application a permis de centraliser et de simplifier ces
					processus, contribuant ainsi à une meilleure efficacité et à une meilleure communication entre les
					kinésithérapeutes et leurs patients.
				</Typography>
				<Typography variant="h4" gutterBottom>
					Les acteurs
				</Typography>
				<Typography variant="body1" paragraph>
					Tout au long du projet, j'ai collaboré étroitement avec les autres membres de l'équipe de
					développement, ainsi qu'avec les utilisateurs finaux pour m'assurer que l'application répondait à
					leurs besoins. Les échanges réguliers avec les utilisateurs testeurs ont été particulièrement
					précieux pour ajuster et améliorer l'application en fonction de leurs retours.
				</Typography>
				<Typography variant="h4" gutterBottom>
					Les lendemains du projet
				</Typography>
				<Typography variant="body1" paragraph>
					Aujourd'hui, Kinacrew est une application fonctionnelle et appréciée de ses utilisateurs. Plusieurs
					améliorations et nouvelles fonctionnalités sont envisagées pour les futures versions de
					l'application, telles que l'intégration de statistiques d'utilisation et la possibilité de
					synchroniser les programmes d'exercices avec d'autres applications de santé.
				</Typography>
				<Typography variant="h4" gutterBottom>
					Mon point de vue
				</Typography>
				<Typography variant="body1" paragraph>
					Ce projet a été une expérience unique et enrichissante, me permettant de développer non seulement
					mes compétences techniques, mais aussi mes capacités de gestion de projet et de communication. J'ai
					appris l'importance de bien comprendre les besoins des utilisateurs et de maintenir une
					communication claire et efficace avec toutes les parties prenantes pour assurer le succès d'un
					projet.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextKinacrew;
