import { createFileRoute } from "@tanstack/react-router";
import Experience from "../pages/Experience";

export const Route = createFileRoute("/education-experience")({
  component: Experience,
});
