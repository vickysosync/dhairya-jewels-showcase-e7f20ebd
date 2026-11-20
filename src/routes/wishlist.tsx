import { createFileRoute } from "@tanstack/react-router";
import { JewelryApp } from "@/components/jewelry-app";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [
    { title: "Wishlist | Dhairya Gems & Jewels" },
    { name: "description", content: "View the jewellery pieces you have saved to your wishlist." },
    { property: "og:title", content: "Wishlist | Dhairya Gems & Jewels" },
    { property: "og:description", content: "View the jewellery pieces you have saved to your wishlist." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => JewelryApp({ page: "wishlist" }),
});
