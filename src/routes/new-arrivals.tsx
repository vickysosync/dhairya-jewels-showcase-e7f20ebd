import { createFileRoute } from "@tanstack/react-router";
import { JewelryApp } from "@/components/jewelry-app";

export const Route = createFileRoute("/new-arrivals")({
  head: () => ({ meta: [
    { title: "New Arrivals | Dhairya Gems & Jewels" },
    { name: "description", content: "Discover new expressions in the Dhairya fine jewellery collection." },
    { property: "og:title", content: "New Arrivals | Dhairya Gems & Jewels" },
    { property: "og:description", content: "Discover new expressions in the Dhairya fine jewellery collection." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => JewelryApp({ page: "new-arrivals" }),
});
