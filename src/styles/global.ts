import { createGlobalStyle } from 'styled-components'
import CaecilliaLtStd45Light from '../assets/fonts/caecilia-lt-std-45-light.otf'
import CaecilliaLtStd46LightItalic from '../assets/fonts/caecilia-lt-std-46-light-italic.otf'
import CaecilliaLtStd75Bold from '../assets/fonts/caecilia-lt-std-75-bold.otf'
import CaecilliaLtStd76BoldItalic from '../assets/fonts/caecilia-lt-std-76-bold-italic.otf'
import OpenSansRegular from '../assets/fonts/OpenSans-Regular.ttf'
import OpenSansBold from '../assets/fonts/OpenSans-Bold.ttf'
import OpenSansBoldItalic from '../assets/fonts/OpenSans-BoldItalic.ttf'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family:  'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  button {
    cursor: pointer;
  }

  @font-face {
    font-family: 'Caecillia LT';
    src: url(${CaecilliaLtStd45Light}) format('opentype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Caecillia LT';
    src: url(${CaecilliaLtStd46LightItalic}) format('opentype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Caecillia LT';
    src: url(${CaecilliaLtStd75Bold}) format('opentype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Caecillia LT';
    src: url(${CaecilliaLtStd76BoldItalic}) format('opentype');
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansRegular}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansBoldItalic}) format('truetype');
    font-weight: 700;
    font-style: italic;
  }
`
