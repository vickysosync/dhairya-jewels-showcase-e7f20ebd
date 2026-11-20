import { createFileRoute } from "@tanstack/react-router";
import { JewelryApp } from "@/components/jewelry-app";

export const Route = createFileRoute("/shop")({
  head: () => ({ meta: [
    { title: "Shop Fine Jewellery | Dhairya Gems & Jewels" },
    { name: "description", content: "Explore gold, diamond, gemstone and bridal jewellery in the Dhairya collection." },
    { property: "og:title", content: "Shop Fine Jewellery | Dhairya Gems & Jewels" },
    { property: "og:description", content: "Explore gold, diamond, gemstone and bridal jewellery in the Dhairya collection." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => JewelryApp({ page: "shop" }),
});
