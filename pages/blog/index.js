import styled from "styled-components";
import useFetch from "../../hooks/useFetch";
import Link from "next/link";

import Navigation from "../../components/Navigation";

import { useState } from "react";
import LoadingIndicator from "../../components/LoadingIndicator";

export default function Blog() {
  const [isOpened, setIsOpened] = useState(true);

  const { loading, error, data } = useFetch(
    "https://trakiyski-portfolio-backend.herokuapp.com/api/posts?populate=*"
  );

  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error :(</p>;

  return (
    <Styles>
      <div className="posts">
        {data.map((post) => (
          <Link key={post.id} href={`/blog/${post.attributes.slug}`}>
            <a>
              <div className="post">
                <h1>{post.attributes.title}</h1>
                <div className="visits">{post.attributes.visits}</div>
                <img
                  src={
                    `https://trakiyski-portfolio-backend.herokuapp.com` +
                    post.attributes.banner.data.attributes.url
                  }
                  alt={post.attributes.banner.data.attributes.name}
                />
              </div>
            </a>
          </Link>
        ))}
      </div>
      <Navigation isOpened={isOpened} />
    </Styles>
  );
}

const Styles = styled.div`
  .post {
    img {
      width: 360px;
    }
  }
`;
