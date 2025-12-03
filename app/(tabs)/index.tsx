import { ThemeProvider } from 'styled-components'
import { Groups } from '../components/Groups'
import theme from '../theme'

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  )
}
