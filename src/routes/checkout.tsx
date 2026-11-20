import { createFileRoute } from "@tanstack/react-router";
import { JewelryApp } from "@/components/jewelry-app";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [
    { title: "Demo Checkout | Dhairya Gems & Jewels" },
    { name: "description", content: "Complete a demonstration jewellery order. No payment is collected." },
    { property: "og:title", content: "Demo Checkout | Dhairya Gems & Jewels" },
    { property: "og:description", content: "Complete a demonstration jewellery order. No payment is collected." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => JewelryApp({ page: "checkout" }),
});
