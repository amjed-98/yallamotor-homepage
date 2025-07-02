"use client";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";
import { useState } from "react";
import ArticleCard from "./article-card";
import { Button } from "./ui/button";

export default function NewsCategoriesSection() {
  const [layout, setLayout] = useState<"grid" | "list">("list");

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">News Categories</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">View:</span>

          <Button
            variant="ghost"
            size="sm"
            className={cn("p-2", {
              "bg-accent text-accent-foreground": layout === "list",
            })}
            onClick={() => setLayout("list")}
          >
            <List className="size-8 text-gray-600" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={cn("p-2", {
              "bg-accent text-accent-foreground": layout === "grid",
            })}
            onClick={() => setLayout("grid")}
          >
            <div className="grid grid-cols-2 gap-1">
              <div className="w-1.5 h-1.5 bg-gray-400"></div>
              <div className="w-1.5 h-1.5 bg-gray-400"></div>
              <div className="w-1.5 h-1.5 bg-gray-400"></div>
              <div className="w-1.5 h-1.5 bg-gray-400"></div>
            </div>
          </Button>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Button className="bg-blue-600 text-white px-4 py-2 rounded-full">
          All
        </Button>
        <Button
          variant="outline"
          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full bg-transparent"
        >
          Car News
        </Button>
        <Button
          variant="outline"
          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full bg-transparent"
        >
          New Launches
        </Button>
        <Button
          variant="outline"
          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full bg-transparent"
        >
          Car Reviews
        </Button>
        <Button
          variant="outline"
          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full bg-transparent"
        >
          Top Picks
        </Button>
        <Button
          variant="outline"
          className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full bg-transparent"
        >
          Road Regulations
        </Button>
      </div>

      {/* Filtered Articles */}
      <div
        className={cn("space-y-6", {
          "grid grid-cols-1 md:grid-cols-2 gap-4 p-6": layout === "grid",
          "flex flex-wrap gap-2": layout === "list",
        })}
      >
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} layout={layout} />
        ))}
      </div>
    </div>
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
    title: "Discover New Kaiyi Cars in Saudi Arabia",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description: "Discover New Kaiyi Cars in Saudi Arabia",
    publishDate: "01 July 2025",
    readTime: "1",
  },
  {
    id: 3,
    title: "Volvo's Commitment to Sustainable Mobility in Saudi Arabia",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description:
      "Discover Volvo's new models in Saudi Arabia, focusing on sustainability and luxury.",
    publishDate: "01 July 2025",
    readTime: "2",
  },
  {
    id: 4,
    title: "The Future of Transportation in Saudi Arabia",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description:
      "Discover Volvo's new models in Saudi Arabia, focusing on sustainability and luxury.",
    publishDate: "01 July 2025",
    readTime: "2",
  },
  {
    id: 5,
    title: "The Future of Transportation in Saudi Arabia",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description:
      "Discover Volvo's new models in Saudi Arabia, focusing on sustainability and luxury.",
    publishDate: "01 July 2025",
    readTime: "2",
  },
  {
    id: 6,
    title: "The Future of Transportation in Saudi Arabia",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description:
      "Discover Volvo's new models in Saudi Arabia, focusing on sustainability and luxury.",
    publishDate: "01 July 2025",
    readTime: "2",
  },
  {
    id: 7,
    title: "The Future of Transportation in Saudi Arabia",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description:
      "Discover Volvo's new models in Saudi Arabia, focusing on sustainability and luxury.",
    publishDate: "01 July 2025",
    readTime: "2",
  },
  {
    id: 8,
    title: "The Future of Transportation in Saudi Arabia",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description:
      "Discover Volvo's new models in Saudi Arabia, focusing on sustainability and luxury.",
    publishDate: "01 July 2025",
    readTime: "2",
  },
  {
    id: 9,
    title: "The Future of Transportation in Saudi Arabia",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description:
      "Discover Volvo's new models in Saudi Arabia, focusing on sustainability and luxury.",
    publishDate: "01 July 2025",
    readTime: "2",
  },
  {
    id: 10,
    title: "The Future of Transportation in Saudi Arabia",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description:
      "Discover Volvo's new models in Saudi Arabia, focusing on sustainability and luxury.",
    publishDate: "01 July 2025",
    readTime: "2",
  },
  {
    id: 11,
    title: "The Future of Transportation in Saudi Arabia",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description:
      "Discover Volvo's new models in Saudi Arabia, focusing on sustainability and luxury.",
    publishDate: "01 July 2025",
    readTime: "2",
  },
  {
    id: 12,
    title: "The Future of Transportation in Saudi Arabia",
    image:
      "https://ymimg1.b8cdn.com/resized/article/53782/logo_file_name/slide_show_03.jpg",
    description:
      "Discover Volvo's new models in Saudi Arabia, focusing on sustainability and luxury.",
    publishDate: "01 July 2025",
    readTime: "2",
  },
];
