"use server"

import { getDatabase, ref, push } from "firebase/database"
import { initializeApp } from "firebase/app"
import type { BookingRequest, RentalRequest } from "./types"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export async function submitBookingRequest(booking: BookingRequest) {
  try {
    const bookingsRef = ref(database, "bookings")

    // Format the data for Firebase
    const bookingData = {
      ...booking,
      date: booking.date.toISOString(),
      timestamp: new Date().toISOString(),
      status: "pending",
    }

    // Push the booking to Firebase
    await push(bookingsRef, bookingData)

    return { success: true }
  } catch (error) {
    console.error("Error submitting booking:", error)
    return { success: false, error }
  }
}

export async function submitRentalRequest(rental: RentalRequest) {
  try {
    const rentalsRef = ref(database, "rental_requests")

    // Format the data for Firebase
    const rentalData = {
      ...rental,
      startDate: rental.startDate.toISOString(),
      endDate: rental.endDate.toISOString(),
      timestamp: new Date().toISOString(),
      status: "pending",
    }

    // Push the rental request to Firebase
    await push(rentalsRef, rentalData)

    return { success: true }
  } catch (error) {
    console.error("Error submitting rental request:", error)
    return { success: false, error }
  }
}

