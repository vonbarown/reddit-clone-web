import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrlqClient";
import { Layout } from "../components/Layout";
import { Link } from "@chakra-ui/core";
import NextLink from "next/link";
import { usePostsQuery } from "../generated/graphql";
const Index = () => {
  const [{ data }] = usePostsQuery({
    variables: {
      limit: 10,
    },
  });
  return (
    <Layout>
      <NextLink href="/create-post">
        <Link>create post</Link>
      </NextLink>
      <br />
      <br />
      {!data ? (
        <div>loading....</div>
      ) : (
        data.posts.map((el) => (
          <div key={el.id}>
            <br />
            <div>{el.text}</div>
          </div>
        ))
      )}

      <DarkModeSwitch />
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
