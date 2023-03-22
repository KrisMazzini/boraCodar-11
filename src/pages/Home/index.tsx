import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Input
        label="E-mail"
        type="email"
        placeholder="Digite seu e-mail"
        required
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        required
      />
      <Button label="Entrar" />
    </Container>
  )
}
