import type React from "react"
import { ChevronDownIcon } from "lucide-react"

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=2000&q=80"
          alt="GNA University Campus"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 lg:px-12 bg-black/10 backdrop-blur-md">
        <div className="mx-auto flex items-center max-w-7xl justify-between">
          <div className="flex items-center gap-2">
            <img src="/placeholder.svg?height=40&width=40" alt="GNA University Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-white">GNA University</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
              Home
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
              Programs
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
              About Us
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:flex bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition-colors duration-300 font-semibold px-6 py-2 rounded-full shadow-lg">
              Apply Now
            </button>
            <button className="md:hidden text-white p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto max-w-7xl px-6 py-12 sm:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-yellow-300 text-center sm:text-left font-medium animate-pulse text-lg">
                Welcome to GNA University
              </p>
              <h1 className="text-4xl text-center sm:text-left md:text-6xl font-bold text-white leading-tight">
                Forge Your
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  {" Leadership Path"}
                </span>
              </h1>
              <h2 className="text-2xl text-center sm:text-left md:text-4xl font-bold text-white leading-tight">
                Premier Industry-Graded
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  {" MBA Program"}
                </span>
              </h2>
              <p className="text-xl text-center sm:text-left md:text-2xl font-semibold text-white">
                Admissions Open for 2025-27
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                {
                  icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "Highest Package\n₹10 Lakh",
                },
                {
                  icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  text: "100% Placement\nAssistance",
                },
                {
                  icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                  text: "Industry\nPartnerships",
                },
                {
                  icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                  text: "Cutting-edge\nCurriculum",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-4 text-center hover:bg-white/20 transition-all duration-300 ease-in-out backdrop-blur-sm bg-white/10 border border-white/20 group rounded-xl"
                >
                  <svg
                    className="w-8 h-8 mx-auto mb-4 text-yellow-300 group-hover:scale-110 transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                  <p className="text-sm font-medium text-white group-hover:text-yellow-300 transition-colors whitespace-pre-line">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:ml-auto">
            <div className="p-8 w-full max-w-md backdrop-blur-md bg-white/10 shadow-2xl border border-white/20 rounded-3xl">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Start Your <span className="text-yellow-300">Journey</span>
              </h2>
              <form className="space-y-6">
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "Enter phone number" },
                ].map((field) => (
                  <div key={field.id} className="space-y-2">
                    <label htmlFor={field.id} className="text-white text-lg block font-medium">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-white/20 border-2 border-white/30 text-white placeholder-gray-300 focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300 rounded-lg py-3 px-4 transition-all duration-300"
                    />
                  </div>
                ))}
                <div className="space-y-2">
                  <label htmlFor="program" className="text-white text-lg block font-medium">
                    Preferred Program
                  </label>
                  <div className="relative">
                    <select
                      id="program"
                      className="w-full bg-white/20 border-2 border-white/30 text-white focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300 rounded-lg py-3 px-4 appearance-none transition-all duration-300"
                    >
                      <option value="" disabled selected>
                        Select your program
                      </option>
                      <option value="mba">MBA</option>
                      <option value="emba">Executive MBA</option>
                      <option value="pgdm">PGDM</option>
                      <option value="msc">M.Sc. Business Analytics</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5 pointer-events-none" />
                  </div>
                </div>
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold shadow-lg group text-lg py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 flex items-center justify-center">
                  Submit Application
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <p className="text-sm text-center text-gray-300">
                  By submitting, you agree to our
                  <a href="#" className="text-yellow-300 hover:text-yellow-400 underline ml-1">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-yellow-300 hover:text-yellow-400 underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

