import { createTheme } from '@material-ui/core/styles' 
import { pink } from '@material-ui/core/colors'
const theme = createTheme({ 
typography: {
useNextVariants: true, 
},
palette: {
primary: {
light: '#2cd15d', 
main: '#1aab45', 
dark: '#0e8c33', 
contrastText: '#fff',
},
secondary: {
light: '#ff79b0', 
main: '#ff4081', 
dark: '#c60055', 
contrastText: '#000',
},
openTitle: '#8a134b', 
protectedTitle: pink['400'], 
type: 'light'
} 
})
export default theme