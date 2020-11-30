import { NextPage } from 'next'
import * as Styled from './styles'
// import {} from './props'

const Main: NextPage = () => {
  return (
    <Styled.Container>
      <Styled.Logo
        src="assets/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <Styled.Title>Template</Styled.Title>
      <Styled.Description>
        TypeScript, ReactJS, NextJS e Styled Components
      </Styled.Description>
      <Styled.Illustration
        src="assets/img/illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </Styled.Container>
  )
}

export default Main
