import useFetch from "../hooks/useFetch";
import LoadingIndicator from "./LoadingIndicator";

import styled from "styled-components";

let URL = "http://localhost:1337";

export default function Stack() {
  const { loading, error, data } = useFetch(URL + "/api/stacks?populate=*");

  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error :(</p>;

  return (
    <Styles>
      {data.map((stack) => (
        <div className="stack-category" key={stack.id}>
          <h5>{stack.attributes.title}</h5>
          {stack.attributes.logos.data.map((ket) => (
            <img
              key={ket.id}
              src={URL + ket.attributes.url}
              alt={ket.attributes.hash}
            />
          ))}
        </div>
      ))}
    </Styles>
  );
}

const Styles = styled.div`
  margin-top: 30px;
  .stack-category {
    margin-bottom: 20px;
  }
  img {
    width: 40px;
    margin-top: 5px;
    margin-right: 10px;
  }
  h5 {
    text-transform: uppercase;
  }
`;
