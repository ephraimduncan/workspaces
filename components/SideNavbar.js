import React from "react";
import {
  Box,
  Stack,
  Text,
  IconGrid,
  IconPlus,
  IconPencil,
  IconCollection,
  Card,
  Avatar,
  IconCog,
  IconArrowRight,
  Button,
} from "degen";
import NavButtons from "./NavButtons";

export default function SideNavbar() {
  return (
    <Box
      width="1/4"
      height="viewHeight"
      padding={"10"}
      position="sticky"
      top="0"
      borderRightWidth={"0.5"}
      borderColor="accentSecondary"
    >
      <Stack align={"center"}>
        <Box marginY={{ md: "10", xl: "16" }} alignSelf="center">
          <Text font="mono" weight={"bold"} size={"extraLarge"}>
            workspaces
          </Text>
        </Box>
        <Box>
          <NavButtons prefix={<IconGrid />} text="Dashboard" />
          <NavButtons prefix={<IconPlus />} text="New" />
          <NavButtons prefix={<IconPencil />} text="Drafts" />
          <NavButtons prefix={<IconCollection />} text="Bookmarks" />
        </Box>
        <Box marginTop={{ md: "12", xl: "20" }}>
          <Box marginY="2" cursor="pointer">
            <Card hover padding="2" borderRadius="large">
              <Stack direction={"horizontal"} justify="space-between" align="center">
                <Avatar placeholder shape="square" label="Profile" />
                <Text weight="bold" align="left" color="textSecondary" variant="small">
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
  );
}
