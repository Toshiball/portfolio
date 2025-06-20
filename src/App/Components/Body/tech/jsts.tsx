import { Box, Paper, Typography } from "@mui/material";

function TextJSTS() {
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
					Expérience en JS/TS
				</Typography>
				<Typography variant="body1" paragraph>
					TypeScript est un langage de programmation open-source développé par Microsoft, qui étend JavaScript
					en lui ajoutant des fonctionnalités de typage statique. TypeScript permet aux développeurs de
					détecter et de corriger les erreurs de manière plus précoce dans le processus de développement, ce
					qui améliore la qualité du code JavaScript.
				</Typography>
				<Typography variant="body1" paragraph>
					En tant que professionnel dans le domaine de la technologie, ma compétence en JavaScript et
					TypeScript a joué un rôle crucial dans mon parcours. Maîtriser ces langages m'a permis de répondre
					efficacement aux exigences du développement full stack, en particulier lors de la création d'une
					application web complexe pendant mon stage.
				</Typography>
				<Typography variant="body1" paragraph>
					L'une de mes missions les plus marquantes fut la conception d'une application web en React,
					nécessitant une utilisation judicieuse de JavaScript et TypeScript, ainsi que l'intégration d'une
					bibliothèque WebGL pour une expérience immersive. Mon objectif était de créer une plateforme
					permettant de visualiser des objets 3D sur une carte, de manipuler des plans cadastraux, d'effectuer
					de la photogrammétrie, et d'interagir avec ces éléments en temps réel, offrant ainsi une expérience
					utilisateur fluide et intuitive.
				</Typography>
				<img
					src={"https://storage.akuma.network/api/public/dl/3NdW8f_J/Portfolio/image/compt/js_ts_1.png"}
					alt="clipping"
					style={{ width: "55%", borderRadius: "10px", marginBottom: "20px", marginLeft: "15px" }}
				/>
				<Typography variant="body1" paragraph>
					Grâce à mon expertise, j'ai pu livrer une application simple, rapide et optimisée, répondant à
					toutes les spécifications requises. Cette réalisation a démontré ma capacité à concevoir des
					solutions techniques robustes et fonctionnelles, tout en garantissant une expérience utilisateur
					positive.
				</Typography>
				<Typography variant="body1" paragraph>
					Mon niveau d'autonomie dans l'utilisation de JavaScript et TypeScript m'a permis de progresser
					rapidement dans ce projet et dans d'autres projets similaires. Cependant, je reste constamment à
					l'affût des dernières tendances et bonnes pratiques, cherchant à améliorer continuellement mes
					compétences et à garantir des solutions de qualité.
				</Typography>
				<Typography variant="body1" paragraph>
					Cette compétence occupe une place centrale dans mon rôle actuel, car elle me permet de contribuer
					activement au développement full stack des projets et d'assurer la qualité et la simplicité de nos
					outils. Mon expérience m'a également appris l'importance de rester informé sur les évolutions
					technologiques afin de rester compétitif sur le marché.
				</Typography>
				<Typography variant="body1" paragraph>
					À long terme, bien que je n'aie pas prévu de suivre des formations supplémentaires sur JavaScript et
					TypeScript, je reste engagé à me tenir informé des avancées technologiques et à maintenir mes
					compétences à jour.
				</Typography>
				<Typography variant="body1" paragraph>
					En résumé, ma compétence en JavaScript et TypeScript a été un pilier de mon développement
					professionnel, et je reste déterminé à poursuivre mon apprentissage et à relever de nouveaux défis
					dans ce domaine.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextJSTS;
