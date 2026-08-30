import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "../features/blog";

export const Route = createFileRoute("/blog/$id")({
  component: BlogPost,
});
