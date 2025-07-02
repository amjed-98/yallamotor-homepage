import BlogsSection from "@/components/blogs-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection />

      <BlogsSection />

      <Footer />
    </div>
  )
}
