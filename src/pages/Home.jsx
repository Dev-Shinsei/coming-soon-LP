import { Wrapper, Container, Background } from "./styles";
import { Button } from "../components/Button";

export function Home() {
  return (
    <Wrapper>
      <Container>
        <h1>Estamos em reforma</h1>
        <p>Em breve a UnoCred terá um novo visual!</p>

        <h2>Conheça alguns dos nossos serviços por enquanto!</h2>
        <Button title="Produtos" />
        <Button title="Quem Somos" />
        <Button title="Contato" />
      </Container>

      <Background />
    </Wrapper>
  );
}
