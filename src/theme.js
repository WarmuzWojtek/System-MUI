import {createMuiTheme} from '@material-ui/core/styles'
import {blue} from '@material-ui/core/colors'

export const theme = createMuiTheme({
palette:{
  primary:{
    main:blue[500],
  }
},
typography: {
  mainTitle: {
    textAlign:'left',
    fontFamily:'monospace',
  },
}
})