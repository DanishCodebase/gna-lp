import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CircleDollarSign, Wallet2, Building2, CreditCard, Menu } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=2000&q=80"
          alt="University Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 lg:px-12 bg-black/10 backdrop-blur-md">
      <div className="mx-auto flex items-center max-w-7xl justify-between">
        <div className="flex items-center gap-2">
          <Image src="/placeholder.svg" alt="Pagedone Logo" width={40} height={40} className="w-10 h-10" />
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Pagedone
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-white hover:text-indigo-300 transition-colors">
            Home
          </Link>
          <Link href="#" className="text-white hover:text-indigo-300 transition-colors">
            About us
          </Link>
          <Link href="#" className="text-white hover:text-indigo-300 transition-colors">
            Products
          </Link>
          <Link href="#" className="text-white hover:text-indigo-300 transition-colors">
            Features
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg">
            Apply Now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto max-w-7xl px-0 py-12 sm:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-indigo-300 text-center sm:text-left font-medium animate-fade-in text-lg">Welcome to GNA University</p>
              <h1 className="text-xl text-center sm:text-left md:text-5xl font-bold text-white leading-tight">
                Forge {" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Your Leadership Path
                </span>{" "}
                with Premier Industry Graded{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  MBA Program
                </span>
              </h1>
              <h1 className="text-xl text-center sm:text-left md:text-5xl font-bold text-white leading-tight">
                Admissions Open for 2025-27
              </h1>
            </div>

            {/* Feature Cards */}
            <div className="grid-cols-2 hidden md:grid-cols-4 gap-4 mt-12">
              <Card className="p-6 text-center hover:bg-white/10 transition-all duration-300 ease-in-out backdrop-blur-sm bg-white/5 border-white/10 group rounded-xl">
                <CircleDollarSign className="w-8 h-8 mx-auto mb-4 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">
                  Highest Package 10 Lakh
                </p>
              </Card>
              <Card className="p-6 text-center hover:bg-white/10 transition-all duration-300 ease-in-out backdrop-blur-sm bg-white/5 border-white/10 group rounded-xl">
                <Wallet2 className="w-8 h-8 mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">Lowest Package 4.5 Lakh</p>
              </Card>
              <Card className="p-6 text-center hover:bg-white/10 transition-all duration-300 ease-in-out backdrop-blur-sm bg-white/5 border-white/10 group rounded-xl">
                <Building2 className="w-8 h-8 mx-auto mb-4 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">
                  Global Placements 100+
                </p>
              </Card>
              <Card className="p-6 text-center hover:bg-white/10 transition-all duration-300 ease-in-out backdrop-blur-sm bg-white/5 border-white/10 group rounded-xl">
                <CreditCard className="w-8 h-8 mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                  International Internships 50+
                </p>
              </Card>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:ml-auto">
            <Card className="p-8 w-full max-w-md backdrop-blur-md bg-white/10 shadow-2xl border-white/20 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Start Your Journey
              </h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white text-lg">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    className="bg-white border-white/30 text-white placeholder-white focus:border-indigo-500 focus:ring-indigo-500 rounded-lg py-3"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white text-lg">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white border-white/30 text-white placeholder-white focus:border-indigo-500 focus:ring-indigo-500 rounded-lg py-3"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white text-lg">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    className="bg-white border-white/30 text-white placeholder-white focus:border-indigo-500 focus:ring-indigo-500 rounded-lg py-3"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account-type" className="text-white text-lg">
                    Account Type
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-white/20 border-white/30 text-white rounded-lg py-3">
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 text-white border-white/20">
                      <SelectItem value="savings">Savings Account</SelectItem>
                      <SelectItem value="checking">Checking Account</SelectItem>
                      <SelectItem value="business">Business Account</SelectItem>
                      <SelectItem value="student">Student Account</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg group text-lg py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                  Submit Application
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-center text-gray-300">
                  By submitting, you agree to our{" "}
                  <Link href="#" className="text-indigo-300 hover:text-indigo-400 underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-indigo-300 hover:text-indigo-400 underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

