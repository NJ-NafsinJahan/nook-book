import SearchBar from "./SearchBar";

const AllRoomsHeader = () => {
  return (
    <header className="bg-white border-b border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Explore Our{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-[#FF006E] to-[#FF5E62]">
            Premium
          </span>{" "}
          Rooms
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Discover quiet, comfortable, and fully equipped spaces designed for
          productive study sessions.
        </p>

        <div className="max-w-2xl mx-auto pt-4">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default AllRoomsHeader;
