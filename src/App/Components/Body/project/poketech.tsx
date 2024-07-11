import { Box, Paper, Typography } from "@mui/material";

function TextPoketech() {
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
					Projet Poketech : Tournoi de Pokémon Caritatif
				</Typography>
				<Typography variant="body1" paragraph>
					Au sein de notre formation à l'ESIEA, trois autres camarades et moi-même avons organisé un événement
					visant à collecter des fonds pour l'Association pour la Recherche sur la Sclérose Latérale
					Amyotrophique (ARSLA). Notre initiative s'est articulée autour de plusieurs objectifs clés : trouver
					des sponsors pour soutenir financièrement notre projet, communiquer efficacement autour de
					l'événement, rassembler des participants pour notre cause, et collecter des fonds pour soutenir
					ARSLA.
				</Typography>
				<img
					src={
						"https://storage.akuma.network/api/public/dl/k4RoXP2o/Portfolio/image/projet/poketech/img_1.png"
					}
					alt="Photomaillage"
					style={{ width: "45%", borderRadius: "10px", marginBottom: "20px", marginRight: "15px" }}
				/>
				<Typography variant="body1" paragraph>
					Mon rôle principal dans ce projet était la gestion du budget. J'étais responsable de maintenir notre
					feuille de budget à jour, en enregistrant toutes les données financières. Cela incluait les entrées
					d'argent, telles que les cotisations des membres, ainsi que les sorties d'argent, comme les dons à
					l'association. Cette tâche demandait une attention constante aux détails pour garantir une gestion
					financière précise et transparente. En collaboration avec mes camarades, nous avons élaboré un
					budget prévisionnel détaillé, estimant les dépenses et les recettes attendues, ce qui nous a permis
					de planifier nos finances de manière proactive et d'assurer la viabilité financière de notre projet.
				</Typography>
				<Typography variant="body1" paragraph>
					En plus de la gestion financière, j'ai activement participé à l'animation du tournoi. Pour faciliter
					la communication avec les participants, j'ai créé un serveur Discord, une plateforme de discussion,
					où j'ai posté les règles du tournoi, des informations importantes et répondu aux questions des
					participants. Cette plateforme a permis de maintenir une interaction fluide et de répondre
					rapidement aux besoins des participants, assurant ainsi le bon déroulement de l'événement.
				</Typography>
				<img
					src={
						"https://storage.akuma.network/api/public/dl/QAmXK4H7/Portfolio/image/projet/poketech/img_2.png"
					}
					alt="Photomaillage"
					style={{ width: "45%", borderRadius: "10px", marginBottom: "20px", marginRight: "15px" }}
				/>
				<Typography variant="body1" paragraph>
					Concernant la promotion de l'événement, j'ai élaboré des visuels en utilisant des outils tels que
					Photoshop et Canva. Ma première grande contribution a été la création du logo du tournoi, qui est
					devenu l'élément visuel central utilisé sur tous nos supports de communication. J'ai également conçu
					une affiche percutante que nous avons distribuée aux influenceurs et incluse dans nos dossiers de
					sponsoring. Pour ces tâches, j'ai utilisé des outils familiers tels que Photoshop et Canva, ce qui
					m'a permis de donner vie à nos idées de manière efficace.
				</Typography>
				<Typography variant="body1" paragraph>
					Nous avons rencontré des défis lors de la communication avec les influenceurs. Initialement, j'ai
					été déstabilisé par le manque de réponses, surtout étant donné la noble cause que nous défendions.
					Cependant, j'ai rapidement réalisé que les influenceurs étaient probablement submergés par les
					demandes et ne pouvaient pas toutes les traiter. Cette prise de conscience m'a encouragé à ajuster
					notre approche et à trouver des moyens plus créatifs et ciblés pour attirer leur attention. Je me
					suis alors dirigé vers la promotion de notre événement sur des forums spécialisés, où nous avons pu
					atteindre un public plus ciblé et engagé.
				</Typography>
				<img
					src={
						"https://storage.akuma.network/api/public/dl/SrCFNlOX/Portfolio/image/projet/poketech/img_3.png"
					}
					alt="Photomaillage"
					style={{ width: "45%", borderRadius: "10px", marginBottom: "20px", marginRight: "15px" }}
				/>
				<Typography variant="body1" paragraph>
					Malgré notre engagement et nos démarches, notre événement n'a pas atteint les objectifs escomptés
					avec seulement 120€ récoltés. Cependant, avec cet argent, nous avons pu soutenir concrètement
					l'ARSLA. Par exemple, avec 30€, nous permettons à un malade SLA de bénéficier des conseils d'une
					nutritionniste. Avec 75€, nous finançons une heure de permanence d'infirmière pour une aide à
					domicile. Et avec 100€, nous permettons de financer une journée de travail d’un chercheur pour un
					projet de recherche fondamentale.
				</Typography>
				<Typography variant="body1" paragraph>
					Plusieurs facteurs peuvent expliquer ce résultat mitigé. Tout d'abord, notre approche dans la
					recherche de sponsors peut être remise en question. Je pense que nous aurions dû diversifier nos
					canaux de recherche en contactant des entreprises "plus locales", à l'instar de contacter des grands
					groupes et éventuellement des associations de malades que l'on aurait pu associer au projet. De
					même, notre stratégie de communication aurait pu être plus ciblée et créative. La réponse négative
					des influenceurs souligne peut-être un manque de pertinence dans notre approche ou une
					méconnaissance des attentes de notre public cible.
				</Typography>
				<Typography variant="body1" paragraph>
					En conclusion, cet événement a été une expérience précieuse qui m'a permis d'apprendre beaucoup sur
					la planification, la mise en œuvre et la promotion de projets caritatifs. Bien que nous n'ayons pas
					atteint nos objectifs financiers, je suis fier de notre engagement et de nos efforts pour soutenir
					l'ARSLA. Les défis rencontrés, qu'il s'agisse de la recherche de sponsors ou de la communication
					avec les influenceurs, m'ont donné une perspective plus profonde sur les aspects pratiques de
					l'organisation d'un événement de collecte de fonds et la difficulté à mobiliser des donateurs. Je
					suis convaincu que les leçons tirées de cette expérience seront précieuses pour mes projets futurs.
					J'ai compris l'importance de diversifier nos approches et de mieux cibler nos communications pour
					obtenir un soutien financier plus robuste.
				</Typography>
			</Paper>
		</Box>
	);
}

export default TextPoketech;
