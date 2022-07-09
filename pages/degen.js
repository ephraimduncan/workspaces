import React from "react";
import { Box, Heading, Stack } from "degen";
import SideNavbar from "../components/SideNavbar";
import RecommendUsersBox from "../components/RecommendUsersBox";
import WorkspacesDashboard from "../components/WorkspacesDashboard";

export default function DegenTest({ children }) {
  return (
    <Stack direction="horizontal" space={"0"}>
      <SideNavbar />
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
            <WorkspacesDashboard>{children}</WorkspacesDashboard>
            <RecommendUsersBox />
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}
