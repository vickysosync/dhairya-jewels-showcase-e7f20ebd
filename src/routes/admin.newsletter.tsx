import { createFileRoute } from "@tanstack/react-router";
import { ProtectedAdminPanel } from "@/components/jewelry-app";

export const Route = createFileRoute("/admin/newsletter")({
  head: () => ({ meta: [
    { title: "Newsletter | Dhairya Demo Admin" },
    { name: "description", content: "Manage the newsletter in the local Dhairya Gems and Jewels demonstration admin." },
    { property: "og:title", content: "Newsletter | Dhairya Demo Admin" },
    { property: "og:description", content: "Manage the newsletter in the local Dhairya Gems and Jewels demonstration admin." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ProtectedAdminPanel module="newsletter" />,
});
