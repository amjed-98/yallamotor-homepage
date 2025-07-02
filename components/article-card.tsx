import Image from "next/image";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  image: string;
  description: string;
  publishDate: string;
  readTime: string;
  layout?: "list" | "grid";
};
export default function ArticleCard({ layout = "list", ...props }: Props) {
  return (
    <div className="relative rounded-lg overflow-hidden mb-6">
      <div className="absolute top-4 left-4 z-10">
        <Badge className="bg-red-600 text-white px-3 py-1">New Launches</Badge>
      </div>

      <div
        className={cn("flex gap-5 p-6", {
          "flex-col": layout === "grid",
          "flex-row": layout === "list",
        })}
      >
        <div className="relative w-80 h-40 bg-slate-800 rounded-lg overflow-hidden">
          <Image
            src={props.image}
            alt={props.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-slate-500">Ahmad Rashad Al Zeer</span>
          <a
            href={"#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900"
          >
            <h4 className="text-lg font-semibold mb-2">{props.title}</h4>

            <p className="text-sm">{props.description}</p>
          </a>

          <p className="text-[#868686] text-sm">
            {props.publishDate}
            <span className="text-slate-500"> . {props.readTime} min read</span>
          </p>
        </div>
      </div>
    </div>
  );
}
