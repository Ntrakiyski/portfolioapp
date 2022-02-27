import { useRouter } from "next/router";
import useFetch from "../../hooks/useFetch";
import styled from "styled-components";

import Navigation from "../../components/Navigation";
import LoadingIndicator from "../../components/LoadingIndicator";

import { useState } from "react";

export default function PostPage() {
  const [isOpened, setIsOpened] = useState(true);
  const slug = useRouter().query.url;

  const { loading, error, data } = useFetch(
    `http://localhost:1337/api/posts?filters[slug][$eq]=${slug}&populate=*`
  );

  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error :(</p>;

  return (
    <Styles>
      <div className="content">
        {data.map((post) => (
          <div className="post" key={post.id}>
            <h1>{post.attributes.title}</h1>
            <img
              src={
                `http://localhost:1337` +
                post.attributes.banner.data.attributes.url
              }
              alt={post.attributes.banner.data.attributes.hash}
            />
            <p>{post.attributes.content}</p>
            <div className="visits">{post.attributes.visits}</div>
            <div className="published">{post.attributes.publishedAt}</div>
          </div>
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
