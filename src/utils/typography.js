import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import { colors } from "./colors"

Wordpress2016.overrideThemeStyles = ({ rhythm }, options) => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "h1, h2, h3": {
      fontFamily: "'Helvetica Neue', sans-serif",
    },
    p: {
      fontFamily: "'Georgia', serif",
      color: colors.gray80,
    },
    blockquote: {
      borderLeftColor: colors.primary,
    },
    "blockquote > :last-child": {
      fontFamily: "'Helvetica Neue', sans-serif",
      fontStyle: "normal",
      fontWeight: 700,
      color: colors.gray60,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
