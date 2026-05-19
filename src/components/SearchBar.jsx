"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState();
  const router = useRouter();
  const searchParams = useSearchParams();
  // console.log(searchParams);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    // ?filter= ?searchTerm=node
    if (search) {
      params.set("searchTerm", search);
    } else {
      params.delete("searchTerm");
    }
    router.push(`/courses?${params.toString()}`);
  };

  return (
    <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-red-600/10 focus-within:border-[#FF006E] transition-all overflow-hidden">
      <div className="pl-5 text-slate-400">
        <Search className="w-5 h-5" />
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search for rooms (e.g.Startup Space , Focus Room...)"
        className="flex-1 h-14 px-4 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
      />

      <button
        onClick={handleSearch}
        className="h-10 px-6 mr-2 rounded-xl bg-linear-to-r from-[#FF006E] to-[#FF5E62] text-white font-semibold hover:bg-red-700 transition-colors"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
