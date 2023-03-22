import { InputHTMLAttributes, useState } from 'react'
import { Eye, EyeSlash } from 'phosphor-react'

import { Container, InputWrapper, LabelWrapper } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, type, ...inputProps }: InputProps) {
  const [hidden, setHidden] = useState(true)

  const actualType = obtainInputActualType()
  const recoverPassword = <a href="#">Esqueceu a senha?</a>

  const Icon = hidden ? (
    <EyeSlash onClick={handleToggleHidden} />
  ) : (
    <Eye onClick={handleToggleHidden} />
  )

  function obtainInputActualType() {
    if (type !== 'password') {
      return type
    }

    return hidden ? 'password' : 'text'
  }

  function handleToggleHidden() {
    setHidden((prevValue) => !prevValue)
  }

  return (
    <Container>
      <LabelWrapper>
        <label htmlFor={type}>{label}</label>
        {type === 'password' ? recoverPassword : <></>}
      </LabelWrapper>
      <InputWrapper>
        <input type={actualType} {...inputProps} id={type} />
        {type === 'password' ? Icon : <></>}
      </InputWrapper>
    </Container>
  )
}
