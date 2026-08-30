import { createFileRoute } from "@tanstack/react-router";
import BlogList from "../features/blog";

export const Route = createFileRoute("/blog/")({
  component: BlogList,
});
