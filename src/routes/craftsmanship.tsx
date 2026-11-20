import { createFileRoute } from "@tanstack/react-router";
import { JewelryApp } from "@/components/jewelry-app";

export const Route = createFileRoute("/craftsmanship")({
  head: () => ({ meta: [
    { title: "Craftsmanship | Dhairya Gems & Jewels" },
    { name: "description", content: "Discover the considered steps behind jewellery design, crafting, setting and finishing." },
    { property: "og:title", content: "Craftsmanship | Dhairya Gems & Jewels" },
    { property: "og:description", content: "Discover the considered steps behind jewellery design, crafting, setting and finishing." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => JewelryApp({ page: "craftsmanship" }),
});
