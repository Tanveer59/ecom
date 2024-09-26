'use client'

import { useState } from "react"
import { Star, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"


// Define Product type to represent a product's data structure
type Product = {
  id:number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number,
    count: number
  }
}

// ProductComponent now accepts product details and openModal as props
export function ProductComponent({ product, openModal }: { product: Product, openModal: (product: Product) => void }) {

  const state = useSelector((state:any) => state.ChangeContent.value);
  return (
     
    <Card className="rounded-lg min-w-[100vw] max-h-[600px] min-h-[600px] max-w-full md:min-w-[250px] md:max-w-[200px] lg:min-w-[230px] lg:max-w-[230px] xl:max-w-[350px] 2xl:min-w-[350px] md:min-h-[400px] relative cursor-pointer" onClick={() => openModal(product)}>
      <CardHeader className="p-0" >
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-h-[400px] object-cover rounded-t-lg"
        />
        <Badge className="absolute top-2 right-2 bg-green-500">New</Badge>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2 outfit-regular">{product.title}</CardTitle>
        <div className="flex items-center mb-2">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Number(product.rating.rate) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.rating.rate})</span>
        </div>
        <div className="text-xl barlow-medium mb-2 flex items-center gap-2">
          <span className="text-gray-400 text-sm line-through outfit-semibold">
            ${Math.floor(product.price + 100)}
          </span>
          <span className="outfit-medium">
            ${product.price}
          </span>
          <span className="bg-red-600 text-white px-[5px] text-sm outfit-semibold">
            Save $ 100
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Components({ product }: { product: Product }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const openModal = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }
  
  const staggerDelay = 0.2; // Define the delay factor

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full">
      <motion.div
          key={product.id}  // Use a unique key per product
          initial={{ opacity: 0, y: 50 }}  // Start 50px below with opacity 0
          animate={{ opacity: 1, y: 0 }}  // End at its original position with opacity 1
          transition={{
            delay: product.id * staggerDelay,  // Stagger delay
            duration: 0.8,                     // Duration of the transition
          }}
        >
        <ProductComponent product={product} openModal={openModal} />
      </motion.div>

      </div>

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            animate={{ x: 100 }}
            transition={{ delay: 0 }}>
            <div className="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-end mb-4">
                <Button variant="ghost" size="icon" onClick={closeModal}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <h1>We Apologize for the inconvenience</h1>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
