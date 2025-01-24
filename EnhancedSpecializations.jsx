"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRightIcon, CheckCircle, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const specializations = [
  {
    id: 1,
    title: "MBA",
    icon: "🎓",
    description: "Master the art of business administration and leadership.",
    skills: ["Strategic Management", "Financial Analysis", "Organizational Behavior"],
    careers: ["Business Consultant", "CEO", "Entrepreneur"],
  },
  {
    id: 2,
    title: "MBA BFSI",
    icon: "🏦",
    description: "Specialize in Banking, Financial Services, and Insurance sectors.",
    skills: ["Risk Management", "Investment Banking", "Financial Planning"],
    careers: ["Investment Banker", "Financial Analyst", "Insurance Manager"],
  },
  {
    id: 3,
    title: "MBA Digital Marketing",
    icon: "📱",
    description: "Excel in the dynamic world of digital marketing and e-commerce.",
    skills: ["SEO/SEM", "Social Media Marketing", "Content Strategy"],
    careers: ["Digital Marketing Manager", "Brand Strategist", "E-commerce Consultant"],
  },
  {
    id: 4,
    title: "MBA Business Analytics",
    icon: "📊",
    description: "Harness the power of data to drive business decisions.",
    skills: ["Data Mining", "Predictive Analytics", "Business Intelligence"],
    careers: ["Data Scientist", "Business Analyst", "Analytics Consultant"],
  },
]

const EnhancedSpecializations = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null)

  return (
    <section className="bg-gray-50 text-gray-800 py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900">
          Explore Our MBA Specializations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mb-16">
          {specializations.map((spec, index) => (
            <Card key={spec.id} className="bg-white hover:shadow-xl transition-all duration-300 ease-in-out">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{spec.icon}</span>
                  <h3 className="text-2xl font-bold">{spec.title}</h3>
                </div>
                <p className="text-gray-600 my-auto">{spec.description}</p>
                <Dialog open={openDialog === index} onOpenChange={(isOpen) => setOpenDialog(isOpen ? index : null)}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{spec.title}</DialogTitle>
                      <DialogDescription>{spec.description}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-gray-800">Key Skills</h4>
                        <ul className="space-y-2">
                          {spec.skills.map((skill, skillIndex) => (
                            <li key={skillIndex} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-gray-800">Career Opportunities</h4>
                        <ul className="space-y-2">
                          {spec.careers.map((career, careerIndex) => (
                            <li key={careerIndex} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                              <span>{career}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Button className="w-full">
                      Apply for {spec.title}
                      <ChevronRightIcon className="w-5 h-5 ml-2" />
                    </Button>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Choose Our MBA Program?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our MBA program offers a unique blend of theoretical knowledge and practical skills, preparing you for
            leadership roles in today's dynamic business environment.
          </p>
          <Button variant="outline" size="lg">
            Download Program Brochure
          </Button>
        </div>
      </div>
    </section>
  )
}

export default EnhancedSpecializations

