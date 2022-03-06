import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import Link from "next/link";
import { useRouter } from "next/router";
import LoadingIndicator from "./LoadingIndicator";

import { variants, item } from "./Animations";

import { motion } from "framer-motion";

let URL = "http://localhost:1337";

export default function Navigation({ isOpened }) {
  const where = useRouter();
  const currentLocation = where.pathname;
  // console.log("i am at", where.pathname);

  const { loading, error, data } = useFetch(
    URL + "/api/navigations?populate=*"
  );

  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error :(</p>;

  return (
    <Styles>
      <motion.div
        className="navs flex-column"
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
      >
        {data
          .reduce(
            (p, c) => (
              "/" + c.attributes.slug !== currentLocation && p.push(c), p
            ),
            []
          )
          .map((nav) => (
            <Link key={nav.id} href={`/${nav.attributes.slug}`}>
              <motion.div
                variants={item}
                style={{
                  background: `${nav.attributes.background}`,
                }}
                className={
                  !isOpened ? "nav-tab flex" : "nav-tab flex additional"
                }
              >
                <img
                  src={URL + nav.attributes.image.data.attributes.url}
                  alt={nav.attributes.image.data.attributes.name}
                />

                <a>{nav.attributes.page}</a>
              </motion.div>
            </Link>
          ))}
      </motion.div>
    </Styles>
  );
}

const Styles = styled.div`
  .navs {
    position: fixed;
    bottom: 30px;
    right: 0px;
    .nav-tab {
      cursor: pointer;
      padding: 15px 35px 15px 10px;
      border-radius: 4px;
      color: white;
      max-width: inherit;
      margin-top: 10px;

      img {
        margin-right: 10px;
        width: 16px;
      }
    }
  }
  .additional {
    padding: 15px 5px 15px 15px !important;
    font-size: 0px;
    min-height: 22px;
  }
`;
