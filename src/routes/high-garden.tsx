import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/high-garden")({
  component: () => <Navigate to="/hacienda" replace />,
});
