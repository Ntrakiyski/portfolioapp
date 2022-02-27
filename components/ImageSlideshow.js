import Image from "next/image";
import styled from "styled-components";

import { useState, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";

import useFetch from "../hooks/useFetch";

import { motion } from "framer-motion";
import { imageSLideshow } from "./Animations";

export default function ImageSlideshow() {
  const [count, setCount] = useState(0);

  const { loading, error, data } = useFetch(
    "https://trakiyski-portfolio-backend.herokuapp.com/api/home-page?populate=*"
  );

  useEffect(() => {
    const intervalID = setTimeout(() => {
      setCount((toggle) => (toggle < 2 ? toggle + 1 : 0));
    }, 3000);

    return () => clearInterval(intervalID);
  }, [count]);

  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error :(</p>;

  return (
    <Styles
      variants={imageSLideshow}
      initial="hidden"
      animate="enter"
      className="imagesSlideshow"
    >
      <div className="div">
        <img
          src={
            `https://trakiyski-portfolio-backend.herokuapp.com` +
            data.attributes.banners.data[count].attributes.url
          }
          alt={data.attributes.banners.data[count].attributes.hash}
        />
      </div>
    </Styles>
  );
}

const Styles = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  right: 130px;

  img {
    max-width: 225px;
  }
`;
