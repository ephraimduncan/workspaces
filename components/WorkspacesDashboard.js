import { Box } from "degen";
import React from "react";
import WorkspaceCard from "./WorkspaceCard";

export default function WorkspacesDashboard({ children }) {
  return (
    <Box id="workspaces" height="fit" width="3/4">
      {children}

      {/* TODO: Remove these sample */}
      <WorkspaceCard
        imageSrc="/image.jpg"
        authorName="Ephraim Atta-Duncan"
        dateCreated="13 Hours Ago"
      />
      <WorkspaceCard
        imageSrc="/avatar.jpeg"
        authorName="Ephraim Atta-Duncan"
        dateCreated="13 Hours Ago"
      />
      <WorkspaceCard
        imageSrc="/card.png"
        authorName="Ephraim Atta-Duncan"
        dateCreated="13 Hours Ago"
      />
      <WorkspaceCard
        imageSrc="/image.jpg"
        authorName="Ephraim Atta-Duncan"
        dateCreated="13 Hours Ago"
      />
      <WorkspaceCard
        imageSrc="/card.png"
        authorName="Ephraim Atta-Duncan"
        dateCreated="13 Hours Ago"
      />
    </Box>
  );
}
