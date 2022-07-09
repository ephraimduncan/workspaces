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
  Tag,
  Stat,
} from "degen";
import Image from "next/image";
import { Heart, Bookmark, Send } from "react-feather";

export default function DegenTest({ children }) {
  return (
    <Stack direction="horizontal" space={"0"}>
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
            <Box marginY="3">
              <Button prefix={<IconGrid />} variant="transparent" size="large">
                <Text size="large" color="accent">
                  Dashboard
                </Text>
              </Button>
            </Box>

            <Box marginY="3">
              <Button prefix={<IconPlus />} variant="transparent" size="large">
                <Text size="base" color="accent">
                  New
                </Text>
              </Button>
            </Box>
            <Box marginY="3">
              <Button prefix={<IconPencil />} variant="transparent" size="large">
                <Text size="base" color="accent">
                  Drafts
                </Text>
              </Button>
            </Box>
            <Box marginY="3">
              <Button prefix={<IconCollection />} variant="transparent" size="large">
                <Text size="base" color="accent">
                  Bookmarks
                </Text>
              </Button>
            </Box>
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
      <Box width="full" padding="10">
        <Stack direction={"horizontal"} justify={"space-between"}>
          <Box width="full" marginBottom="8">
            <Heading level="1" color="textSecondary">
              Dashboard
            </Heading>
          </Box>
        </Stack>
        <Box>
          <Stack direction="horizontal" space="8">
            <Box id="workspaces" height="fit" width="3/4">
              {/* {children} */}
              <Box
                width="144"
                height="auto"
                marginY="8"
                padding="6"
                borderColor="accentSecondary"
                borderWidth="0.75"
                borderRadius="2xLarge"
              >
                <Box marginBottom="4">
                  <Stack direction={"horizontal"}>
                    <Avatar placeholder shape="square" label="Profile" />
                    <Stat meta="Time Ago" size="small" value="Ephraim Atta-Duncan" />
                  </Stack>
                </Box>
                <Box>
                  <Image
                    src="/image.jpg"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    alt="Image Alt"
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
              <Box
                width="144"
                height="auto"
                marginY="8"
                padding="6"
                borderColor="accentSecondary"
                borderWidth="0.75"
                borderRadius="2xLarge"
              >
                <Box marginBottom="4">
                  <Stack direction={"horizontal"}>
                    <Avatar placeholder shape="square" label="Profile" />
                    <Stat meta="Time Ago" size="small" value="Ephraim Atta-Duncan" />
                  </Stack>
                </Box>
                <Box>
                  <Image
                    src="/image.jpg"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    alt="Image Alt"
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
              <Box
                width="144"
                height="auto"
                marginY="8"
                padding="6"
                borderColor="accentSecondary"
                borderWidth="0.75"
                borderRadius="2xLarge"
              >
                <Box marginBottom="4">
                  <Stack direction={"horizontal"}>
                    <Avatar placeholder shape="square" label="Profile" />
                    <Stat meta="Time Ago" size="small" value="Ephraim Atta-Duncan" />
                  </Stack>
                </Box>
                <Box>
                  <Image
                    src="/image.jpg"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    alt="Image Alt"
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
              <Box
                width="144"
                height="auto"
                marginY="8"
                padding="6"
                borderColor="accentSecondary"
                borderWidth="0.75"
                borderRadius="2xLarge"
              >
                <Box marginBottom="4">
                  <Stack direction={"horizontal"}>
                    <Avatar placeholder shape="square" label="Profile" />
                    <Stat meta="Time Ago" size="small" value="Ephraim Atta-Duncan" />
                  </Stack>
                </Box>
                <Box>
                  <Image
                    src="/image.jpg"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    alt="Image Alt"
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
            </Box>
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
              <Box marginY="4" cursor="pointer">
                <Card hover padding="2" borderRadius="large">
                  <Stack direction={"horizontal"}>
                    <Avatar placeholder shape="square" label="Profile" />
                    <Stack space="1">
                      <Text weight="semiBold" align="left" color="textSecondary" variant="small">
                        Ephraim Atta-Duncan
                      </Text>
                      <Tag hover tone="accent" variant="label">
                        @username
                      </Tag>
                    </Stack>
                  </Stack>
                </Card>
              </Box>
              <Box marginY="4" cursor="pointer">
                <Card hover padding="2" borderRadius="large">
                  <Stack direction={"horizontal"}>
                    <Avatar placeholder shape="square" label="Profile" />
                    <Stack space="1">
                      <Text weight="semiBold" align="left" color="textSecondary" variant="small">
                        Ephraim Atta-Duncan
                      </Text>
                      <Tag hover tone="accent" variant="label">
                        @username
                      </Tag>
                    </Stack>
                  </Stack>
                </Card>
              </Box>
              <Box marginY="4" cursor="pointer">
                <Card hover padding="2" borderRadius="large">
                  <Stack direction={"horizontal"}>
                    <Avatar placeholder shape="square" label="Profile" />
                    <Stack space="1">
                      <Text weight="semiBold" align="left" color="textSecondary" variant="small">
                        Ephraim Atta-Duncan
                      </Text>
                      <Tag hover tone="accent" variant="label">
                        @username
                      </Tag>
                    </Stack>
                  </Stack>
                </Card>
              </Box>
              <Box marginY="4" cursor="pointer">
                <Card hover padding="2" borderRadius="large">
                  <Stack direction={"horizontal"}>
                    <Avatar placeholder shape="square" label="Profile" />
                    <Stack space="1">
                      <Text weight="semiBold" align="left" color="textSecondary" variant="small">
                        Ephraim Atta-Duncan
                      </Text>
                      <Tag hover tone="accent" variant="label">
                        @username
                      </Tag>
                    </Stack>
                  </Stack>
                </Card>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}
