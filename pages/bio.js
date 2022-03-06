import { useState } from "react";

import Navigation from "../components/Navigation";
import Stack from "../components/Stack";

import useFetch from "../hooks/useFetch";
import LoadingIndicator from "../components/LoadingIndicator";

import styled from "styled-components";
import Values from "../components/Values";
import Goals from "../components/Goals";

import ReactMarkdown from "react-markdown";

let URL = "http://localhost:1337";

export default function Bio() {
  const [isOpened, setIsOpened] = useState(true);
  const { loading, error, data } = useFetch(URL + "/api/bio-page?populate=*");

  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error :(</p>;

  return (
    <Styles>
      <div className="content">
        <div className="images">
          <img
            id="profile"
            src={URL + data.attributes.headImage.data.attributes.url}
            alt={data.attributes.headImage.data.attributes.hash}
          />
          <img
            id="certificate"
            src={URL + data.attributes.certificate.data.attributes.url}
            alt={data.attributes.certificate.data.attributes.hash}
          />
        </div>
        <div className="line"></div>
        <div className="paragraphs">
          <div className="head-paragraph">
            <ReactMarkdown>{data.attributes.mainParagraph}</ReactMarkdown>
          </div>

          <p className="secondary-paragraph">
            What helps me do my job is my interest in <span>UI/UX Design</span>{" "}
            and my skills in Frontend development using{" "}
            <span>React and Framer motion</span>.
          </p>
        </div>

        <h3 id="margin-top">My Stack</h3>
        <Stack />
        <h3 id="margin-top">My Values</h3>
        <Values />
        <h3 id="margin-top">My Goals</h3>
        <Goals />
      </div>
      <Navigation isOpened={isOpened} />
    </Styles>
  );
}

const Styles = styled.div`
  .images {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 173.47px;
    #profile {
      width: 218px;
    }
    #certificate {
      width: 50px;
      height: 85px;
      margin-bottom: -40px;
    }
  }
  .line {
    height: 1px;
    width: 100%;
    background-color: #b58b84;
  }
  .paragraphs {
    margin: 40px 0;
  }

  .secondary-paragraph {
    margin-top: 25px;
  }
  #margin-top {
    margin-top: 30px;
  }
`;
