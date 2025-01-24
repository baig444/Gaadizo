import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { motion } from "framer-motion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { OfferBanners } from "../components/offer-banners"
import { ServicesSection } from "../components/services-section"
import { ModernFaqSection } from "../components/modern-faq-section"
import { CustomServicesComponent } from "../components/custom-services"
import { AppDownloadComponent } from "../components/app-download"
import { SparePartsSection } from "../components/spare-parts-section"
import { PriceComparison } from "../components/price-comparison"
import { WhyChooseSection } from "../components/why-choose-section"
import { ModernFooter } from "../components/modern-footer"
import { CarServiceFormComponent } from "../components/car-service-form"

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)


  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Mumbai",
      avatar: "/placeholder.svg?height=40&width=40",
      comment: "Gaadizo has completely transformed my car maintenance experience. Their service is quick, reliable, and incredibly convenient. I'm never going back to traditional garages!"
    },
    {
      name: "Priya Patel",
      location: "Delhi",
      avatar: "/placeholder.svg?height=40&width=40",
      comment: "I was skeptical at first, but Gaadizo exceeded all my expectations. The technicians are highly skilled, and the transparent pricing is a breath of fresh air. Highly recommended!"
    },
    {
      name: "Amit Kumar",
      location: "Bangalore",
      avatar: "/placeholder.svg?height=40&width=40",
      comment: "As a busy professional, Gaadizo's doorstep service is game-changer. They work around my schedule, and the quality of top-notch. It's car care made easy!"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  const cities = [
    "Delhi", "Gurgaon", "Noida", "Ghaziabad",
    "Mumbai", "Pune", "Hyderabad", "Bangalore"
  ]

  const carBrands = {
    "Maruti Suzuki": ["Swift", "Baleno", "Dzire", "Brezza", "Ertiga"],
    "Hyundai": ["i20", "Venue", "Creta", "Verna", "Tucson"],
    "Honda": ["City", "Amaze", "WR-V", "Jazz", "Civic"],
    "Toyota": ["Innova", "Fortuner", "Glanza", "Urban Cruiser", "Camry"],
    "Tata": ["Nexon", "Harrier", "Safari", "Altroz", "Punch"],
    "Mahindra": ["XUV700", "Thar", "Scorpio", "XUV300", "Bolero"],
  }

  return (
    <div className="min-h-screen bg-white relative w-full">
      {/* <OfferBanners/> */}
      {/* Hero Section */}
       {/* Hero Section */}
       <div className="grid lg:grid-cols-2 gap-32 md:p-8  h-[100vh] items-center"
       style={{
        backgroundImage: `url('https://images.pexels.com/photos/4489729/pexels-photo-4489729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
       }}
       >
          <div className="space-y-4 text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Experience The Best<br />
              Car Services In
            </h1>
            <p className="text-xl text-muted-foreground">
              Get instant quotes for your car service
            </p>
          </div>
            
          <div className="space-y-4 flex justify-end fixed top-28 right-10 z-50 w-full">
          <CarServiceFormComponent/>
            {/* <Select defaultValue={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger>
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                {cities?.map(city => (
                  <SelectItem key={city} value={city}>{city}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Car Brand Selection */}
            {/* <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger>
                <SelectValue placeholder="SELECT CAR BRAND" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(carBrands)?.map(brand => (
                  <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                ))}
              </SelectContent>
            </Select> */}

            {/* Car Model Selection - Only shows when brand is selected */}
            {/* {selectedBrand ? (
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="SELECT CAR MODEL" />
                </SelectTrigger>
                <SelectContent>
                  {carBrands[selectedBrand]?.map(model => (
                    <SelectItem key={model} value={model}>{model}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ):(null)} */}

            {/* <Input 
              placeholder="ENTER MOBILE NUMBER" 
              type="tel"
              className="h-12"
              maxLength={10}
            /> */}

            {/* <Button className="w-full h-12 text-lg bg-[#3399FF]">
              CHECK PRICES FOR FREE
            </Button> */}

            {/* <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-green-500 text-green-500" />
                <span className="font-bold text-xl">4.7<span className="text-sm">/5</span></span>
                <span className="text-sm text-muted-foreground">
                  Based on 150000+ Reviews
                </span>
              </div>
              <div className="text-right">
                <div className="font-bold">2 Million+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div> */}
          </div>
        </div>
      <ServicesSection/>
       {/* Testimonials Section */}
       <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
         <div className="mb-8">
         <h2 className="text-4xl font-bold mb-2">What Our Customers Say</h2>
         <div className="w-12 h-1 bg-red-500" />
         </div>
          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} />
                  <AvatarFallback>{testimonials[currentTestimonial].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">{testimonials[currentTestimonial].location}</div>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonials[currentTestimonial].comment}</p>
            </motion.div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" size="icon" onClick={prevTestimonial}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextTestimonial}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ModernFaqSection/>
      <CustomServicesComponent/>
      <AppDownloadComponent/>
      <SparePartsSection/>
      <PriceComparison/>
      <WhyChooseSection/>
      <ModernFooter/>
    </div>
  )
}