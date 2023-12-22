"use client";
import { ReactNode, useState } from "react";
import Sidebar from "../Sidebar";

export const ChildrenProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex flex-row w-full">
      <div className="flex fixed h-screen z-50">
        <Sidebar isOpen={isOpen} onClose={toggleSidebar} />
      </div>
      <section className={`${isOpen ? "ml-[272px]" : ""} w-full`}>
        {children}
      </section>
    </main>
  );
};
