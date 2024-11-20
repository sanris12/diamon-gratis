import connectDB from "@/lib/db";
import Lokasi from "@/lib/models/lokasi";

export async function GET(request) {
  const params = request.nextUrl.searchParams;

  const latitude = params.get("latitude");
  const longitude = params.get("longitude");
  // console.log(latitude, longitude);
  // console.log("hello");
  await connectDB();

  try {
    const addLocation = await Lokasi.create({
      latitude: latitude,
      longitude: longitude,
    });

    return Response.json({
      status: 200,
      message: "berhasil manambahkan lokasi",
      data: addLocation,
    });
  } catch (error) {
    return Response.json({ status: 400, message: error.message });
  }
}
