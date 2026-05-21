import { auth } from "@/lib/auth";
import { Button, Chip } from "@heroui/react";
import { BookOpen, Clock, BarChart, Users, Layers2 } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const fetchSingleRoom = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`, {
    headers: {
      authorization: `Bearer ${token}` || "",
    },
  });
  const data = await res.json();
  return data || {};
};

export default async function RoomDetails({ params }) {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(), // headers containing the user's session token
  });
  console.log(token, "token from Room details");

  const room = await fetchSingleRoom(id, token);
  const {
    _id,
    roomName,
    roomImage,
    seatCapacity,
    hourlyRate,
    floor,
    amenities,
    shortDescription,
  } = room;
  console.log(room);

  return (
    <div className="max-w-7xl mx-auto px-4 mb-4 py-12 sm:px-6 lg:px-8">
      <Link href="#" className="flex gap-2 mb-6">
        {" "}
        <FaArrowLeft /> Go Back
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
        <div className="lg:col-span-2 space-y-8">
          <div className="relative group overflow-hidden rounded shadow-2xl aspect-video">
            <Image
              src={roomImage}
              alt="room Image"
              fill
              className="object-cover transform transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-black text-[#1E103F] tracking-tight leading-tight">
              {roomName}
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed">
              {shortDescription}
            </p>
          </div>
        </div>

        {/* right side bar */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-2xl space-y-8">
            <div className="space-y-2">
              <p className="text-xl font-bold text-[#FF006E] tracking-widest">
                {hourlyRate}
              </p>
              <p className="text-[16px] font-mono text-slate-500 italic">
                "It's a great place to study and have discussions quietly"
              </p>

              <div className="grid grid-cols- gap-4 pt-8">
                <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                  <div className="flex items-center gap-1 text-[16px] font-medium text-slate-600">
                    <Layers2 className="w-6 h-6" />
                    <span>{floor}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[16px] font-medium text-slate-600">
                    <Users className="w-6 h-6" />
                    <span>{seatCapacity}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {amenities?.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-[16px] font-medium text-slate-700 border border-slate-200 rounded-full bg-white"
                >
                  {item}
                </span>
              ))}
            </div>
            {/* href={`/rooms/${_id}`} */}
            <Link href="#">
              <Button
                fullWidth
                className="font-normal text-[16px] rounded-full px-8 shadow-lg bg-linear-to-br from-[#FF006E] via-[#FF3D7F] to-[#FF5E62] shadow-pink-600/20"
              >
                Book Now
              </Button>
            </Link>
            <p>Book a room. Focus better.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const NotFound = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center">
      <h2 className="text-2xl font-bold text-red-500">Not found anything</h2>
      <p className="text-muted-foreground mt-2">
        Please log in to view protected details.
      </p>
    </div>
  );
};
