// components/Footer.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Twitter } from "lucide-react"
export default function Footer() {
  return (
  
    <footer className="mt-10" >
      
      <Card className="rounded-2xl bg-gradient-to-br from-green-100 to-lime-200 text-green-900 shadow-md">
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold mb-2">FreshHarvest</h2>
            <p>Delivering fresh fruits & veggies straight from the farm to your door.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#"><Facebook className="h-5 w-5 hover:text-green-600" /></a>
              <a href="#"><Instagram className="h-5 w-5 hover:text-pink-600" /></a>
              <a href="#"><Twitter className="h-5 w-5 hover:text-blue-600" /></a>
            </div>
          </div>
        </CardContent>
      </Card>
    
    </footer>
    
  )
}
