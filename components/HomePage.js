import ImageSlideshow from "./ImageSlideshow";
import LoadingIndicator from "./LoadingIndicator";

import styled from "styled-components";

import useFetch from "../hooks/useFetch";

let URL = "http://localhost:1337";

export default function HomePage() {
  const { loading, error, data } = useFetch(URL + "/api/home-page?populate=*");

  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error :(</p>;

  return (
    <Styles>
      <img
        className="head-image"
        src={URL + data.attributes.headImage.data.attributes.url}
        alt={data.attributes.headImage.data.attributes.hash}
      />
      <h1>
        {data.attributes.welcome} <div>{data.attributes.name}</div>
      </h1>
      <ImageSlideshow />
    </Styles>
  );
}

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  h1 {
    font-family: "Mukta", sans-serif;
    font-size: 45px;
    font-weight: normal;
    div {
      font-size: 52px;
      font-weight: 700;
      margin-left: 60px;
    }
  }
  .head-image {
    margin: 0px 0 60px 0;
    max-width: 107px;
  }
`;
