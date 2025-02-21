import Image from "next/image";

const listings = [
  { id: 1, title: "Ellijay, Georgia", image: "/images/cabin1.jpg" },
  { id: 2, title: "Cherry Log, Georgia", image: "/images/cabin2.jpg" },
  { id: 3, title: "Blue Ridge, Georgia", image: "/images/cabin3.jpg" },
  { id: 4, title: "Atlanta, Georgia", image: "/images/cabin4.jpg" },
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

      {/* Featured Listings Title */}
      <h2 className="text-3xl font-bold my-5">Featured Listings</h2>

      {/* Flex container to display images side by side */}
      <div className="flex flex-nowrap gap-6 overflow-x-auto p-4 w-full">
        {listings.map((listing) => (
          <div key={listing.id} className="flex-none">
            <Image
              src={listing.image}
              alt={listing.title}
              width={320}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
