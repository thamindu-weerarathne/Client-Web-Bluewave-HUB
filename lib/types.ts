export interface Tour {
  id: string
  name: string
  location: string
  duration: string
  price: number
  status: string
  description: string
  image?: string
  category?: string

  // Diving specific fields
  max_depth?: string
  certification_required?: string
  equipment_included?: boolean

  // Fishing specific fields
  boat_type?: string
  max_capacity?: string
  fishing_equipment?: string

  // Sunset specific fields
  sunset_time?: string
  inclusions?: string
  exclusions?: string

  date_added: string
}

export interface Equipment {
  id: string
  name: string
  description: string
  category: string
  rate: number
  stock: number
  status: string
  image?: string
  date_added: string
}

export interface BookingRequest {
  name: string
  email: string
  phone: string
  date: Date
  participants: string
  message?: string
  tourId: string
  tourName: string
  tourCategory: string
}

export interface RentalRequest {
  name: string
  email: string
  phone: string
  equipmentId: string
  equipmentName: string
  startDate: Date
  endDate: Date
  message?: string
}

