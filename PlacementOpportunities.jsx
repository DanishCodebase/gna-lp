import React from "react"
import { FaMoneyBillWave, FaGlobeAmericas, FaLaptopCode, FaChartLine, FaBriefcase } from "react-icons/fa"

const StatCard = ({ icon, title, value, description }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md group">
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="text-3xl text-gray-400 group-hover:text-blue-500 transition-colors duration-300">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800 ml-4">{title}</h3>
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
)

const PlacementOpportunities = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Placement Opportunities at GNA</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the exceptional career prospects awaiting you at GNA. Our placement records speak volumes about our
            commitment to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 mb-16">
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <StatCard
                icon={<FaChartLine />}
                title="Highest Package"
                value="₹10 Lakh"
                description="Top performers secure excellent compensation"
              />
              <StatCard
                icon={<FaMoneyBillWave />}
                title="Average Package"
                value="₹8 Lakh"
                description="Competitive salaries for our graduates"
              />
              <StatCard
                icon={<FaBriefcase />}
                title="Lowest Package"
                value="₹4.5 Lakh"
                description="Ensuring a strong start for all students"
              />
              <StatCard
                icon={<FaGlobeAmericas />}
                title="Global Placements"
                value="100+"
                description="Opportunities across the world"
              />
            </div>
          </div>
          <div className="lg:row-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 h-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose GNA?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaChartLine className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="ml-3 text-gray-700">Industry-leading placements</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaGlobeAmericas className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="ml-3 text-gray-700">Global opportunities</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaBriefcase className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="ml-3 text-gray-700">Comprehensive career support</p>
                </li>
              </ul>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">International Internships</h4>
                <div className="flex items-center">
                  <FaLaptopCode className="text-2xl text-blue-500 mr-3" />
                  <span className="text-3xl font-bold text-gray-900">50+</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Gain global exposure through our internship programs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Explore Opportunities
          </button>
        </div>
      </div>
    </section>
  )
}

export default PlacementOpportunities

