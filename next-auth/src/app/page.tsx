import { Title, Text, Anchor } from "@mantine/core";
import { Button } from "@mantine/core";
export default function HomePage() {
  return (
    <>
      <Title ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Mantine
        </Text>
      </Title>
      <Title ta="center" mt={100}>
        Welcome to <Text className="text-red-600">Mantine</Text>
      </Title>
      <Button className="bg-red-500">Hello World!</Button>
    </>
  );
}
