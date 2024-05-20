import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					fontFamily: "Yantramanav",
				},
			},
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
