export default async function sendIpx(latitude, longitude) {
  const res = await fetch("http://localhost:3000/api/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ latitude, longitude }),
  });
  const data = await response.json();
  console.log(data);
}
