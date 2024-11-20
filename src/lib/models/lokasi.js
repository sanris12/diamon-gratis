import mongoose from "mongoose";

const lokasiSchema = new mongoose.Schema(
  {
    latitude: String,
    longitude: String,
  },
  { timestamps: true }
);

// cek apakah model sudah ada
const Lokasi = mongoose.models.Lokasi || mongoose.model("Lokasi", lokasiSchema);

export default Lokasi;
