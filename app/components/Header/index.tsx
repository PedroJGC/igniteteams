import logoImg from '@/app/assets/logo.png'
import { BackIcon, Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <BackIcon />
      <Logo source={logoImg} />
    </Container>
  )
}
