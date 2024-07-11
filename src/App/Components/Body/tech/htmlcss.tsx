import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { CopyBlock } from "react-code-blocks";

function TextHtmlCss() {
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
					Expérience en HTML/CSS
				</Typography>
				<Typography variant="body1" paragraph>
					HTML est le langage de balisage utilisé pour créer le contenu d'une page web, tandis que CSS est
					utilisé pour définir la présentation visuelle de ce contenu. Ensemble, HTML et CSS sont les
					fondations de la conception web moderne.
				</Typography>
				<Typography variant="body1" paragraph>
					Maîtriser les subtilités de la technologie HTML/CSS est devenu un élément incontournable dans mon
					parcours professionnel. Cette compétence a été un pilier fondamental dans la satisfaction des
					exigences de développement front-end pour diverses applications web, garantissant ainsi une
					présentation à la fois esthétique et fonctionnelle.
				</Typography>
				<Typography variant="body1" paragraph>
					Lors de mon cursus scolaire, j'ai eu l'opportunité passionnante de concevoir l'interface utilisateur
					d'une application web en utilisant HTML/CSS. Cette mission exigeait le respect scrupuleux des
					standards de l'industrie tout en assurant une expérience utilisateur optimale. Notre objectif était
					clair : créer une interface intuitive et attrayante pour maximiser l'engagement des utilisateurs.
					Grâce à ma maîtrise de HTML/CSS, j'ai pu réaliser des mises en page flexibles et réactives, en
					utilisant des techniques avancées telles que les grilles CSS et les médias queries pour garantir une
					compatibilité multiplateforme. Le résultat ? Une interface esthétique et fonctionnelle qui a
					grandement contribué à une expérience utilisateur positive et fluide.
				</Typography>
				<img
					src={
						"https://storage.akuma.network/api/public/dl/eR2OE2D8/Portfolio/image/projet/cinetech/img_1.png"
					}
					alt="Photomaillage"
					style={{ width: "45%", borderRadius: "10px", marginBottom: "20px" }}
				/>
				<Box display={"flex"} sx={{ justifyContent: "center", width: "100%", marginBottom: "25px" }}>
					<CopyBlock
						startingLineNumber={1}
						customStyle={{
							width: "45%",
							height: "500px",
							overflowX: "auto",
							backgroundColor: "#f3f3f3",
							marginRight: "15px",
						}}
						showLineNumbers
						language={"html"}
						text={
							' <div class="user_options-forms" id="user_options-forms">\n' +
							'        <div class="user_forms-login">\n' +
							'          <h2 class="forms_title">Connexion</h2>\n' +
							'          <form class="forms_form" [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n' +
							'            <fieldset class="forms_fieldset">\n' +
							'              <div class="forms_field">\n' +
							'                <input id="email" type="email" formControlName="email" class="forms_field-input" placeholder="Email"\n' +
							"                  autofocus />\n" +
							"              </div>\n" +
							'              <div class="forms_field">\n' +
							'                <input id="mdp" type="password" formControlName="mdp" class="forms_field-input" placeholder="Mot de passe"\n' +
							"                  required />\n" +
							"              </div>\n" +
							"              </fieldset>\n" +
							'            <div class="forms_buttons">\n' +
							'              <input type="submit" value="Se connecter" class="forms_buttons-action">\n' +
							"            </div>\n" +
							"          </form>\n" +
							"        </div>\n" +
							"      </div>"
						}
					/>
					<CopyBlock
						startingLineNumber={1}
						customStyle={{
							width: "45%",
							height: "500px",
							overflowX: "auto",
							backgroundColor: "#f3f3f3",
							marginLeft: "15px",
						}}
						showLineNumbers
						language={"css"}
						text={
							"/**\n" +
							" * * General variables dusqgdqjhgdqsjgd\n" +
							" * */\n" +
							"/**\n" +
							" * * General configs\n" +
							" * */\n" +
							" * {\n" +
							"    box-sizing: border-box;\n" +
							"  }\n" +
							".h2{\n" +
							"  color: white;\n" +
							"  }\n" +
							"  \n" +
							"  body {\n" +
							'    font-family: "Montserrat", sans-serif;\n' +
							"    font-size: 12px;\n" +
							"    line-height: 1em;\n" +
							"  }\n" +
							"  \n" +
							"  button {\n" +
							"    background-color: transparent;\n" +
							"    padding: 0;\n" +
							"    border: 0;\n" +
							"    outline: 0;\n" +
							"    cursor: pointer;\n" +
							"  }\n" +
							"  \n" +
							"  input {\n" +
							"    background-color: transparent;\n" +
							"    padding: 0;\n" +
							"    border: 0;\n" +
							"    outline: 0;\n" +
							"  }\n" +
							"  input[type=submit] {\n" +
							"    cursor: pointer;\n" +
							"  }\n" +
							"  input::-moz-placeholder {\n" +
							"    font-size: 0.85rem;\n" +
							'    font-family: "Montserrat", sans-serif;\n' +
							"    font-weight: 300;\n" +
							"    letter-spacing: 0.1rem;\n" +
							"    color: black;\n" +
							"  }\n" +
							"  input:-ms-input-placeholder {\n" +
							"    font-size: 1rem;\n" +
							'    font-family: "Montserrat", sans-serif;\n' +
							"    font-weight: 300;\n" +
							"    letter-spacing: 0.1rem;\n" +
							"    color: black;\n" +
							"  }\n" +
							"  input::placeholder {\n" +
							"    font-size: 1rem;\n" +
							'    font-family: "Montserrat", sans-serif;\n' +
							"    font-weight: 300;\n" +
							"    letter-spacing: 0.1rem;\n" +
							"    color: black;\n" +
							"  }\n" +
							"  \n" +
							"  /**\n" +
							"   * * Bounce to the left side\n" +
							"   * */\n" +
							"  @-webkit-keyframes bounceLeft {\n" +
							"    0% {\n" +
							"      transform: translate3d(100%, -50%, 0);\n" +
							"    }\n" +
							"    50% {\n" +
							"      transform: translate3d(-30px, -50%, 0);\n" +
							"    }\n" +
							"    100% {\n" +
							"      transform: translate3d(0, -50%, 0);\n" +
							"    }\n" +
							"  }\n" +
							"  @keyframes bounceLeft {\n" +
							"    0% {\n" +
							"      transform: translate3d(100%, -50%, 0);\n" +
							"    }\n" +
							"    50% {\n" +
							"      transform: translate3d(-30px, -50%, 0);\n" +
							"    }\n" +
							"    100% {\n" +
							"      transform: translate3d(0, -50%, 0);\n" +
							"    }\n" +
							"  }\n" +
							"  /**\n" +
							"   * * Bounce to the left side\n" +
							"   * */\n" +
							"  @-webkit-keyframes bounceRight {\n" +
							"    0% {\n" +
							"      transform: translate3d(0, -50%, 0);\n" +
							"    }\n" +
							"    50% {\n" +
							"      transform: translate3d(calc(100% + 30px), -50%, 0);\n" +
							"    }\n" +
							"    100% {\n" +
							"      transform: translate3d(100%, -50%, 0);\n" +
							"    }\n" +
							"  }\n" +
							"  @keyframes bounceRight {\n" +
							"    0% {\n" +
							"      transform: translate3d(0, -50%, 0);\n" +
							"    }\n" +
							"    50% {\n" +
							"      transform: translate3d(calc(100% + 30px), -50%, 0);\n" +
							"    }\n" +
							"    100% {\n" +
							"      transform: translate3d(100%, -50%, 0);\n" +
							"    }\n" +
							"  }\n" +
							"  /**\n" +
							"   * * Show Sign Up form\n" +
							"   * */\n" +
							"  @-webkit-keyframes showSignUp {\n" +
							"    100% {\n" +
							"      opacity: 1;\n" +
							"      visibility: visible;\n" +
							"      transform: translate3d(0, 0, 0);\n" +
							"    }\n" +
							"  }\n" +
							"  @keyframes showSignUp {\n" +
							"    100% {\n" +
							"      opacity: 1;\n" +
							"      visibility: visible;\n" +
							"      transform: translate3d(0, 0, 0);\n" +
							"    }\n" +
							"  }\n" +
							"  /**\n" +
							"   * * Page background\n" +
							"   * */\n" +
							"\n" +
							"   #retour{\n" +
							"    \n" +
							"   position: relative;\n" +
							"    width: 30%;\n" +
							"    height: 9%;\n" +
							"   bottom: auto;\n" +
							"\n" +
							"}\n" +
							"   \n" +
							"  .user {\n" +
							"    display: flex;\n" +
							"    justify-content: center;\n" +
							"    align-items: center;\n" +
							"    width: 100%;\n" +
							"    height: 100vh;\n" +
							"    background-image: url(../../../../assets/images/background/font_flou.jpg);\n" +
							"    background-size: cover;\n" +
							"  }\n" +
							"  .user_options-container {\n" +
							"    position: relative;\n" +
							"    width: 80%;\n" +
							"  }\n" +
							"  .user_options-text {\n" +
							"    display: flex;\n" +
							"    justify-content: space-between;\n" +
							"    width: 100%;\n" +
							"    background-color: rgba(34, 34, 34, 0.85);\n" +
							"    border-radius: 3px;\n" +
							"  }\n" +
							"  \n" +
							"  /**\n" +
							"   * * Registered and Unregistered user box and text\n" +
							"   * */\n" +
							"  .user_options-registered,\n" +
							"  .user_options-unregistered {\n" +
							"    width: 50%;\n" +
							"    padding: 75px 45px;\n" +
							"    color: #fff;\n" +
							"    font-weight: 300;\n" +
							"  }\n" +
							"  \n" +
							"  .user_registered-title,\n" +
							"  .user_unregistered-title {\n" +
							"    margin-bottom: 15px;\n" +
							"    font-size: 1.66rem;\n" +
							"    line-height: 1em;\n" +
							"    color: blanchedalmond;\n" +
							"  }\n" +
							"  \n" +
							"  .user_unregistered-text,\n" +
							"  .user_registered-text {\n" +
							"    font-size: 0.83rem;\n" +
							"    line-height: 1.4em;\n" +
							"  }\n" +
							"  \n" +
							"  .user_registered-login,\n" +
							"  .user_unregistered-signup {\n" +
							"    margin-top: 30px;\n" +
							"    border: 1px solid #ccc;\n" +
							"    border-radius: 3px;\n" +
							"    padding: 10px 30px;\n" +
							"    color: #fff;\n" +
							"    text-transform: uppercase;\n" +
							"    line-height: 1em;\n" +
							"    letter-spacing: 0.2rem;\n" +
							"    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n" +
							"  }\n" +
							" \n" +
							"  /**\n" +
							"   * * Login and signup forms\n" +
							"   * */\n" +
							"  .user_options-forms {\n" +
							"    position: absolute;\n" +
							"    top: 50%;\n" +
							"    left: 30px;\n" +
							"    width: calc(50% - 30px);\n" +
							"    min-height: 420px;\n" +
							"    background-color: #fff;\n" +
							"    border-radius: 3px;\n" +
							"    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.25);\n" +
							"    overflow: hidden;\n" +
							"    transform: translate3d(100%, -50%, 0);\n" +
							"    transition: transform 0.4s ease-in-out;\n" +
							"  }\n" +
							"  .user_options-forms .user_forms-login {\n" +
							"    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;\n" +
							"  }\n" +
							"  .user_options-forms .forms_title {\n" +
							"    margin-bottom: 45px;\n" +
							"    font-size: 1.5rem;\n" +
							"    font-weight: 500;\n" +
							"    line-height: 1em;\n" +
							"    text-transform: uppercase;\n" +
							"    color: #e8716d;\n" +
							"    letter-spacing: 0.1rem;\n" +
							"  }\n" +
							"  .user_options-forms .forms_field:not(:last-of-type) {\n" +
							"    margin-bottom: 20px;\n" +
							"  }\n" +
							"  .user_options-forms .forms_field-input {\n" +
							"    width: 100%;\n" +
							"    border-bottom: 1px solid #ccc;\n" +
							"    padding: 6px 20px 6px 6px;\n" +
							'    font-family: "Montserrat", sans-serif;\n' +
							"    font-size: 1rem;\n" +
							"    font-weight: 300;\n" +
							"    color: gray;\n" +
							"    letter-spacing: 0.1rem;\n" +
							"    transition: border-color 0.2s ease-in-out;\n" +
							"  }\n" +
							"  .user_options-forms .forms_field-input:focus {\n" +
							"    border-color: gray;\n" +
							"  }\n" +
							"  .user_options-forms .forms_buttons {\n" +
							"    display: flex;\n" +
							"    justify-content: space-between;\n" +
							"    align-items: center;\n" +
							"    margin-top: 35px;\n" +
							"    \n" +
							"  }\n" +
							"  .user_options-forms .forms_buttons-forgot {\n" +
							'    font-family: "Montserrat", sans-serif;\n' +
							"    letter-spacing: 0.1rem;\n" +
							"    color: bla;\n" +
							"    text-decoration: underline;\n" +
							"    transition: color 0.2s ease-in-out;\n" +
							"  }\n" +
							"  .user_options-forms .forms_buttons-forgot:hover {\n" +
							"    color: #b3b3b3;\n" +
							"  }\n" +
							"  .user_options-forms .forms_buttons-action {\n" +
							"    background-color: #e8716d;\n" +
							"    border-radius: 3px;\n" +
							"    padding: 10px 35px;\n" +
							"    font-size: 1rem;\n" +
							'    font-family: "Montserrat", sans-serif;\n' +
							"    font-weight: 300;\n" +
							"    color: #fff;\n" +
							"    text-transform: uppercase;\n" +
							"    \n" +
							"    transition: background-color 0.2s ease-in-out;\n" +
							"  }\n" +
							"  .user_options-forms .forms_buttons-action:hover {\n" +
							"    background-color: #e14641;\n" +
							"  }\n" +
							"  .user_options-forms .user_forms-signup,\n" +
							"  .user_options-forms .user_forms-login {\n" +
							"    position: absolute;\n" +
							"    top: 70px;\n" +
							"    left: 40px;\n" +
							"    width: calc(100% - 80px);\n" +
							"    opacity: 0;\n" +
							"    visibility: hidden;\n" +
							"    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out, transform 0.5s ease-in-out;\n" +
							"  }\n" +
							"  .user_options-forms .user_forms-signup {\n" +
							"    transform: translate3d(120px, 0, 0);\n" +
							"  }\n" +
							"  .user_options-forms .user_forms-signup .forms_buttons {\n" +
							"    justify-content: flex-end;\n" +
							"  }\n" +
							"  .user_options-forms .user_forms-login {\n" +
							"    transform: translate3d(0, 0, 0);\n" +
							"    opacity: 1;\n" +
							"    visibility: visible;\n" +
							"  }\n" +
							"  \n" +
							"  /**\n" +
							"   * * Triggers\n" +
							"   * */\n" +
							"  .user_options-forms.bounceLeft {\n" +
							"    -webkit-animation: bounceLeft 1s forwards;\n" +
							"            animation: bounceLeft 1s forwards;\n" +
							"  }\n" +
							"  .user_options-forms.bounceLeft .user_forms-signup {\n" +
							"    -webkit-animation: showSignUp 1s forwards;\n" +
							"            animation: showSignUp 1s forwards;\n" +
							"  }\n" +
							"  .user_options-forms.bounceLeft .user_forms-login {\n" +
							"    opacity: 0;\n" +
							"    visibility: hidden;\n" +
							"    transform: translate3d(-120px, 0, 0);\n" +
							"  }\n" +
							"  .user_options-forms.bounceRight {\n" +
							"    -webkit-animation: bounceRight 1s forwards;\n" +
							"            animation: bounceRight 1s forwards;\n" +
							"  }\n" +
							"  \n" +
							"  /**\n" +
							"   * * Responsive 990px\n" +
							"   * */\n" +
							"  @media screen and (max-width: 990px) {\n" +
							"    .user_options-forms {\n" +
							"      min-height: 350px;\n" +
							"    }\n" +
							"    .user_options-forms .forms_buttons {\n" +
							"      flex-direction: column;\n" +
							"    }\n" +
							"    .user_options-forms .user_forms-login .forms_buttons-action {\n" +
							"      margin-top: 30px;\n" +
							"    }\n" +
							"    .user_options-forms .user_forms-signup,\n" +
							"  .user_options-forms .user_forms-login {\n" +
							"      top: 40px;\n" +
							"    }\n" +
							"  \n" +
							"    .user_options-registered,\n" +
							"  .user_options-unregistered {\n" +
							"      padding: 50px 45px;\n" +
							"    }\n" +
							"  }"
						}
					/>
				</Box>
				<Typography variant="body1" paragraph>
					Mon niveau de maîtrise dans ces technologies est confirmé, mais je reste constamment à l'affût des
					nouvelles techniques et tendances en matière de design web. Je m'efforce continuellement de
					perfectionner mes compétences en responsive design afin d'offrir une expérience utilisateur encore
					plus immersive.
				</Typography>
				<Typography variant="body1" paragraph>
					Dans mon rôle actuel, cette compétence revêt une importance cruciale. Elle me permet de jouer un
					rôle actif dans le développement front-end des projets et de garantir la qualité visuelle et
					ergonomique des produits finaux.
				</Typography>
				<Typography variant="body1" paragraph>
					Ayant travaillé avec HTML/CSS pendant plusieurs années, j'ai acquis une expertise significative dans
					ces technologies. Je suis capable de travailler de manière autonome sur des projets, tout en restant
					ouvert à l'apprentissage de nouvelles méthodes et outils pour optimiser mon flux de travail et
					rester compétitif sur le marché.
				</Typography>
				<Typography variant="body1" paragraph>
					Mon objectif à long terme est d'approfondir mes connaissances en design web et d'explorer d'autres
					domaines connexes tels que l'UX/UI design. Pour ce faire, je prévois de suivre des cours avancés en
					design web et en développement front-end afin de continuer à améliorer mes compétences et de rester
					à la pointe de l'industrie.
				</Typography>
				<Typography variant="body1" paragraph>
					En résumé, ma compétence en Technologie HTML/CSS a été un élément central de mon parcours
					professionnel, me permettant de contribuer de manière significative au développement front-end des
					projets tout en me maintenant à jour avec les dernières tendances et techniques de design web.
				</Typography>
			</Paper>
			{/*Ma compétence en Technologie HTML/CSS Maîtriser les subtilités de la technologie HTML/CSS est devenu un
				élément incontournable dans mon parcours professionnel. Cette compétence a été un pilier fondamental
				dans la satisfaction des exigences de développement front-end pour diverses applications web,
				garantissant ainsi une présentation à la fois esthétique et fonctionnelle. Lors de mon cursus scolaire,
				j'ai eu l'opportunité passionnante de concevoir l'interface utilisateur d'une application web en
				utilisant HTML/CSS. Cette mission exigeait le respect scrupuleux des standards de l'industrie tout en
				assurant une expérience utilisateur optimale. Notre objectif était clair : créer une interface intuitive
				et attrayante pour maximiser l'engagement des utilisateurs. Grâce à ma maîtrise de HTML/CSS, j'ai pu
				réaliser des mises en page flexibles et réactives, en utilisant des techniques avancées telles que les
				grilles CSS et les médias queries pour garantir une compatibilité multiplateforme. Le résultat ? Une
				interface esthétique et fonctionnelle qui a grandement contribué à une expérience utilisateur positive
				et fluide. Mon niveau de maîtrise dans ces technologies est confirmé, mais je reste constamment à
				l'affût des nouvelles techniques et tendances en matière de design web. Je m'efforce continuellement de
				perfectionner mes compétences en responsive design afin d'offrir une expérience utilisateur encore plus
				immersive. Dans mon rôle actuel, cette compétence revêt une importance cruciale. Elle me permet de jouer
				un rôle actif dans le développement front-end des projets et de garantir la qualité visuelle et
				ergonomique des produits finaux. Ayant travaillé avec HTML/CSS pendant plusieurs années, j'ai acquis une
				expertise significative dans ces technologies. Je suis capable de travailler de manière autonome sur des
				projets, tout en restant ouvert à l'apprentissage de nouvelles méthodes et outils pour optimiser mon
				flux de travail et rester compétitif sur le marché. Mon objectif à long terme est d'approfondir mes
				connaissances en design web et d'explorer d'autres domaines connexes tels que l'UX/UI design. Pour ce
				faire, je prévois de suivre des cours avancés en design web et en développement front-end afin de
				continuer à améliorer mes compétences et de rester à la pointe de l'industrie. En résumé, ma compétence
				en Technologie HTML/CSS a été un élément central de mon parcours professionnel, me permettant de
				contribuer de manière significative au développement front-end des projets tout en me maintenant à jour
				avec les dernières tendances et techniques de design web.*/}
		</Box>
	);
}

export default TextHtmlCss;
