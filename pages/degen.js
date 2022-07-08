import React from "react";
import {
  Box,
  Heading,
  Stack,
  Button,
  Avatar,
  Card,
  Text,
  IconCog,
  IconArrowRight,
  IconGrid,
  IconPencil,
  IconPlus,
  IconCollection,
} from "degen";

export default function DegenTest({ children }) {
  return (
    <Stack direction="horizontal" space={"0"}>
      <Box
        width="72"
        height="viewHeight"
        padding={"10"}
        position="sticky"
        top="0"
        borderRightWidth={"0.5"}
        borderColor="accentSecondary"
      >
        <Stack>
          <Box marginY={{ md: "10", xl: "16" }} alignSelf="center">
            <Text font="mono" weight={"bold"} size={"extraLarge"}>
              workspaces
            </Text>
          </Box>
          <Box>
            <Box marginY="3">
              <Button prefix={<IconGrid />} width="44" variant="secondary" size="medium">
                <Text size="base" color="accent">
                  Dashboard
                </Text>
              </Button>
            </Box>

            <Box marginY="3">
              <Button prefix={<IconPlus />} width="44" variant="secondary" size="medium">
                <Text size="base" color="accent">
                  New
                </Text>
              </Button>
            </Box>
            <Box marginY="3">
              <Button prefix={<IconPencil />} width="44" variant="secondary" size="medium">
                <Text size="base" color="accent">
                  Drafts
                </Text>
              </Button>
            </Box>
            <Box marginY="3">
              <Button prefix={<IconCollection />} width="44" variant="secondary" size="medium">
                <Text size="base" color="accent">
                  Bookmarks
                </Text>
              </Button>
            </Box>
          </Box>
          <Box marginTop={{ md: "16", xl: "24" }}>
            <Box marginY="2">
              <Card hover padding="2" borderRadius="large">
                <Stack direction={"horizontal"} justify="space-between">
                  <Avatar placeholder shape="square" label="Profile" />
                  <Text weight="semiBold" align="left" color="textSecondary" variant="small">
                    Ephraim Atta-Duncan
                  </Text>
                </Stack>
              </Card>
            </Box>

            <Stack direction="horizontal" justify="space-between">
              <Box margin="2">
                <Button shape="square" variant="secondary" size="small">
                  <IconCog />
                </Button>
              </Box>
              <Box margin="2">
                <Button shape="square" variant="secondary" size="small">
                  <IconArrowRight />
                </Button>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box
        width="full"
        padding="10"
        // height={"28"}
        // borderBottomWidth="0.5"
        // borderColor={"accentSecondary"}
      >
        <Stack direction={"horizontal"} justify={"space-between"}>
          <Box height="24">
            <Heading level="1" color="textSecondary">
              Dashboard
            </Heading>
          </Box>
        </Stack>
        <Box>{children}</Box>
      </Box>
    </Stack>
  );
}
