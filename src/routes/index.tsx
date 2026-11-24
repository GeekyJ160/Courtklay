import { createFileRoute } from "@tanstack/react-router";
import { Screen } from "@/components/creed/app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Screen />;
}
