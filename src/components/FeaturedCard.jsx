import { Button, Chip } from "@heroui/react";
import { Layers2, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedCard = ({ room }) => {
  const {
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
    <div className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(255,0,110,0.3)]">
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={roomImage}
          alt="room Image"
          height={400}
          width={640}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 right-3">
          <Chip
            size="sm"
            color="primary"
            variant="solid"
            className="font-bold text-[10px] uppercase"
          >
            Premium
          </Chip>
        </div>
      </div>
      <div className="p-5 flex flex-col grow space-y-3">
        <h4 className="font-bold text-slate-900  text-2xl line-clamp-2 group-hover:text-[#FF006E] transition-colors">
          {roomName}
        </h4>
        <p>{shortDescription}</p>
        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
          <div className="flex items-center gap-1 text-[16px] font-medium text-slate-600">
            {/* <Users className="w-3 h-3" /> */}
            <Layers2 className="w-6 h-6" />
            <span>{floor}</span>
          </div>
          <div className="flex items-center gap-1 text-[16px] font-medium text-slate-600">
            <Users className="w-6 h-6" />
            <span>{seatCapacity}</span>
          </div>
          <span className="font-medium text-[#FF006E]">{hourlyRate}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {amenities?.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-slate-600 border border-slate-200 rounded-full bg-white"
            >
              {item}
            </span>
          ))}
        </div>

        {/* btn */}
        <Link href="#">
          <Button
            fullWidth
            className="font-normal text-[16px] rounded-full px-8 shadow-lg bg-linear-to-br from-[#FF006E] via-[#FF3D7F] to-[#FF5E62] shadow-pink-600/20"
          >
            See Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;
