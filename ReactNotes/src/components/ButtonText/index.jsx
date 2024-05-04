import { Container } from './style.js'

export function ButtonText({ title, isActive, ...rest }) {
  return (
    <Container
      type="button" 
     $isactive = {isActive}
      {...rest}
    >
      {title}
    </Container>
  )
}