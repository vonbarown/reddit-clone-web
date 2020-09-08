import React from "react";
import { Flex, IconButton } from "@chakra-ui/core";
import { PostSnippetFragment } from "../generated/graphql";

interface upvoteSectionProps {
  post: PostSnippetFragment;
}

export const UpvoteSection: React.FC<upvoteSectionProps> = ({ post }) => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" mr={5}>
      <IconButton icon="chevron-up" aria-label="upvote post" />
      {post.points}
      <IconButton icon="chevron-down" aria-label="downvote post" />
    </Flex>
  );
};
