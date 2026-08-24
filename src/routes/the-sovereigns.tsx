import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/the-sovereigns")({
  component: () => <Navigate to="/sovereigns" replace />,
});
