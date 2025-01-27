"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface TeamMember {
  name: string
  role: string
  image: string
  description: string
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "Software Engineer",
    image: "https://readymadeui.com/team-1.webp",
    description:
      "John is a seasoned software engineer with over 10 years of experience in developing scalable web applications. He specializes in React and Node.js, and has a passion for creating intuitive user interfaces.",
  },
  {
    name: "Mark Adair",
    role: "Software Engineer",
    image: "https://readymadeui.com/team-2.webp",
    description:
      "Mark is an innovative software engineer who excels in solving complex problems. With a background in machine learning, he brings a unique perspective to our development team.",
  },
  {
    name: "Simon Konecki",
    role: "Web Designer",
    image: "https://readymadeui.com/team-3.webp",
    description:
      "Simon is a creative web designer with an eye for detail. He combines his artistic skills with technical knowledge to create stunning and functional websites that leave a lasting impression on users.",
  },
]

export default function TeamMembers() {
  const [expandedMembers, setExpandedMembers] = useState<{ [key: string]: boolean }>({})

  const toggleDescription = (name: string) => {
    setExpandedMembers((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <div className="font-sans">
      <div className="h-60 w-full bg-gradient-to-r from-yellow-300 via-red-500 to-purple-600"></div>

      <div className="max-w-5xl max-md:max-w-xl max-sm:max-w-sm mx-auto -mt-48 px-6">
        <h2 className="text-4xl max-md:text-3xl text-center font-extrabold text-white mb-12">
          Meet Our Professional Team
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-sm:justify-center text-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:scale-105 transition-all duration-500">
              <div className="lg:min-h-[250px]">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full rounded-lg inline-block"
                />
              </div>

              <div className="mt-6">
                <h4 className="text-gray-800 text-lg font-bold">{member.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{member.role}</p>
                <p className={`text-sm text-gray-600 mt-3 ${expandedMembers[member.name] ? "" : "line-clamp-2"}`}>
                  {member.description}
                </p>
                <Button
                  variant="link"
                  className="mt-2 text-blue-600 hover:text-blue-800"
                  onClick={() => toggleDescription(member.name)}
                >
                  {expandedMembers[member.name] ? "Read Less" : "Read More"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

