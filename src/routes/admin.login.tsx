import { createFileRoute } from "@tanstack/react-router";
import { ProtectedAdminPanel } from "@/components/jewelry-app";

export const Route = createFileRoute("/admin/login")({
  head: () => ({ meta: [
    { title: "Demo Admin Login | Dhairya Gems & Jewels" },
    { name: "description", content: "Sign in to the local demonstration admin for Dhairya Gems & Jewels." },
    { property: "og:title", content: "Demo Admin Login | Dhairya Gems & Jewels" },
    { property: "og:description", content: "Sign in to the local demonstration admin for Dhairya Gems & Jewels." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ProtectedAdminPanel module="login" />,
});
