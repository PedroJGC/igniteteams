import { Header } from '@/app/components/Header'
import { Highlight } from '@/app/components/Highlight'
import { Container } from './styles'

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
    </Container>
  )
}
