import { Box, Button, Text, IconGrid } from "degen";

export default function NavButtons({ prefix, text }) {
  return (
    <Box marginY="3">
      <Button prefix={prefix} variant="transparent" size="large">
        <Text size="large" color="accent">
          {text}
        </Text>
      </Button>
    </Box>
  );
}
