'use client'
import { User, Menu } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8 // Adjust this value as needed
      setIsScrolled(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (<header className={cn("z-10  fixed flex w-full items-center justify-between px-4 py-4", {
    "bg-transparent text-white": !isScrolled,
    "bg-white text-black ring-1 ring-gray-200 shadow-xl": isScrolled
  })}>
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">Y</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="relative">
            <span className="hover:text-gray-300 cursor-pointer">Offers</span>
            <Badge className="absolute -top-2 -right-4 bg-red-500 text-xs px-1">New</Badge>
          </div>
          <div className="relative">
            <span className="hover:text-gray-300 cursor-pointer">New</span>
            <Badge className="absolute -top-2 -right-4 bg-red-500 text-xs px-1">New</Badge>
          </div>
          <span className="hover:text-gray-300 cursor-pointer">Used</span>
          <span className="hover:text-gray-300 cursor-pointer">Electric</span>
          <span className="hover:text-gray-300 cursor-pointer">Chinese</span>
          <span className="hover:text-gray-300 cursor-pointer">Blog</span>
          <span className="hover:text-gray-300 cursor-pointer">Services</span>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <Button className="cursor-pointer bg-green-500 hover:bg-green-600 px-6">Sell My Car</Button>
          <Button variant="ghost" size="icon" >
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  </header>)
}
