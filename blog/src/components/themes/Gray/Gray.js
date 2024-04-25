import React from "react"
import mainHeaderImage from "./images/react.png"
import { Search } from "styled-icons/feather"

const images = {
  mainHeaderImage,
}

const icons = {
  Search: <Search />,
}

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    grays: [
      // from light to dark
      "hsl(208, 13%, 100%)",
      "hsl(208, 13%, 95%)",
      "hsl(208, 13%, 85%)",
      "hsl(208, 13%, 75%)",
      "hsl(208, 13%, 65%)",
      "hsl(208, 13%, 55%)",
      "hsl(208, 13%, 45%)",
      "hsl(208, 13%, 35%)",
      "hsl(208, 13%, 25%)",
      "hsl(208, 13%, 15%)",
      "hsl(208, 13%, 5%)",
    ],
  },
}

const variants = {
  iconButton: {
    primary: {
      color: theme.colors.grays[8],
    },
    contrast: {
      color: theme.colors.grays[0],
    },
  },
  header: {
    primary: {
      // You could also use color vars from the global styles, e.g., `var(--color-primary)`.
      backgroundColor: theme.colors.grays[8],
      color: theme.colors.grays[0],
    },
  },
}

export const Gray = { ...theme, variants, images, icons }