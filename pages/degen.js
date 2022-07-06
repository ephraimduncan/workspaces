import React from "react";
import { Button, IconLockClosed, Stack } from "degen";

export default function DegenTest() {
  return (
    <Stack align="center">
      <Button prefix={<IconLockClosed />} variant="secondary" width={{ xs: "full", md: "max" }}>
        Connect Wallet
      </Button>
    </Stack>
  );
}
