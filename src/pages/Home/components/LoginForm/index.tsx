import { Container } from './styles'

import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'

export function LoginForm() {
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
      <Button label="Entrar" type="submit" />
    </Container>
  )
}
