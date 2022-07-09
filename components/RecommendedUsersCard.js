import { Box, Card, Stack, Avatar, Tag, Text } from "degen";

export default function RecommendedUsersCard({ imageSrc, name, username }) {
  return (
    <Box marginY="4" cursor="pointer">
      <Card hover padding="2" borderRadius="large">
        <Stack direction={"horizontal"}>
          <Avatar
            placeholder={imageSrc ? false : true}
            src={imageSrc}
            shape="square"
            label="Profile"
          />
          <Stack space="1">
            <Text weight="semiBold" align="left" color="textSecondary" variant="small">
              {name}
            </Text>
            <Tag hover tone="accent" variant="label">
              {username}
            </Tag>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}
