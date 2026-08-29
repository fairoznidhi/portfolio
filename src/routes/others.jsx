import { createFileRoute } from "@tanstack/react-router";
import Others from "../pages/Others";

export const Route = createFileRoute("/others")({
  component: Others,
});
