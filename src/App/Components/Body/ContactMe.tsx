// ContactMe.tsx
import React from "react";
import { Dialog, DialogTitle, DialogContent, Link, Button, IconButton, Box, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub"; // Importez l'icône GitHub

type ContactMeProps = {
	open: boolean;
	onClose: () => void;
};

const ContactMe: React.FC<ContactMeProps> = ({ open, onClose }) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>Contactez-moi</DialogTitle>
			<DialogContent>
				<Box display="flex" flexDirection="column" alignItems="center">
					<Stack direction="row" spacing={2}>
						<Button
							startIcon={<EmailIcon />}
							href="mailto:c4027.sarmento@gmail.com"
							target="_blank"
							rel="noopener"
							variant="outlined"
						>
							Envoyez-moi un e-mail
						</Button>
						<Button
							startIcon={<LinkedInIcon />}
							href="https://www.linkedin.com/in/christopher-sarmento/"
							target="_blank"
							rel="noopener"
							variant="outlined"
						>
							Visitez ma page LinkedIn
						</Button>
						<Button
							startIcon={<GitHubIcon />} // Utilisez l'icône GitHub
							href="https://github.com/Toshiball" // Remplacez par l'URL de votre profil GitHub
							target="_blank"
							rel="noopener"
							variant="outlined"
						>
							Visitez ma page GitHub
						</Button>
					</Stack>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default ContactMe;
