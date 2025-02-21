import Image from "next/image";

const listings = [
  { id: 1, title: "Ellijay, Georgia", distance: "63 miles away", date: "Mar 29 – Apr 3", price: "$258 night", rating: 5.0, image: "/images/cabin1.jpg" },
  { id: 2, title: "Cherry Log, Georgia", distance: "73 miles away", date: "Mar 23 – 28", price: "$254 night", rating: 5.0, image: "/images/cabin2.jpg" },
  { id: 3, title: "Blue Ridge, Georgia", distance: "70 miles away", date: "Mar 2 – 7", price: "$167 night", rating: 5.0, image: "/images/cabin3.jpg" },
  { id: 4, title: "Atlanta, Georgia", distance: "3 miles away", date: "Mar 2 – 7", price: "$225 night", rating: 4.96, image: "/images/cabin4.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Navbar */}
      <header className="flex justify-between items-center p-5 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-red-500">airbnb</h1>
        <input
          type="text"
          placeholder="Search destinations"
          className="border border-gray-300 p-2 rounded-lg w-96"
        />
        <div className="flex gap-3 items-center">
          <button className="border p-2 rounded-lg">Filters</button>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>
      </header>

      {/* Listings Scrollable Section */}
      <h2 className="text-3xl font-bold my-5">Featured Listings</h2>
      <div className="relative w-full">
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide p-4">
          {listings.map((listing) => (
            <div key={listing.id} className="min-w-[300px] bg-white p-4 rounded-lg shadow-md">
              <Image src={listing.image} alt={listing.title} width={300} height={200} className="rounded-lg w-full h-48 object-cover" />
              <h3 className="text-lg font-semibold mt-2">{listing.title}</h3>
              <p className="text-gray-500">{listing.distance}</p>
              <p className="text-gray-500">{listing.date}</p>
              <p className="text-gray-900 font-bold">{listing.price}</p>
              <p className="text-yellow-500">⭐ {listing.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
