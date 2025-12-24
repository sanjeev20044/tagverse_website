import mongoose from "mongoose";


let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI!;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI not defined");
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    console.log("📡 Attempting to connect to MongoDB with URI:", MONGODB_URI.replace(/:([^@]+)@/, ":****@"));
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ New connection to MongoDB established");
      return mongoose;
    }).catch(err => {
      console.error("❌ MongoDB connection failed:", err.message);
      cached.promise = null; // Clear failed promise to allow retry
      throw err;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
