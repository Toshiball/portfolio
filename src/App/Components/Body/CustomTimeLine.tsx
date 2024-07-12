import React, { useState } from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Typography, Avatar, Popover, Button, Backdrop } from "@mui/material";

const timelineData = [
	{
		title: "Alternant",
		subtitle: "QUEST INNOV",
		dateRange: "Septembre 2022 - Aujourd'hui",
		duration: "2 ans",
		description: "Développeur Full Stack (React, Node.js, PostgreSQL)",
		image: "https://storage.akuma.network/api/public/dl/I18TyHO8/Portfolio/image/QuestInnovicon.png", // Ajoutez l'URL de votre image ici
		popup:
			"Quest Innov est une entreprise spécialisée dans les services de surveillance des cultures agricoles. Elle propose des solutions de suivi en temps réel des récoltes, de planification logistique, de gestion de la main-d'œuvre et de traçabilité de la production. L'entreprise met l'accent sur l'innovation et l'efficacité, en offrant des développements personnalisés pour répondre aux défis spécifiques de l'agriculture. Quest Innov collabore avec des clients comme KWS France et Bayer Crop Science pour optimiser leurs processus et économiser du temps et des ressources.\n" +
			"\n" +
			"Pour plus d'informations, visitez leur site web : https://www.questinnov.com/",
	},
	{
		title: "Stagiaire",
		subtitle: "Virtuapix",
		dateRange: "Mars 2022 - Août 2022",
		duration: "6 mois",
		description: "Développeur Full Stack (React, Node.js, SQL)",
		image: "https://storage.akuma.network/api/public/dl/0XYLc1zs/Portfolio/image/virtuapix.jpg", // Ajoutez l'URL de votre image ici
		popup:
			"La société VIRTUAPIX, fondée en début 2019, se spécialise dans la numérisation 3D par photogrammétrie et lasergrammétrie, ainsi que dans la valorisation et la diffusion de la donnée 3D. Ses services incluent :\n" +
			"\n" +
			"- Relevés terrestres et aériens\n" +
			"- Traitement des images et photomaillages 3D\n" +
			"- Traitement des nuages de points laser\n" +
			"- Génération d’orthophotographies et d’orthofacades\n" +
			"- Mise à jour de modèles 3D\n" +
			"- Diffusion de données en ligne avec outils d’aide à la décision\n" +
			"\n" +
			"Située au centre technologique d’innovation du Grand Dax, Virtuapix bénéficie d’un réseau high-tech et utilise des équipements de pointe. Sa solution SaaS permet de diffuser des données 3D simplement via un lien web.\n" +
			"\n" +
			"L’équipe est composée de :\n" +
			"\n" +
			"- Jean-Philippe JUEN, gérant, photographe aérien et technicien en image/donnée laser, avec une expertise en prise de vue et postproduction.\n" +
			"- Romain Ferré, photogrammètre, ancien NOSA de l’armée de l’air, spécialisé en géo-mathématique et traitement de données 3D, capable de produire divers livrables comme des photomaillages 3D, MNT, MNS, et orthophotographies.\n" +
			"\n" +
			"Virtuapix s’assure de la qualité et de l’efficacité de ses matériels informatiques et serveurs, garantissant la stabilité et la sécurité des projets.",
	},
	{
		title: "ESIEA",
		subtitle: "Expert en Ingénierie du Logiciel",
		dateRange: "2019 - 2024",
		duration: "",
		description: "",
		image: "https://storage.akuma.network/api/public/dl/E3ac8fKn/Portfolio/image/esiea.png", // Ajoutez l'URL de votre image ici
		popup:
			"L'ESIEA est une école d'ingénieurs spécialisée en sciences et technologies du numérique, offrant des diplômes d'ingénieur, des bachelors, et des mastères dans des domaines comme la cybersécurité, l'intelligence artificielle, et les systèmes embarqués. Elle est accréditée par la Commission des Titres d'Ingénieurs (CTI) et dispose de campus à Paris, Laval, Agen et Dax. L'ESIEA propose également des programmes d'alternance et des formations continues, en mettant l'accent sur l'application pratique des connaissances et la préparation aux besoins des entreprises. \n" +
			"\n" +
			"Pour plus d'informations, vous pouvez visiter leur site : https://www.esiea.fr/",
	},
	{
		title: "Lycée Professionnel Ambroise Croizat",
		subtitle: "Baccalauréat professionnel SEN (Systems Électroniques et Numériques)",
		dateRange: "2015 - 2018",
		duration: "",
		description: "",
		image: "https://storage.akuma.network/api/public/dl/rlFgcWAQ/Portfolio/image/lycee.png", // Ajoutez l'URL de votre image ici
		popup:
			"J'ai obtenue mon BAC PRO SEN (Systèmes Électroniques et Numériques) en 2018. au lycée professionnel Ambroise Croizat à Tarnos. \n" +
			"C'est à ce moment là où j'ai vraiment découvert le développent informatique.",
	},
	// Ajoutez autant d'objets que nécessaire pour votre timeline
];

const CustomTimeLine = () => {
	const [openPopup, setOpenPopup] = useState(null);
	const handleOpenPopup = (title) => {
		setOpenPopup(title); // Ouvre la popup pour l'item cliqué
	};

	const handleClosePopup = () => {
		setOpenPopup(null); // Ferme la popup
	};
	return (
		<>
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={openPopup !== null}
				onClick={handleClosePopup}
			/>
			<Timeline position="alternate">
				{timelineData.map((item, index) => (
					<TimelineItem key={index}>
						<TimelineSeparator>
							<TimelineDot sx={{ background: "none", margin: 0, padding: 0 }}>
								<Avatar alt={item.title} src={item.image} sx={{ width: 60, height: 60, padding: 0 }} />
								{/* Ajoutez cette ligne pour afficher l'image */}
							</TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<Typography variant="h6" component="span">
								{item.title}
							</Typography>
							<Typography>{item.subtitle}</Typography>
							<Typography>{item.dateRange}</Typography>
							<Typography>{item.duration}</Typography>
							<Typography>{item.description}</Typography>
							<Button variant={"outlined"} onClick={() => handleOpenPopup(item.title)}>
								Voir plus
							</Button>
						</TimelineContent>
						<Popover
							open={openPopup === item.title}
							onClose={handleClosePopup}
							anchorOrigin={{
								vertical: "center",
								horizontal: "center",
							}}
							transformOrigin={{
								vertical: "center",
								horizontal: "center",
							}}
							sx={{
								".MuiPopover-paper": {
									width: "50%",
									padding: "20px", // Inner padding
									boxShadow: "100% rgba(0, 0, 0, 0.1)", // Custom shadow
									borderRadius: "10px", // Rounded corners
								},
							}}
						>
							{/* Contenu de la popup ici */}
							<Typography variant={"h6"}>{item.popup}</Typography>
						</Popover>
					</TimelineItem>
				))}
			</Timeline>
		</>
	);
};

export default CustomTimeLine;
