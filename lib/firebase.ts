import { initializeApp } from "firebase/app"
import { getDatabase, ref, get } from "firebase/database"
import type { Tour, Equipment } from "./types"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

function convertToArray(data: any) {
  if (!data) return []

  return Object.entries(data).map(([id, item]) => ({
    id,
    ...(item as any),
  }))
}

// Get diving tours
export async function getDivingTours(): Promise<Tour[]> {
  const divingRef = ref(database, "diving")
  const snapshot = await get(divingRef)

  if (snapshot.exists()) {
    return convertToArray(snapshot.val())
  }

  return []
}

// Get fishing tours
export async function getFishingTours(): Promise<Tour[]> {
  const fishingRef = ref(database, "fishing")
  const snapshot = await get(fishingRef)

  if (snapshot.exists()) {
    return convertToArray(snapshot.val())
  }

  return []
}

// Get sunset tours
export async function getSunsetTours(): Promise<Tour[]> {
  const sunsetRef = ref(database, "sunset")
  const snapshot = await get(sunsetRef)

  if (snapshot.exists()) {
    return convertToArray(snapshot.val())
  }

  return []
}

// Get turtle watching tours
export async function getTurtleTours(): Promise<Tour[]> {
  const turtlesRef = ref(database, "turtles")
  const snapshot = await get(turtlesRef)

  if (snapshot.exists()) {
    return convertToArray(snapshot.val())
  }

  return []
}

// Get whale watching tours
export async function getWhaleTours(): Promise<Tour[]> {
  const whalesRef = ref(database, "whales")
  const snapshot = await get(whalesRef)

  if (snapshot.exists()) {
    return convertToArray(snapshot.val())
  }

  return []
}

// Get rental equipment
export async function getRentalEquipment(): Promise<Equipment[]> {
  const rentalRef = ref(database, "rental")
  const snapshot = await get(rentalRef)

  if (snapshot.exists()) {
    return convertToArray(snapshot.val())
  }

  return []
}

// Get featured tours
export async function getFeaturedTours(): Promise<Tour[]> {
  const categories = ["diving", "fishing", "sunset", "turtles", "whales"]
  let featuredTours: Tour[] = []

  for (const category of categories) {
    const categoryRef = ref(database, category)
    const snapshot = await get(categoryRef)

    if (snapshot.exists()) {
      const tours = convertToArray(snapshot.val())
      // Add category to each tour
      const toursWithCategory = tours.map((tour) => ({
        ...tour,
        category,
      }))
      featuredTours = [...featuredTours, ...toursWithCategory]
    }
  }

  return featuredTours
}

// Get a specific tour by ID and category
export async function getTourById(category: string, id: string): Promise<Tour | null> {
  const tourRef = ref(database, `${category}/${id}`)
  const snapshot = await get(tourRef)

  if (snapshot.exists()) {
    return {
      id,
      ...snapshot.val(),
      category,
    }
  }

  return null
}

