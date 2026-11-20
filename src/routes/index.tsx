import { createFileRoute } from "@tanstack/react-router";
import { JewelryApp } from "@/components/jewelry-app";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Dhairya Gems & Jewels | Timeless Fine Jewellery" },
    { name: "description", content: "Discover timeless jewellery crafted with care by Dhairya Gems and Jewels Private Limited." },
    { property: "og:title", content: "Dhairya Gems & Jewels | Timeless Fine Jewellery" },
    { property: "og:description", content: "Discover timeless jewellery crafted with care by Dhairya Gems and Jewels Private Limited." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => JewelryApp({ page: "home" }),
});
