import { createFileRoute } from "@tanstack/react-router";
import { ProtectedAdminPanel } from "@/components/jewelry-app";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [
    { title: "Settings | Dhairya Demo Admin" },
    { name: "description", content: "Manage the settings in the local Dhairya Gems and Jewels demonstration admin." },
    { property: "og:title", content: "Settings | Dhairya Demo Admin" },
    { property: "og:description", content: "Manage the settings in the local Dhairya Gems and Jewels demonstration admin." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ProtectedAdminPanel module="settings" />,
});
