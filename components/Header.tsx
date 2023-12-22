"use client";

import Navbar from "./Navbar";
import SearchField from "./SearchField";
import { faculties, institutions, venues, words } from "@/constants";

const Header = () => {
  const data = [
    {
      label: "Faculties",
      type: "faculty" as const,
      data: faculties?.map((faculty) => ({
        name: faculty.name,
      })),
    },
    {
      label: "Institutions",
      type: "institution" as const,
      data: institutions?.map((institution) => ({
        name: institution.name,
      })),
    },
    {
      label: "Venues",
      type: "venue" as const,
      data: venues?.map((venue) => ({
        name: venue.name,
      })),
    },
    {
      label: "Concepts",
      type: "concept" as const,
      data: words?.map((word) => ({
        name: word.text,
      })),
    },
  ];

  return (
    <div className="bg-headerBackground w-full h-screen bg-cover bg-center">
      <div className="w-full h-full flex flex-col backdrop-blur-sm">
        <Navbar />
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[50%] flex flex-row items-center justify-center bg-white dark:bg-[#313338] p-2 rounded-full">
            <SearchField data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
