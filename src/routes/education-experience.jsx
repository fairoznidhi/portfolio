import { createFileRoute } from "@tanstack/react-router";
import EducationExperience from "../pages/EducationExperience";

export const Route = createFileRoute("/education-experience")({
  component: EducationExperience,
});
