import { createFileRoute } from "@tanstack/react-router";
import { CollectionDetail } from "@/components/jewelry-app";

export const Route = createFileRoute("/collections/$slug")({
  head: () => ({ meta: [
    { title: "Collection | Dhairya Gems & Jewels" },
    { name: "description", content: "Explore a curated Dhairya Gems and Jewels collection." },
    { property: "og:title", content: "Collection | Dhairya Gems & Jewels" },
    { property: "og:description", content: "Explore a curated Dhairya Gems and Jewels collection." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CollectionDetail slug={Route.useParams().slug} />,
});
