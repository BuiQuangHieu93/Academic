"use client";

import { ModeToggle } from "./mode-toggle";
import { DividerVerticalIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div className={`flex flex-row ${isOpen ? "w-[345px]" : "w-full"}`}>
      <div
        className={`bg-[#D8D8D8] dark:bg-gray-700 dark:text-gray-200 text-black p-4 h-screen flex-col justify-between w-full ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <div>Filter</div>
        <ModeToggle />
      </div>
      <div className="flex h-full items-center justify-center opacity-100">
        <Button
          className="bg-transparent hover:bg-transparent"
          onClick={onClose}
        >
          <div>
            {isOpen ? (
              <DividerVerticalIcon className="w-10 h-10 text-gray-400 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-900" />
            ) : (
              <ChevronRightIcon className="w-10 h-10 text-gray-400 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-900" />
            )}
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
