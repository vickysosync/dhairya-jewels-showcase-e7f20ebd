import { createFileRoute } from "@tanstack/react-router";
import { ProductDetail } from "@/components/jewelry-app";

export const Route = createFileRoute("/product/$slug")({
  head: () => ({ meta: [
    { title: "Fine Jewellery | Dhairya Gems & Jewels" },
    { name: "description", content: "Discover product details from the Dhairya fine jewellery collection." },
    { property: "og:title", content: "Fine Jewellery | Dhairya Gems & Jewels" },
    { property: "og:description", content: "Discover product details from the Dhairya fine jewellery collection." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ProductDetail slug={Route.useParams().slug} />,
});
