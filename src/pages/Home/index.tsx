import { toast } from "react-toastify";

import { Button } from "../../components/Button";
import { Container } from "./styles";

export function Home() {
  function showToast() {
    toast.info("Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <Container>
      <h1>Aperte o botão</h1>
      <Button label="Click me" onClick={showToast}></Button>
    </Container>
  );
}
