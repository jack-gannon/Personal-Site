import Typography from "typography";
import { colors } from "./colors";

// Wordpress2016.overrideThemeStyles = ({ rhythm }, options) => {
//   return {
//     "a.gatsby-resp-image-link": {
//       boxShadow: `none`,
//     },
//     "h1, h2, h3": {
//       fontFamily: "'Helvetica Neue', sans-serif",
//     },
//     p: {
//       fontFamily: "'Georgia', serif",
//       color: colors.gray80,
//     },
//     blockquote: {
//       borderLeftColor: colors.primary,
//     },
//     "blockquote > :last-child": {
//       position: "relative",
//       fontFamily: "'Helvetica Neue', sans-serif",
//       fontStyle: "normal",
//       fontSize: "1.125rem",
//       paddingTop: "1rem",
//       fontWeight: 700,
//       color: colors.gray60,
//     },
//     "blockquote > :last-child:before": {
//       content: "'“'",
//       position: "absolute",
//       color: colors.primary,
//       top: "0rem",
//       fontSize: "2rem",
//       fontFamily: "'Georgia', serif",
//       opacity: 0.3,
//     },
//   }
// }

// delete Wordpress2016.googleFonts

// const typography = new Typography(Wordpress2016)
const typography = new Typography({
  title: "jackgannon.io",
  baseFontSize: "16px",
  baseLineHeight: 2,
  scaleRatio: 2,
  googleFonts: [{ name: "IBM Plex Mono", styles: ["300", "400", "600"] }],
  headerFontFamily: [
    "Helvetica Neue",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  headerColor: colors.gray80,
  bodyFontFamily: ["Georgia", "serif"],
  bodyColor: colors.gray80,
  overrideStyles: ({ rhythm }, options, styles) => ({
    blockquote: {
      borderLeft: `4px solid ${colors.primary}`,
      marginLeft: "-1rem",
      paddingLeft: "calc(1rem - 4px)",
      fontFamily:
        "'Helvetica Neue', 'Helvetica', 'Roboto', 'Arial', sans-serif",
      fontWeight: 600,
      color: colors.gray70,
    },
    a: {
      textDecoration: "underline",
    },
    "main a": {
      color: colors.tertiaryDarker,
    },
  }),
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
