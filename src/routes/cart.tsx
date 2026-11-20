import { createFileRoute } from "@tanstack/react-router";
import { JewelryApp } from "@/components/jewelry-app";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [
    { title: "Shopping Bag | Dhairya Gems & Jewels" },
    { name: "description", content: "Review your selected jewellery pieces in your shopping bag." },
    { property: "og:title", content: "Shopping Bag | Dhairya Gems & Jewels" },
    { property: "og:description", content: "Review your selected jewellery pieces in your shopping bag." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => JewelryApp({ page: "cart" }),
});
