import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/star-atlas")({
  component: () => <Navigate to="/atlas" replace />,
});
