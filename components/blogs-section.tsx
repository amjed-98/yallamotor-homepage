import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

import FeaturedArticles from "./featured-articles";
import NewsCategoriesSection from "./news-categories-section";

export default function BlogsSection() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm">
          <Button
            variant="ghost"
            size="sm"
            className="p-0 h-auto text-blue-600 hover:text-blue-800"
          >
            Home
          </Button>
          <span className="text-gray-500">{">"}</span>
          <span className="text-gray-600">Automotive News & Reviews</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Most Popular Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Most Popular Articles
            </h2>

            {/* Featured Article Card */}

            <FeaturedArticles />

            <NewsCategoriesSection />
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* News By Country */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                News By Country
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-600 hover:bg-gray-100 bg-transparent"
                >
                  UAE
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-600 hover:bg-gray-100 bg-transparent"
                >
                  KSA
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-600 hover:bg-gray-100 bg-transparent"
                >
                  Egypt
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-600 hover:bg-gray-100 bg-transparent"
                >
                  Qatar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-600 hover:bg-gray-100 bg-transparent"
                >
                  Oman
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-600 hover:bg-gray-100 bg-transparent"
                >
                  Kuwait
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-600 hover:bg-gray-100 bg-transparent"
                >
                  Bahrain
                </Button>
              </div>
            </div>

            {/* Popular Tags */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                POPULAR TAGS
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  uae
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  Saudi Arabia
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  used cars UAE
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  best used American cars UAE
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  Ford Mustang Dubai price
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  Jeep Wrangler off-road
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  Dodge Charger Hellcat
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  Cadillac Escalade UAE
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  apacity
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  Hyundai Ioniq 6 N
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  high-performance car
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  car news
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  Hyundai
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  Kaiyi cars
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  new cars
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  car rental
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  Ram 1500 towing capacity
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  electric vehicle
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  automotive technology
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  SUV
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 hover:bg-gray-100 bg-transparent h-8"
                >
                  crossover
                </Button>
              </div>
            </div>

            {/* From This Week */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                FROM THIS WEEK
              </h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-sm font-medium text-gray-800 mb-1 hover:text-blue-600 cursor-pointer">
                    Hyundai Unveils Ioniq 6 N: What's New?
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>01 July 2025</span>
                    <Badge className="bg-red-100 text-red-600 text-xs px-2 py-1">
                      New Launches
                    </Badge>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-sm font-medium text-gray-800 mb-1 hover:text-blue-600 cursor-pointer">
                    Discover New Kaiyi Cars in Saudi Arabia
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>01 July 2025</span>
                    <Badge className="bg-blue-100 text-blue-600 text-xs px-2 py-1">
                      Car News
                    </Badge>
                  </div>
                </div>

                <div className="pb-4">
                  <h4 className="text-sm font-medium text-gray-800 mb-1 hover:text-blue-600 cursor-pointer">
                    Volvo's Commitment to Sustainable Mobility in Saudi Arabia
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>01 July 2025</span>
                    <Badge className="bg-red-100 text-red-600 text-xs px-2 py-1">
                      New Launches
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Car Review Videos */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                POPULAR CAR REVIEW VIDEOS
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Keep yourself updated with reviews from experts.
              </p>

              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm text-gray-600">Subscribe:</span>
                <div className="flex items-center space-x-1 bg-red-600 text-white px-3 py-1 rounded text-xs">
                  <span>▶</span>
                  <span>YouTube</span>
                </div>
                <span className="text-xs text-gray-500">7.1k</span>
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src="/placeholder.svg?height=160&width=280"
                    alt="EV Drive from China to Paris"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-gray-800 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    THIS EV DROVE FROM CHINA TO PARIS
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-500 mb-1">CAR VIDEOS</p>
                  <h4 className="text-sm font-medium text-gray-800 mb-2">
                    First Class on Wheels | The Ultimate Chinese SUV -...
                  </h4>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>🏠 YallaMotor</span>
                    <span className="mx-1">•</span>
                    <span>11:14 min min</span>
                    <span className="mx-1">•</span>
                    <span>01 July 2025</span>
                  </div>
                </div>
              </div>

              {/* Second Video */}
              <div className="bg-gray-100 rounded-lg overflow-hidden mt-4">
                <div className="relative h-40">
                  <Image
                    src="/placeholder.svg?height=160&width=280"
                    alt="Greatest Mustang of All Time"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-gray-800 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    GREATEST MUSTANG OF ALL TIME??
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-500 mb-1">CAR VIDEOS</p>
                  <h4 className="text-sm font-medium text-gray-800 mb-2">
                    The Ultimate Ford Mustang | The Ford Mustang Dar...
                  </h4>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>🏠 YallaMotor</span>
                    <span className="mx-1">•</span>
                    <span>11:24 min min</span>
                    <span className="mx-1">•</span>
                    <span>02 July 2025</span>
                  </div>
                </div>
              </div>

              {/* View More Link */}
              <div className="text-right mt-4">
                <Button
                  variant="link"
                  className="text-blue-600 hover:text-blue-800 p-0"
                >
                  View More →
                </Button>
              </div>
            </div>

            {/* Looking for Used Cars Instead */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                LOOKING FOR USED CARS INSTEAD?
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Cars in Dubai
                  </Button>
                  <span className="text-gray-500 text-sm">(18348)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Cars in Sharjah
                  </Button>
                  <span className="text-gray-500 text-sm">(5981)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Cars in Abu Dhabi
                  </Button>
                  <span className="text-gray-500 text-sm">(5115)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Cars in Ajman
                  </Button>
                  <span className="text-gray-500 text-sm">(3146)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Cars in Al Ain
                  </Button>
                  <span className="text-gray-500 text-sm">(989)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Cars in Ras Al Khaimah
                  </Button>
                  <span className="text-gray-500 text-sm">(628)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Cars in Fujairah
                  </Button>
                  <span className="text-gray-500 text-sm">(357)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Cars in Umm al Quwain
                  </Button>
                  <span className="text-gray-500 text-sm">(217)</span>
                </div>
              </div>
            </div>

            {/* Other Used Cars in UAE */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                OTHER USED CARS IN UAE
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Nissan Cars
                  </Button>
                  <span className="text-gray-500 text-sm">(5644)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Toyota Cars
                  </Button>
                  <span className="text-gray-500 text-sm">(4395)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Mercedes-Benz Cars
                  </Button>
                  <span className="text-gray-500 text-sm">(2460)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Hyundai Cars
                  </Button>
                  <span className="text-gray-500 text-sm">(1999)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Ford Cars
                  </Button>
                  <span className="text-gray-500 text-sm">(1882)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Lexus Cars
                  </Button>
                  <span className="text-gray-500 text-sm">(1755)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Kia Cars
                  </Button>
                  <span className="text-gray-500 text-sm">(1600)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Mitsubishi Cars
                  </Button>
                  <span className="text-gray-500 text-sm">(1528)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Honda Cars
                  </Button>
                  <span className="text-gray-500 text-sm">(1469)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used BMW Cars
                  </Button>
                  <span className="text-gray-500 text-sm">(1410)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Chevrolet Cars
                  </Button>
                  <span className="text-gray-500 text-sm">(1151)</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
                  >
                    Used Land Rover Cars
                  </Button>
                  <span className="text-gray-500 text-sm">(894)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
