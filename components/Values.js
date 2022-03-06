import useFetch from "../hooks/useFetch";
import LoadingIndicator from "./LoadingIndicator";

import styled from "styled-components";
import ReactMarkdown from "react-markdown";

let URL = "http://localhost:1337";

export default function Values() {
  const { loading, error, data } = useFetch(URL + "/api/values?populate=*");

  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error :(</p>;

  return (
    <Styles>
      {data.map((value) => (
        <div className="value" key={value.id}>
          <img
            src={URL + value.attributes.icon.data.attributes.url}
            alt={value.attributes.icon.data.attributes.hash}
          />
          <ReactMarkdown>{value.attributes.body}</ReactMarkdown>
        </div>
      ))}
    </Styles>
  );
}

const Styles = styled.div`
  margin-top: 30px;
  .value {
    margin-bottom: 25px;
    img {
      margin-bottom: 10px;
      width: 40px;
    }
  }
`;
