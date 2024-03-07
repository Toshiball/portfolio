import { Grid } from "@mui/material";
import Header from "./Header.tsx";
import React from "react";
import fs from "fs";

type BodyProps = {
	value: string;
};
function Body(props: BodyProps) {
	const [text, setText] = React.useState("");

	React.useEffect(() => {
		switch (props.value) {
			case "react":
				setText(
					"Ma maîtrise de la technologie React a été un atout précieux dans mon parcours professionnel, notamment lors de la refonte de l’interface de gestion du suivi des récoltes pour une grande entreprise agro-alimentaire. En effet, cette compétence s'est révélée essentielle pour répondre aux besoins de développement d'applications web modernes, en offrant des solutions innovantes et efficaces.\n" +
						"\n" +
						"Lors de mon alternance, j'ai eu l'opportunité passionnante de travailler sur la refonte de l'interface graphique de la partie logistique de notre solution. Face au besoin croissant de modernisation de l'interface pour améliorer l'expérience client, j'ai pu démontrer l'étendue de ma maîtrise de React.\n" +
						"\n" +
						"Grâce à mes compétences, j'ai pu rapidement développer des composants réutilisables et optimiser les performances de l’interface. Des éléments tels que des formulaires et des boutons prédéfinis, conçus pour être utilisés à plusieurs endroits de l’application, ont permis de simplifier le processus de développement tout en améliorant l'expérience utilisateur. Cette approche a également eu un impact significatif sur les performances, réduisant le temps de chargement de l’interface de moitié, passant de 3 secondes à moins d’une seconde.\n" +
						"\n" +
						"Je me considère comme autonome dans l'utilisation de React, mais je suis toujours en quête d'optimisations supplémentaires. Je reste constamment à l'affût des dernières fonctionnalités de React pour garantir une expérience utilisateur toujours meilleure. Cette compétence est cruciale pour mon rôle actuel en tant qu'Expert en Ingénierie, car elle est au cœur de la plupart de nos projets web.\n" +
						"\n" +
						"Mon expérience avec React m'a permis d'acquérir rapidement une autonomie, ce qui a été reconnu par mes pairs. Avec le recul, je conseille vivement de rester à jour avec les nouvelles versions et les meilleures pratiques de React. La communauté est dynamique et active, et cela vaut la peine de rester connecté pour tirer le meilleur parti de cette technologie en constante évolution.\n" +
						"\n" +
						"À long terme, mon objectif est de devenir un référent en React au sein de mon entreprise. Pour atteindre cet objectif, je prévois de suivre des cours avancés sur React et de me familiariser avec les bibliothèques et les outils connexes pour renforcer encore ma compétence.\n" +
						"\n" +
						"Mon expérience en tant qu'alternant et stagiaire m'a permis de mettre en pratique mes compétences en React dans un environnement professionnel stimulant, et je suis enthousiaste à l'idée de continuer à développer cette expertise dans mes projets futurs.\n"
				);
				break;
			case "java":
				setText(
					"Ayant évolué dans divers contextes professionnels et académiques, ma maîtrise de la technologie Java s'est avérée être un atout inestimable. Cette compétence s'est révélée essentielle pour répondre aux exigences de développement d'API tant pour des applications mobiles que web, notamment dans le cadre de projets académiques et de groupe.\n" +
						"\n" +
						"Lors de mon parcours scolaire, l'une de mes missions les plus mémorables a été de développer une API permettant d'effectuer des requêtes sur une base de données, dans le but de fournir une couverture exhaustive des fonctionnalités pour une application web spécifique. Ma capacité à concevoir des routes efficaces et à optimiser la manipulation des données, notamment lors de l'enregistrement de formulaires, a permis d'atteindre des performances remarquables. En effet, le temps d'appel de l'API a été réduit à moins d'une seconde, ce qui a grandement amélioré l'expérience utilisateur.\n" +
						"\n" +
						"Ma maîtrise autonome de Java, acquise au fil de six mois d'expérience pratique, m'a permis de mener à bien ces projets avec efficacité. Je suis constamment à la recherche d'opportunités d'optimisation, en explorant les dernières fonctionnalités de Java pour garantir une qualité toujours plus élevée dans mes réalisations.\n" +
						"\n" +
						"Bien que cette compétence ne soit pas cruciale pour mon rôle actuel, je reste convaincu de son importance dans le domaine du développement logiciel. Mon conseil pour les aspirants développeurs est de rester à jour avec les nouvelles versions et les meilleures pratiques de Java, étant donné la dynamique active de sa communauté.\n" +
						"\n" +
						"À long terme, je ne vise pas nécessairement à devenir un expert Java, mais je reste ouvert à l'idée de me perfectionner dans ce domaine si les opportunités se présentent.\n" +
						"\n" +
						"Bien que je n'aie pas prévu de suivre des formations spécifiques sur Java dans un avenir proche, mes réalisations antérieures, notamment dans les projets CineTech et KinaCrew, attestent de ma capacité à utiliser cette technologie de manière efficace et créative.\n"
				);
				break;
			case "html_css":
				setText(
					"Ma compétence en Technologie HTML/CSS\n" +
						"\n" +
						"Maîtriser les subtilités de la technologie HTML/CSS est devenu un élément incontournable dans mon parcours professionnel. Cette compétence a été un pilier fondamental dans la satisfaction des exigences de développement front-end pour diverses applications web, garantissant ainsi une présentation à la fois esthétique et fonctionnelle.\n" +
						"\n" +
						"Lors de mon cursus scolaire, j'ai eu l'opportunité passionnante de concevoir l'interface utilisateur d'une application web en utilisant HTML/CSS. Cette mission exigeait le respect scrupuleux des standards de l'industrie tout en assurant une expérience utilisateur optimale. Notre objectif était clair : créer une interface intuitive et attrayante pour maximiser l'engagement des utilisateurs. Grâce à ma maîtrise de HTML/CSS, j'ai pu réaliser des mises en page flexibles et réactives, en utilisant des techniques avancées telles que les grilles CSS et les médias queries pour garantir une compatibilité multiplateforme. Le résultat ? Une interface esthétique et fonctionnelle qui a grandement contribué à une expérience utilisateur positive et fluide.\n" +
						"\n" +
						"Mon niveau de maîtrise dans ces technologies est confirmé, mais je reste constamment à l'affût des nouvelles techniques et tendances en matière de design web. Je m'efforce continuellement de perfectionner mes compétences en responsive design afin d'offrir une expérience utilisateur encore plus immersive.\n" +
						"\n" +
						"Dans mon rôle actuel, cette compétence revêt une importance cruciale. Elle me permet de jouer un rôle actif dans le développement front-end des projets et de garantir la qualité visuelle et ergonomique des produits finaux.\n" +
						"\n" +
						"Ayant travaillé avec HTML/CSS pendant plusieurs années, j'ai acquis une expertise significative dans ces technologies. Je suis capable de travailler de manière autonome sur des projets, tout en restant ouvert à l'apprentissage de nouvelles méthodes et outils pour optimiser mon flux de travail et rester compétitif sur le marché.\n" +
						"\n" +
						"Mon objectif à long terme est d'approfondir mes connaissances en design web et d'explorer d'autres domaines connexes tels que l'UX/UI design. Pour ce faire, je prévois de suivre des cours avancés en design web et en développement front-end afin de continuer à améliorer mes compétences et de rester à la pointe de l'industrie.\n" +
						"\n" +
						"En résumé, ma compétence en Technologie HTML/CSS a été un élément central de mon parcours professionnel, me permettant de contribuer de manière significative au développement front-end des projets tout en me maintenant à jour avec les dernières tendances et techniques de design web."
				);
				break;
		}
	}, [props.value]);

	return (
		<Grid
			container
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
			}}
		>
			<Grid
				item
				sx={{
					height: "100%",
					background: "lightblue",
				}}
			>
				<Header value={props.value} />
			</Grid>
			<Grid item>
				<div>{text}</div>
			</Grid>
		</Grid>
	);
}

export default Body;
