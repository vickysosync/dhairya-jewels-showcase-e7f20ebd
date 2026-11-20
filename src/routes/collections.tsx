import { createFileRoute } from "@tanstack/react-router";
import { JewelryApp } from "@/components/jewelry-app";

export const Route = createFileRoute("/collections")({
  head: () => ({ meta: [
    { title: "Jewellery Collections | Dhairya Gems & Jewels" },
    { name: "description", content: "Explore curated bridal, royal gold, diamond, everyday and signature jewellery collections." },
    { property: "og:title", content: "Jewellery Collections | Dhairya Gems & Jewels" },
    { property: "og:description", content: "Explore curated bridal, royal gold, diamond, everyday and signature jewellery collections." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => JewelryApp({ page: "collections" }),
});
