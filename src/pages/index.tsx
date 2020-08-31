import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { NavBar } from "../components/Navbar";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrlqClient";
const Index = () => (
  <Container>
    <DarkModeSwitch />
    <NavBar />
  </Container>
);

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
