import AllRoomsHeader from "@/components/AllRoomsHeader";
import FeaturedCard from "@/components/FeaturedCard";
import { Button } from "@heroui/react";
import { DoorOpen, Filter } from "lucide-react";
import React from "react";

const fetchRooms = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`);
  const data = await res.json();
  return data || [];
};

const RoomsPage = async () => {
  const rooms = await fetchRooms();
  console.log(rooms);
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <AllRoomsHeader></AllRoomsHeader>

      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-[#1D1B36] flex items-center gap-2">
            <DoorOpen className="w-12 h-12 text-[#FF006E]" />
            All Rooms
          </h2>
          <Button
            variant="outline"
            startContent={<Filter className="w-4 h-4" />}
            className="rounded-full font-bold"
          >
            Filters
          </Button>
        </div>

        {/* all rooms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms?.map((room) => (
            // <div key={room?._id}>
            //   <p>{room.roomName}</p>
            // </div>
            <FeaturedCard key={room._id} room={room}></FeaturedCard>
          ))}
        </div>
      </main>
    </div>
  );
};

export default RoomsPage;
