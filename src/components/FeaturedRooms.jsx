import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import FeaturedCard from "./FeaturedCard";
import { fetchFeaturedRooms } from "@/lib/rooms/data";

// import FeaturedCard from "./FeaturedCard";

const FeaturedRooms = async () => {
  const rooms = await fetchFeaturedRooms();
  console.log(rooms);
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-[#FF006E] font-bold uppercase tracking-widest text-sm">
              Top Rated
            </h2>
            <h3 className="text-4xl font-bold text-[#1E103F]">
              Featured Rooms
            </h3>
            <p className="text-slate-500 max-w-xl">
              Discover our most popular and highly rated study spaces designed
              for focus, comfort, and productivity.
            </p>
          </div>
          <Button
            variant="flat"
            color="primary"
            className="rounded-full text-[14px] font-bold group"
          >
            View All Rooms{" "}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms?.map((room) => (
            <FeaturedCard key={room?._id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
