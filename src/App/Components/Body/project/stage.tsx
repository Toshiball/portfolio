import { Box, Paper, Typography } from "@mui/material";

function TextStage() {
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
					Stage : Développement d'une Application SAAS pour la Visualisation 3D
				</Typography>
				<Typography variant="body1" paragraph>
					Ce projet est une application SAAS (Software as a Service) conçue pour la visualisation d'objets en
					3D, de photomaillages et de cadastres. Cette application vise à digitaliser et optimiser les
					processus métiers liés à la visualisation et à la gestion de données géospatiales, actuellement mise
					en œuvre au sein de l'entreprise.
				</Typography>
				<Typography variant="h5" gutterBottom>
					Lancement du projet
				</Typography>
				<Typography variant="body1" paragraph>
					L'entreprise avait besoin d'un outil permettant de visualiser des objets en 3D de manière
					interactive et intuitive, tout en assurant une gestion efficace des données géospatiales. Le projet
					visait à remplacer les méthodes traditionnelles de visualisation et de gestion, souvent fastidieuses
					et peu interactives, par une solution moderne et dynamique. La volumétrie importante des données et
					la complexité de la visualisation en 3D posaient des défis particuliers, nécessitant une solution
					performante et adaptée.
				</Typography>
				<Box>
					<img
						src={"https://storage.akuma.network/api/public/dl/u7GARoXc/Portfolio/image/projet/img_1.png"}
						alt="Photomaillage"
						style={{ width: "45%", borderRadius: "10px", marginBottom: "20px", marginRight: "15px" }}
					/>
					<img
						src={"https://storage.akuma.network/api/public/dl/yi4P1dpH/Portfolio/image/projet/img_2.png"}
						alt="Model_3D"
						style={{ width: "45%", borderRadius: "10px", marginBottom: "20px", marginLeft: "15px" }}
					/>
				</Box>
				<Typography variant="h5" gutterBottom>
					Les étapes
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Consultation des utilisateurs finaux :</strong> La première étape a consisté à collaborer
					étroitement avec les utilisateurs finaux pour comprendre leurs besoins spécifiques et leurs
					attentes. Cette phase de consultation a permis de définir les fonctionnalités clés de l'application
					et d'assurer une transition fluide de l'ancien système vers le nouveau.
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Choix des technologies :</strong> La partie front-end de l'application a été développée en
					React, HTML/CSS, et TypeScript/JavaScript pour offrir une interface utilisateur dynamique et
					réactive. Le back-end a été géré avec PHP pour l'API et MySQL pour le stockage et la gestion des
					données. Ce choix technologique visait à garantir la robustesse et la flexibilité de l'application.
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Développement et intégration des fonctionnalités :</strong> Durant le développement,
					plusieurs défis techniques ont été relevés :
					<ul>
						<li>
							<strong>Clipping sur photomaillage :</strong> La mise en œuvre d'une fonctionnalité de
							clipping sur des objets 3D projetés en photomaillage a été particulièrement complexe. Grâce
							à des recherches et à l'aide de la communauté des développeurs, une solution adaptée a été
							trouvée et intégrée.
						</li>
						<li>
							<strong>Gestion de session :</strong> Un système de gestion de session robuste a été mis en
							place pour permettre aux utilisateurs de sauvegarder leur travail en temps réel, assurant
							ainsi la sécurité et la fiabilité des données.
						</li>
					</ul>
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Développement autonome et présentation :</strong> J'ai pris en charge la conception et le
					développement de l'ensemble de l'application, travaillant principalement en autonomie. Lors de la
					présentation finale de l'application, celle-ci a été accueillie avec enthousiasme par mon maître de
					stage, soulignant la qualité de l'interface utilisateur et la fluidité de l'expérience utilisateur.
				</Typography>
				<Typography variant="h5" gutterBottom>
					Les résultats
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Pour moi :</strong> Ce projet m'a permis de m'impliquer dans l'ensemble du processus de
					conception et de développement, de l'intégration à la mise en production. J'ai exercé mes
					compétences en tant que développeur full stack et j'ai exploré le domaine du DevOps en prenant en
					charge la gestion de l'hébergement. Cette expérience m'a offert une perspective complète du
					développement d'applications SAAS et m'a encouragé à me spécialiser davantage dans ce domaine.
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Pour l'entreprise :</strong> L'application répond pleinement à ses objectifs, facilitant la
					visualisation et la gestion des données géospatiales. Elle permet une interaction intuitive et
					efficace avec les objets en 3D, réduisant le temps et les coûts associés aux méthodes
					traditionnelles. Les utilisateurs bénéficient d'une interface conviviale et d'une expérience
					utilisateur fluide, améliorant ainsi leur productivité et leur satisfaction.
				</Typography>
				<img
					src={"https://storage.akuma.network/api/public/dl/kowno4sw/Portfolio/image/projet/img_3.png"}
					alt="clipping"
					style={{ width: "55%", borderRadius: "10px", marginBottom: "20px", marginLeft: "15px" }}
				/>
				<Typography variant="h5" gutterBottom>
					Les lendemains du projet
				</Typography>
				<Typography variant="body1" paragraph>
					L'application est actuellement utilisée avec succès par l'entreprise. Des améliorations et des
					fonctionnalités supplémentaires sont envisagées pour répondre encore mieux aux besoins des
					utilisateurs et pour exploiter pleinement le potentiel de la visualisation 3D.
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Fonctionnalités potentielles futures :</strong>
					<ul>
						<li>
							<strong>Système de statistiques :</strong> Intégration d'une fonctionnalité de statistiques
							pour analyser les données géospatiales et aider à la prise de décision.
						</li>
						<li>
							<strong>Gestion des événements :</strong> Mise en place d'une intégration avec des
							calendriers pour gérer les événements et les rendez-vous directement depuis l'application.
						</li>
						<li>
							<strong>Optimisation des itinéraires :</strong> Développement d'une fonctionnalité
							d'itinéraire optimisé pour planifier efficacement les déplacements en fonction des données
							géospatiales.
						</li>
						<li>
							<strong>Modularité accrue :</strong> Rendre l'application plus modulable et personnalisable
							pour répondre aux besoins spécifiques de divers clients.
						</li>
					</ul>
				</Typography>
				<Typography variant="h5" gutterBottom>
					Mon point de vue
				</Typography>
				<Typography variant="body1" paragraph>
					Ce projet a été une expérience enrichissante, me permettant de développer mes compétences techniques
					et de gestion de projet. La communication avec les différentes parties prenantes et l'adaptation aux
					besoins des utilisateurs finaux ont été des aspects cruciaux de cette réussite. Cette expérience m'a
					confirmé l'importance de la perspective utilisateur dans le développement d'applications et m'a
					motivé à poursuivre dans cette voie pour devenir un développeur encore plus polyvalent et compétent.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextStage;
