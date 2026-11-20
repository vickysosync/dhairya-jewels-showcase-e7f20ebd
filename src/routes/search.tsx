import { createFileRoute } from "@tanstack/react-router";
import { SearchResults } from "@/components/jewelry-app";

export const Route = createFileRoute("/search")({
  head: () => ({ meta: [
    { title: "Search Jewellery | Dhairya Gems & Jewels" },
    { name: "description", content: "Search jewellery designs and collections from Dhairya Gems & Jewels." },
    { property: "og:title", content: "Search Jewellery | Dhairya Gems & Jewels" },
    { property: "og:description", content: "Search jewellery designs and collections from Dhairya Gems & Jewels." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SearchResults />,
});
