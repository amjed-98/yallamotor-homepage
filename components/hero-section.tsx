import { FileText, Search } from "lucide-react";
import { Input } from "./ui/input";
import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="relative pt-16">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <Image
          fetchPriority="high"
          src="https://yallamotor-production-assets.s3.ap-south-1.amazonaws.com/resized/spotlight/1392/web_artwork/spotlight_web_toyota_supra_desktop_new_cars_bahrain-min.jpg"
          alt="White Toyota Supra on desert road"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 max-w-4xl leading-tight">
          Automotive News & Reviews
        </h1>
      </div>

      {/* Supra Review Card */}
      <div className="absolute bottom-32 left-8 z-10 hidden md:block">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-4 h-4" />
            <span className="font-semibold">Supra MKV Manual</span>
          </div>
          <p className="text-sm text-white/80">Watch Our Review</p>
        </div>
      </div>

      {/* Search Section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-2xl px-4">
        <div className="bg-white rounded-lg shadow-lg p-2 flex gap-2">
          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Search by typing"
              className="border-0 focus-visible:ring-0 text-gray-600 placeholder:text-gray-400 h-12"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 h-12 rounded-md font-medium whitespace-nowrap">
            Search 46277 Articles
          </Button>
        </div>
      </div>
    </div>
  );
}
