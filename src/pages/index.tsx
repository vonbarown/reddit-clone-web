import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrlqClient";
import { Layout } from "../components/Layout";
import {
  Link,
  Stack,
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Icon,
  IconButton,
} from "@chakra-ui/core";
import NextLink from "next/link";
import { usePostsQuery } from "../generated/graphql";
import { useState } from "react";
const Index = () => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as null | string,
  });
  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  if (!fetching && !data) {
    return <div>Yo don't have any post!</div>;
  }

  return (
    <Layout>
      <DarkModeSwitch />

      <Flex align="center">
        <Heading>Voneddit</Heading>
        <NextLink href="/create-post">
          <Link ml="auto">create post</Link>
        </NextLink>
      </Flex>
      <br />
      <br />
      {fetching && !data ? (
        <div>loading....</div>
      ) : (
        <Stack spacing={8}>
          {data!.posts.posts.map((el) => (
            // <div key={el.id}>el.text</div>
            <Flex key={el.id} p={5} shadow="md" borderWidth="1px">
              <Box>
                <Heading fontSize="xl">{el.title}</Heading>
                <Text>posted by: {el.creator.username}</Text>
                <Text mt={4}>{el.textSnippet}</Text>
              </Box>
            </Flex>
          ))}
        </Stack>
      )}
      {data && data.posts.hasMore ? (
        <Flex>
          <Button
            onClick={() =>
              setVariables({
                limit: variables.limit,
                cursor: data.posts.posts[data.posts.posts.length - 1].createdAt,
              })
            }
            isLoading={fetching}
            m="auto"
            my={10}
          >
            Load more
          </Button>
        </Flex>
      ) : null}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
