import useFetch from "../hooks/useFetch";
import LoadingIndicator from "./LoadingIndicator";

import styled from "styled-components";
import ReactMarkdown from "react-markdown";

let URL = "http://localhost:1337";

export default function Goals() {
  const { loading, error, data } = useFetch(URL + "/api/goals?populate=*");

  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error :(</p>;

  return (
    <Styles>
      {data.map((goal) => (
        <div className="goal" key={goal.id}>
          <img
            src={URL + goal.attributes.image.data.attributes.url}
            alt={goal.attributes.image.data.attributes.hash}
          />
          <ReactMarkdown>{goal.attributes.body}</ReactMarkdown>
        </div>
      ))}
    </Styles>
  );
}

const Styles = styled.div`
  margin-top: 30px;
  .goal {
    margin-bottom: 25px;
    img {
      margin-bottom: 10px;
      width: 40px;
    }
  }
`;
