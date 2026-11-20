import { createFileRoute } from "@tanstack/react-router";
import { ProtectedAdminPanel } from "@/components/jewelry-app";

export const Route = createFileRoute("/admin/collections")({
  head: () => ({ meta: [
    { title: "Collections | Dhairya Demo Admin" },
    { name: "description", content: "Manage the collections in the local Dhairya Gems and Jewels demonstration admin." },
    { property: "og:title", content: "Collections | Dhairya Demo Admin" },
    { property: "og:description", content: "Manage the collections in the local Dhairya Gems and Jewels demonstration admin." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ProtectedAdminPanel module="collections" />,
});
