import Banner from "@/components/Banner";
import FeaturedRooms from "@/components/FeaturedRooms";
import StaticFirst from "@/components/StaticFirst";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <StaticFirst></StaticFirst>
      <FeaturedRooms></FeaturedRooms>
    </div>
  );
}
