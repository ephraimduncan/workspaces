import React from "react";
import { Box, Text } from "degen";
import RecommendedUsersCard from "./RecommendedUsersCard";

export default function RecommendUsersBox() {
  return (
    <Box
      id="recommended-users"
      height="fit"
      width="1/3"
      borderRadius="3xLarge"
      position="sticky"
      top="10"
      padding="8"
      borderWidth="0.75"
      borderColor="accentSecondary"
    >
      <Text variant="extraLarge" color="textSecondary" marginY="4">
        Recommended Users
      </Text>

      <RecommendedUsersCard imageSrc="/vercel.svg" name="Vercel" username="@vercel" />
      <RecommendedUsersCard name="Ephraim Atta-Duncan" username="@duncan" />
      <RecommendedUsersCard name="Sam" username="sam" />
      <RecommendedUsersCard name="Kelvin Amoaba" username="kelvin" />
    </Box>
  );
}
