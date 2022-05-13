import { Container } from "./styles";
import { IButton } from "./types";

export function Button({ label, ...rest }: IButton) {
  return (
    <Container>
      <button type="button" {...rest}>
        {label}
      </button>
    </Container>
  );
}
