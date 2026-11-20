import { createFileRoute } from "@tanstack/react-router";
import { JewelryApp } from "@/components/jewelry-app";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Dhairya Gems & Jewels" },
    { name: "description", content: "Learn about Dhairya Gems and Jewels Private Limited and its jewellery-making philosophy." },
    { property: "og:title", content: "About Dhairya Gems & Jewels" },
    { property: "og:description", content: "Learn about Dhairya Gems and Jewels Private Limited and its jewellery-making philosophy." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => JewelryApp({ page: "about" }),
});
