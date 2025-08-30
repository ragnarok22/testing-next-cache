export default async function Home() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search", {
    next: {
      revalidate: 30,
    }
  });

  const result = await response.json()
  const catUrl = result[0].url;

  return (
    <div className="font-sans flex justify-center items-center h-screen">
      <img src={catUrl} className="w-60 h-auto object-fill" />
    </div>
  );
}
