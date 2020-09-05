import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrlqClient";
import { Layout } from "../components/Layout";
import { Link, Stack, Box, Heading, Text, Flex, Button } from "@chakra-ui/core";
import NextLink from "next/link";
import { usePostsQuery } from "../generated/graphql";
const Index = () => {
  const [{ data, fetching }] = usePostsQuery({
    variables: {
      limit: 10,
    },
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
          {data!.posts.map((el) => (
            // <div key={el.id}>el.text</div>
            <Box key={el.id} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{el.title}</Heading>
              <Text mt={4}>{el.textSnippet}</Text>
            </Box>
          ))}
        </Stack>
      )}
      {data ? (
        <Flex>
          <Button isLoading={fetching} m="auto" my={10}>
            Load more
          </Button>
        </Flex>
      ) : null}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
