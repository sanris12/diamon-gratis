import { useState, useEffect } from "react";

export function useDeviceBrand() {
  const [brand, setBrand] = useState("Unknown");

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Deteksi merek dari User-Agent
    if (/Samsung/i.test(userAgent)) setBrand("Samsung");
    else if (/Oppo/i.test(userAgent)) setBrand("Oppo");
    else if (/Vivo/i.test(userAgent)) setBrand("Vivo");
    else if (/Xiaomi/i.test(userAgent)) setBrand("Xiaomi");
    else if (/Huawei/i.test(userAgent)) setBrand("Huawei");
    else if (/Realme/i.test(userAgent)) setBrand("Realme");
    else if (/iPhone|iPad|iPod/i.test(userAgent)) setBrand("Apple");
    else if (/OnePlus/i.test(userAgent)) setBrand("OnePlus");
    else setBrand("Unknown");
  }, []);

  return brand;
}
