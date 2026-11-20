import { createFileRoute } from "@tanstack/react-router";
import { JewelryApp } from "@/components/jewelry-app";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Dhairya Gems & Jewels" },
    { name: "description", content: "Contact Dhairya Gems and Jewels in Zaveri Bazaar, Mumbai." },
    { property: "og:title", content: "Contact Dhairya Gems & Jewels" },
    { property: "og:description", content: "Contact Dhairya Gems and Jewels in Zaveri Bazaar, Mumbai." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => JewelryApp({ page: "contact" }),
});
