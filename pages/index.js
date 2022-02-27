import styled from "styled-components";
import HomePage from "../components/HomePage";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <Styles>
      <HomePage />
      <Navigation />
    </Styles>
  );
}

const Styles = styled.div``;
