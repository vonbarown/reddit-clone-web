import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrlqClient";
import { Layout } from "../components/Layout";
import { Link } from "@chakra-ui/core";
import NextLink from "next/link";
const Index = () => (
  <Layout>
    <NextLink href="/create-post">
      <Link>create post</Link>
    </NextLink>

    <DarkModeSwitch />
  </Layout>
);

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
