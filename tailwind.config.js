/** @type {import('tailwindcss').Config} */
export default {
  //los ficheros donde se aplican los estilos, index.html y componentes jsx 
  //("./src/**/*.jsx"   => mismo nivel/src/todas las carpetas y ficheros/*.jsx)
  content: ["index.html", "./src/**/*.jsx"],//aca se agregan // ./index.html se quita el PtoSlash al desplegar la app
  theme: {
  extend: {},
  },
  plugins: [],
}