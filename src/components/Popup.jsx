import React from "react";

const Popup = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Pemberitahuan Penting</h2>
        <p className="mb-4">
          Event ini khusus untuk wilayah Karawang. untuk memverifikasi
          penggungga nyalakan <span className="font-bold"> GPS</span> Anda dan
          <span className="font-bold"> refrehs </span>halaman ini.
        </p>

        <hr />
        <p>
          jika anda tanpa sengaja memblok lokasi. klik gambar gembok{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-lock"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>{" "}
          yang ada pada atas web, setelah itu klik{" "}
          <span className="font-bold">Izin</span> dan klik{" "}
          <span className="font-bold"> izinkan lokasi </span>
        </p>
        <hr />
        <p className="text-zinc-500 pt-10">
          event terbatas hanya sampai 25 novermber 2024.
        </p>
        <div className="flex justify-between"></div>
      </div>
    </div>
  );
};

export default Popup;
