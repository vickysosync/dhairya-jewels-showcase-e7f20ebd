import { createFileRoute } from "@tanstack/react-router";
import { OrderConfirmation } from "@/components/jewelry-app";

export const Route = createFileRoute("/order-confirmation")({
  head: () => ({ meta: [
    { title: "Order Confirmation | Dhairya Gems & Jewels" },
    { name: "description", content: "Review your saved demonstration jewellery order." },
    { property: "og:title", content: "Order Confirmation | Dhairya Gems & Jewels" },
    { property: "og:description", content: "Review your saved demonstration jewellery order." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <OrderConfirmation />,
});
