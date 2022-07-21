import { Box, Stack, Stat, Avatar } from "degen";
import Image from "next/image";
import { Heart, Bookmark, Send } from "react-feather";

export default function WorkspaceCard({
  authorProfileImageSrc,
  imageSrc,
  dateCreated,
  authorName,
}) {
  return (
    <Box
      width="144"
      height="auto"
      marginY="8"
      padding="6"
      borderColor="accentSecondary"
      borderWidth="0.5"
      borderRadius="2xLarge"
    >
      <Box marginBottom="4">
        <Stack direction={"horizontal"}>
          <Avatar
            placeholder={authorProfileImageSrc ? false : true}
            src={authorProfileImageSrc}
            shape="square"
            label="Profile"
          />
          <Stat meta={dateCreated} size="small" value={authorName} />
        </Stack>
      </Box>
      <Box>
        <Image
          src={imageSrc}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
          alt={authorName + " Workspace"}
        />
      </Box>
      <Box marginTop="4">
        <Stack direction="horizontal">
          <Heart color="#007AFF" />
          <Bookmark color="#007AFF" />
          <Send color="#007AFF" />
        </Stack>
      </Box>
    </Box>
  );
}
