import { ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";

export default function Footer() {
  return <footer className="bg-gray-800 text-white mt-16">
    {/* Footer Header */}
    <div className="border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">Y</span>
            </div>
            <span className="text-white font-bold text-xl">YallaMotor</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-gray-300 flex items-center space-x-1">
              <span>TOP</span>
              <ChevronUp className="h-4 w-4" />
            </Button>
            <span className="text-white">العربية</span>
          </div>
        </div>
      </div>
    </div>

    {/* Main Footer Content */}
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Used Cars Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Used Cars</h3>
          <div className="space-y-2">
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars in UAE
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars in Dubai
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars in Ajman
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars in Fujairah
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars in Sharjah
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars in Ras Al Khaimah
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars in Abu Dhabi
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars in Al Ain
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars in Umm al Quwain
            </Button>
          </div>
        </div>

        {/* Used Cars by Budget Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Used cars by budget</h3>
          <div className="space-y-2">
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars under 30000 AED
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars under 50000 AED
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars under 70000 AED
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars under 100000 AED
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars under 120000 AED
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars under 150000 AED
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Used cars under 250000 AED
            </Button>
          </div>
        </div>

        {/* Yallamotor Services Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Yallamotor Services</h3>
          <div className="space-y-2">
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Sell used car <span className="text-green-400 font-semibold">FREE</span> on Yallamotor
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Compare New Cars
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              New cars offers
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Car Export
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Car Inspection
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Car Valuation
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
              Car Financing
            </Button>
          </div>
        </div>

        {/* Newsletter & Social Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">SUBSCRIBE TO OUR NEWSLETTERS</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex">
              <Input
                placeholder="Enter your email to subscribe"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 rounded-r-none"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-l-none">JOIN</Button>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4">FOLLOW YALLAMOTOR.COM</h4>
            <div className="flex space-x-3 mb-6">
              <Button variant="ghost" size="icon" className="bg-gray-700 hover:bg-gray-600 rounded-full">
                <span className="text-white text-lg">f</span>
              </Button>
              <Button variant="ghost" size="icon" className="bg-gray-700 hover:bg-gray-600 rounded-full">
                <span className="text-white text-lg">𝕏</span>
              </Button>
              <Button variant="ghost" size="icon" className="bg-gray-700 hover:bg-gray-600 rounded-full">
                <span className="text-white text-lg">▶</span>
              </Button>
              <Button variant="ghost" size="icon" className="bg-gray-700 hover:bg-gray-600 rounded-full">
                <span className="text-white text-lg">in</span>
              </Button>
              <Button variant="ghost" size="icon" className="bg-gray-700 hover:bg-gray-600 rounded-full">
                <span className="text-white text-lg">📷</span>
              </Button>
              <Button variant="ghost" size="icon" className="bg-gray-700 hover:bg-gray-600 rounded-full">
                <span className="text-white text-lg">♪</span>
              </Button>
            </div>

            <h4 className="text-lg font-semibold mb-4">Download Our Mobile App</h4>
            <div className="flex space-x-3">
              <Button variant="outline" className="bg-transparent border-gray-600 text-white hover:bg-gray-700">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Google Play"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Google Play
              </Button>
              <Button variant="outline" className="bg-transparent border-gray-600 text-white hover:bg-gray-700">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="App Store"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                App Store
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Footer Section */}
    <div className="border-t border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Popular Used Cars Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular used cars brands</h3>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Toyota cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Mercedes-Benz cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Nissan cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Lexus cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used BMW cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Ford cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Land Rover cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Hyundai cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Chevrolet cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Mitsubishi cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Honda cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Porsche cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Kia cars
              </Button>
            </div>
          </div>

          {/* Certified Pre-owned Cars */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Certified Pre-owned cars</h3>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Certified Pre-owned cars in UAE
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Certified Pre-owned cars in Dubai
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Certified Pre-owned cars in Ajman
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Certified Pre-owned cars in Fujairah
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Certified Pre-owned cars in Sharjah
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Certified Pre-owned cars in Ras Al Khaimah
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Certified Pre-owned cars in Abu Dhabi
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Certified Pre-owned cars in Al Ain
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Certified Pre-owned cars in Umm al Quwain
              </Button>
            </div>
          </div>

          {/* Used Cars Dealers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Used cars dealers</h3>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used cars sold by car dealers
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Certified car dealers
              </Button>
            </div>
          </div>

          {/* Used Cars by Body Shape */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Used cars by Body Shape</h3>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used SUV cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Sedan cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Coupe cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Hatch back cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Convertible cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Wagon cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Van cars
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Pickup Truck
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 pt-8 border-t border-gray-700">
          {/* Chinese Cars */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Chinese cars</h3>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Chinese cars for sale in UAE
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                New Chinese cars for sale in UAE
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Certified Pre-Owned Chinese Cars For Sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Chinese cars in Dubai
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Chinese cars in Ajman
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Chinese cars in Fujairah
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Chinese cars in Sharjah
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Chinese cars in Ras Al Khaimah
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Chinese cars in Abu Dhabi
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Chinese cars in Al Ain
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Chinese cars in Umm al Quwain
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Chinese cars under 100000 AED
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                MG
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Jetour
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Geely
              </Button>
            </div>
          </div>

          {/* Electric Cars */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Electric cars</h3>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Electric cars for sale in UAE
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                New Electric cars for sale in UAE
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Certified Pre-Owned Electric Cars For Sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Electric cars in Dubai
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Electric cars in Ajman
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Electric cars in Fujairah
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Electric cars in Sharjah
              </Button>
              <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0 h-auto text-sm justify-start">
                Used Electric cars in Ras Al Khaimah
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Electric cars in Abu Dhabi
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Electric cars in Al Ain
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Used Electric cars in Umm al Quwain
              </Button>
            </div>
          </div>

          {/* New Cars for Sale */}
          <div>
            <h3 className="text-lg font-semibold mb-4">New cars for sale</h3>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                New cars for sale in UAE
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                New cars for sale in Dubai
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                New cars for sale in Ajman
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                New cars for sale in Fujairah
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                New cars for sale in Sharjah
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                New cars for sale in Ras Al Khaimah
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                New cars for sale in Abu Dhabi
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                New cars for sale in Al Ain
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                New cars for sale in Umm al Quwain
              </Button>
            </div>
          </div>

          {/* New Cars for Sale Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-4">New cars for sale brands</h3>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Nissan cars for sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Mitsubishi cars for sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Hyundai cars for sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Kia cars for sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Honda cars for sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Lexus cars for sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Mercedes-Benz cars for sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                BMW cars for sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Ford cars for sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Chevrolet cars for sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Suzuki cars for sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Jeep cars for sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                GMC cars for sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Volkswagen cars for sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Audi cars for sale
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Infiniti cars for sale
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Final Footer Section */}
    <div className="border-t border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Car guide, Specs & prices */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Car guide, Specs & prices</h3>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Cars prices in UAE
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Toyota
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Nissan
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Kia
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Mitsubishi
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Hyundai
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Honda
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Mercedes-Benz
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                BMW
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Ford
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Chevrolet
              </Button>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                About Us
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Privacy Policy
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Contact Us
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Terms of Use
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Advertise With Us
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Car news
              </Button>
            </div>
          </div>

          {/* Other Countries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Other Countries</h3>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Yallamotor Saudi Arabia
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Yallamotor Egypt
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Yallamotor Qatar
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Yallamotor Kuwait
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Yallamotor Bahrain
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto text-sm justify-start">
                Yallamotor Oman
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">YallaMotor.com © 2025. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
}
