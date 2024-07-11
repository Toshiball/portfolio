import { Box, Paper, Tooltip, Typography } from "@mui/material";
import { CopyBlock } from "react-code-blocks";

function TextCinetech() {
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
					Cinetech : Covoiturage pour les Cinéphiles
				</Typography>
				<Typography variant="body1" paragraph>
					Cinetech est une application SAAS innovante développée dans le cadre d'un projet de groupe à
					l'école. Son objectif est de faciliter l'accès aux salles de cinéma pour les passionnés de cinéma
					rencontrant des difficultés de déplacement, en offrant une solution de covoiturage.
				</Typography>

				<Typography variant="h5" gutterBottom>
					Lancement du projet
				</Typography>
				<Typography variant="body1" paragraph>
					Le projet est né d'une problématique courante : l'accès limité aux cinémas pour les personnes sans
					moyens de transport adéquats. L'idée était de créer une plateforme permettant aux cinéphiles de
					partager des trajets en voiture pour se rendre aux séances de cinéma.
				</Typography>

				<Typography variant="h5" gutterBottom>
					Les étapes du projet
				</Typography>
				<Typography variant="body1" paragraph>
					1. <strong>Identification des Besoins</strong> : Nous avons commencé par une analyse des besoins des
					utilisateurs potentiels et des fonctionnalités clés à intégrer. Cette étape a impliqué des
					discussions avec des cinéphiles pour comprendre leurs attentes et contraintes.
				</Typography>
				<Typography variant="body1" paragraph>
					2. <strong>Choix des Technologies</strong> : Nous avons opté pour Angular et Java EE pour le
					développement de l'application, combinés avec une API personnalisée. Cette combinaison nous a permis
					de créer une plateforme fluide et robuste pour nos utilisateurs.
				</Typography>
				<Typography variant="body1" paragraph>
					3. <strong>Développement des Fonctionnalités</strong> : L'un des défis majeurs était la mise en
					place de l'annulation d'un covoiturage. J'ai pris en charge le développement de cette
					fonctionnalité, en ajoutant la possibilité d'annuler un covoiturage dans notre API, puis en
					l'intégrant de manière transparente dans notre application.
				</Typography>
				<Typography variant="body1" paragraph>
					4. <strong>Contribution Personnelle</strong> : Outre cette contribution, j'ai également travaillé
					sur plusieurs autres aspects de l'application. J'ai notamment œuvré sur le profil utilisateur, la
					création de films, l'ajout de séances et la réservation de covoiturages. Mon engagement dans ces
					domaines a permis de garantir la richesse fonctionnelle de Cinetech.
				</Typography>
				<Typography variant="body1" paragraph>
					5. <strong>Présentation au Product Owner</strong> : Lorsque nous avons présenté notre produit au
					product owner, nous avons été ravis de constater sa satisfaction. L'application était livrée dans
					les délais impartis et répondait pleinement à ses attentes. Son approbation a été un témoignage de
					notre succès et de notre capacité à relever les défis techniques et fonctionnels.
				</Typography>
				<CopyBlock
					startingLineNumber={1}
					customStyle={{ width: "85%", overflowX: "auto", backgroundColor: "#f3f3f3", marginBottom: "25px" }}
					showLineNumbers
					language={"html"}
					text={`<p *ngFor="let alert of alerts">
    <ngb-alert [type]="alert.type"  [dismissible]="false">
        <div class="container">
            <ng-container *ngIf="alert.icon">
                <i class="nc-icon {{alert.icon}}"></i>
            </ng-container>
            {{ alert.message }}
            <button type="button" name="button" class="close" (click)="closeAlert(alert)">
                <i class="nc-icon nc-simple-remove"></i>
            </button>
        </div>
    </ngb-alert>
</p>`}
				/>
				<CopyBlock
					startingLineNumber={1}
					customStyle={{ width: "85%", height: "500px", overflowX: "auto", backgroundColor: "#f3f3f3" }}
					showLineNumbers
					language={"ts"}
					text={
						"export class NotificationComponent {\n" +
						"    @Input()\n" +
						"    public alerts: Array<IAlert> = [];\n" +
						"    private backup: Array<IAlert>;\n" +
						"\n" +
						"    constructor() {\n" +
						"        this.alerts.push({\n" +
						"            id: 1,\n" +
						"            type: 'success',\n" +
						"            message: 'This is an success alert',\n" +
						"        }, {\n" +
						"            id: 2,\n" +
						"            type: 'info',\n" +
						"            message: 'This is an info alert',\n" +
						"        }, {\n" +
						"            id: 3,\n" +
						"            type: 'warning',\n" +
						"            message: 'This is a warning alert',\n" +
						"            icon: 'nc-bell-55'\n" +
						"        }, {\n" +
						"            id: 4,\n" +
						"            type: 'danger',\n" +
						"            message: 'This is a danger alert',\n" +
						"            icon: 'nc-bell-55'\n" +
						"        });\n" +
						"        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));\n" +
						"    }\n" +
						"\n" +
						"    public closeAlert(alert: IAlert) {\n" +
						"        const index: number = this.alerts.indexOf(alert);\n" +
						"        this.alerts.splice(index, 1);\n" +
						"    }\n" +
						"}"
					}
				/>
				<Typography variant="caption" sx={{ marginBottom: "15px" }}>
					Fichier html et ts des notifications
				</Typography>
				<Typography variant="h5" gutterBottom>
					Les résultats
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Pour moi</strong> : Ce projet m'a permis de m'impliquer dans l'ensemble du processus de
					conception et de développement, en passant par l'intégration et la mise en production. J'ai ainsi pu
					exercer mes compétences en tant que développeur full stack, tout en prenant en charge la gestion de
					l'hébergement. Ce fut une excellente occasion pour moi de réaliser un projet complet, englobant tous
					les aspects simultanément et au sein d'un même environnement.
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Pour l'entreprise</strong> : L'outil actuel remplit pleinement sa fonction principale, qui
					est d'optimiser et de faciliter le travail des utilisateurs. Il permet de regrouper toutes les
					fiches clients sur une carte interactive, accessible facilement via un navigateur web ou un
					smartphone. Cela contribue à réduire les frais de déplacement des commerciaux et permet un gain de
					temps considérable pour tous les utilisateurs de l'outil.
				</Typography>

				<Typography variant="h5" gutterBottom>
					Les acteurs
				</Typography>
				<Typography variant="body1" paragraph>
					Tout au long du projet, j'ai maintenu un contact étroit avec les différentes parties prenantes afin
					de discuter des orientations futures du logiciel. Leurs retours et leurs directives étaient
					essentiels pour m'assurer que l'outil réponde aux attentes et aux besoins de l'entreprise.
				</Typography>

				<Typography variant="h5" gutterBottom>
					Les lendemains du projet
				</Typography>
				<Typography variant="body1" paragraph>
					Aujourd'hui, le projet a atteint son objectif initial en offrant la possibilité de visualiser toutes
					les fiches clients sur une carte interactive. Les utilisateurs ont accès à un outil convivial qui
					facilite la gestion de leurs trajets.
				</Typography>
				<Typography variant="body1" paragraph>
					Demain, plusieurs nouvelles fonctionnalités pourraient être ajoutées à l'outil existant, visant à
					améliorer davantage l'efficacité et la productivité des utilisateurs. Voici quelques-unes de ces
					fonctionnalités potentielles :
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Un système de statistique</strong> : Une fonctionnalité de statistiques pourrait être
					intégrée à l'outil, offrant ainsi une vision d'ensemble des données utilisateurs par région. Cela
					permettrait à l'équipe de direction de mieux comprendre les performances dans différentes zones
					géographiques et d'identifier les prochaines priorités.
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Une gestion des événements Outlook</strong> : Une intégration avec le calendrier Outlook
					pourrait être mise en place, permettant aux utilisateurs de gérer leurs événements et rendez-vous
					directement depuis l'outil.
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Proposer un itinéraire optimisé</strong> : Une fonctionnalité d'itinéraire optimisé pourrait
					être développée pour aider les utilisateurs à planifier leurs déplacements en fonction des trajets à
					venir.
				</Typography>
				<Typography variant="body1" paragraph>
					<strong>Rendre l'outil plus modulable</strong> : Dans une perspective de commercialisation, l'outil
					pourrait être rendu le plus modulable possible. Cela signifie qu'il serait facilement adaptable et
					personnalisable en fonction des besoins spécifiques des clients.
				</Typography>

				<Typography variant="h5" gutterBottom>
					Mon point de vue
				</Typography>
				<Typography variant="body1" paragraph>
					Ce projet représente une expérience unique pour moi, car il s'agit de mon premier projet en
					entreprise où j'ai été entièrement responsable et autonome. Tout au long du processus de
					développement, j'ai eu l'opportunité d'interagir directement avec différentes parties prenantes,
					qu'il s'agisse de personnes techniques, commerciales ou faisant partie de la direction de
					l'entreprise. Une communication claire et efficace était essentielle pour assurer une compréhension
					mutuelle entre toutes les parties impliquées.
				</Typography>
				<Typography variant="body1" paragraph>
					Cette expérience m'a permis de développer mes compétences en communication, tant sur le plan
					technique que non technique. J'ai appris à adapter mon discours en fonction de mon interlocuteur, à
					identifier les besoins spécifiques de chaque partie prenante et à expliquer les aspects techniques
					de manière compréhensible pour tous. Cette capacité de vulgarisation a été essentielle pour
					maintenir une collaboration harmonieuse et obtenir le soutien nécessaire tout au long du projet.
				</Typography>
				<Typography variant="body1" paragraph>
					Ce projet a été une véritable révélation pour moi quant à l'importance de la perspective
					utilisateur. J'ai réalisé que la vision que nous avons en tant que développeurs d'une fonctionnalité
					peut différer de celle de l'utilisateur final. Il est donc crucial de guider et d'accompagner les
					utilisateurs tout au long de leur expérience avec l'outil.
				</Typography>
				<Typography variant="body1" paragraph>
					Avec du recul, je me rends compte que la réalisation de ce projet aurait gagné en efficacité si plus
					de temps avait été consacré à l'élaboration d'un cahier des charges détaillé, incluant des
					fonctionnalités précises, afin d'éviter des modifications majeures qui ont eu lieu par la suite et
					ont par exemple nécessité une refonte du modèle de base de données (ex : écriture de nombreux
					scripts de migration MongoDB).
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextCinetech;
