import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { InputField } from "../components/InputField";
import { Box, Button } from "@chakra-ui/core";
import { useCreatePostMutation, useMeQuery } from "../generated/graphql";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrlqClient";
import { Layout } from "../components/Layout";
import { useIsAuth } from "../utils/useIsAuth";

const CreatePost: React.FC<{}> = () => {
  const router = useRouter();

  useIsAuth();

  const [, createPost] = useCreatePostMutation();
  return (
    <Layout>
      <Formik
        initialValues={{ title: "", text: "" }}
        onSubmit={async (values) => {
          console.log(values);
          const { error } = await createPost({ input: values });

          if (!error) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="title" label="Title" />
            <Box mt={4}>
              <InputField
                name="text"
                placeholder="text"
                label="Body"
                textarea
              />
            </Box>

            <Button
              type="submit"
              variantColor="teal"
              mt={5}
              isLoading={isSubmitting}
            >
              create post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(CreatePost);
