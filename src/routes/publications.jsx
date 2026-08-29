import { createFileRoute } from "@tanstack/react-router";
import Publications from "../pages/Publications";

export const Route = createFileRoute("/publications")({
  component: Publications,
});
