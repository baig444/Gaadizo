import { motion } from "framer-motion"
import { Wrench, Wind, SprayCanIcon as Spray, Car, PenToolIcon as Tool, CircleDot } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Wrench,
      title: "Car Service",
      description: "Affordable car service near you at the best centers by experienced mechanics using genuine OEM parts",
      color: "text-orange-500",
      bgColor: "bg-orange-100/50",
      link: "#"
    },
    {
      icon: Wind,
      title: "AC Repair & Service",
      description: "Keep your car's AC in perfect condition with our comprehensive service packages including gas refilling and cleaning",
      color: "text-cyan-500",
      bgColor: "bg-cyan-100/50",
      link: "#"
    },
    {
      icon: Spray,
      title: "Car Cleaning",
      description: "Professional car cleaning services including wash, polish, dry clean & Teflon coating for that showroom shine",
      color: "text-purple-500",
      bgColor: "bg-purple-100/50",
      link: "#"
    },
    {
      icon: Tool,
      title: "Denting & Painting",
      description: "State-of-the-art paint booths and expert technicians for flawless dent repair painting services",
      color: "text-emerald-500",
      bgColor: "bg-emerald-100/50",
      link: "#"
    },
    {
      icon: Car,
      title: "Car Repairs",
      description: "Complete car repair solutions covering everything from brakes and suspension to engine transmission",
      color: "text-blue-500",
      bgColor: "bg-blue-100/50",
      link: "#"
    },
    {
      icon: CircleDot,
      title: "Wheel Care",
      description: "Comprehensive wheel care including alignment, balancing, and tire services to ensure optimal performance",
      color: "text-yellow-500",
      bgColor: "bg-yellow-100/50",
      link: "#"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 px-5">
          <div>
          <h2 className="text-4xl font-bold mb-2">Our Services</h2>
          <div className="w-12 h-1 bg-red-500 mb-4" />
          </div>
          <p className="text-xl text-neutral-500 dark:text-neutral-400">
            Experience Premium Car Care Services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-gray-50 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative z-10">
                <div className={`mb-6 inline-flex rounded-xl ${service.bgColor} p-3`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                
                <h3 className="mb-4 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                
                <p className="mb-6 text-neutral-500 leading-relaxed dark:text-neutral-400">
                  {service.description}
                </p>

                <div className={`inline-flex items-center text-sm font-medium ${service.color}`}>
                  Learn more
                  <svg
                    className={`ml-2 h-4 w-4 transition-transform group-hover:translate-x-1`}
                    fill="none"
                    viewBox="0 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              <div 
                className={`absolute right-0 top-0 h-full w-1/2 bg-gradient-to-r from-transparent ${service.bgColor} opacity-0 transition-opacity group-hover:opacity-10`}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}