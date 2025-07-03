import Image from "next/image";
import ArticleCard from "./article-card";
import { Badge } from "./ui/badge";

export default function FeaturedArticles() {
  return (
    <>
      <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-6">
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-red-600 text-white px-3 py-1">Top Picks</Badge>
        </div>
        <div className="relative h-80">
          <Image
            src="https://ymimg1.b8cdn.com/uploads/article/53785/logo_file_name/best-american-used-cars-ford.webp"
            alt="10 Best Used American Cars in the UAE"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-sm mb-2 opacity-90">July 2,2025</p>
            <h3 className="text-2xl font-bold mb-2 leading-tight">
              10 Best Used American Cars in the UAE: 2024 Buyer's Guide
            </h3>
            <p className="text-sm opacity-90">By: Ahmad Rashad Al Zeer</p>
          </div>
        </div>
      </div>

      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </>
  );
}

const articles = [
  {
    id: 1,
    title: "Hyundai Unveils Ioniq 6 N: What's New?",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description:
      "Explore the features and performance of the new Hyundai Ioniq 6 N.",
    publishDate: "01 July 2025",
    readTime: "2",
  },
  {
    id: 2,
    title: "Hyundai Unveils Ioniq 6 N: What's New?",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description:
      "Explore the features and performance of the new Hyundai Ioniq 6 N.",
    publishDate: "01 July 2025",
    readTime: "2",
  },
  {
    id: 3,
    title: "Hyundai Unveils Ioniq 6 N: What's New?",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description:
      "Explore the features and performance of the new Hyundai Ioniq 6 N.",
    publishDate: "01 July 2025",
    readTime: "2",
  },
  {
    id: 4,
    title: "Hyundai Unveils Ioniq 6 N: What's New?",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description:
      "Explore the features and performance of the new Hyundai Ioniq 6 N.",
    publishDate: "01 July 2025",
    readTime: "2",
  },
  {
    id: 5,
    title: "Hyundai Unveils Ioniq 6 N: What's New?",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description:
      "Explore the features and performance of the new Hyundai Ioniq 6 N.",
    publishDate: "01 July 2025",
    readTime: "2",
  },
];
