import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Typography, Avatar } from "@mui/material";

const timelineData = [
	{
		title: "Alternant",
		subtitle: "QUEST INNOV",
		dateRange: "Septembre 2022 - Aujourd'hui",
		duration: "2 ans",
		description: "Développeur Full Stack (React, Node.js, PostgreSQL)",
		image: "./src/assets/image/QuestInnovIcon.png", // Ajoutez l'URL de votre image ici
	},
	{
		title: "Stagiaire",
		subtitle: "Virtuapix",
		dateRange: "Mars 2022 - Août 2022",
		duration: "6 mois",
		description: "Développeur Full Stack (React, Node.js, SQL)",
		image: "./src/assets/image/virtuapix.jpg", // Ajoutez l'URL de votre image ici
	},
	{
		title: "ESIEA",
		subtitle: "Expert en Ingénierie du Logiciel",
		dateRange: "2019 - 2024",
		duration: "",
		description: "",
		image: "./src/assets/image/esiea.png", // Ajoutez l'URL de votre image ici
	},
	{
		title: "Lycée Professionnel Ambroise Croizat",
		subtitle: "Baccalauréat professionnel SEN (Systems Électroniques et Numériques)",
		dateRange: "2015 - 2018",
		duration: "",
		description: "",
		image: "./src/assets/image/lycee.png", // Ajoutez l'URL de votre image ici
	},
	// Ajoutez autant d'objets que nécessaire pour votre timeline
];

const CustomTimeLine = () => {
	return (
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
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
};

export default CustomTimeLine;
