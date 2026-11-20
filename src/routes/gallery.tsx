import { createFileRoute } from "@tanstack/react-router";
import { JewelryApp } from "@/components/jewelry-app";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Jewellery Gallery | Dhairya Gems & Jewels" },
    { name: "description", content: "View jewellery, materials and craftsmanship in the Dhairya visual gallery." },
    { property: "og:title", content: "Jewellery Gallery | Dhairya Gems & Jewels" },
    { property: "og:description", content: "View jewellery, materials and craftsmanship in the Dhairya visual gallery." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => JewelryApp({ page: "gallery" }),
});
