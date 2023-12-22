"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface SearchProps {
  data: {
    label: string;
    type: "faculty" | "institution" | "venue" | "concept";
    data:
      | {
          name: string;
        }[]
      | undefined;
  }[];
}

const SearchField = ({ data }: SearchProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const onClick = ({
    name,
    type,
  }: {
    name: string;
    type: "faculty" | "institution" | "venue" | "concept";
  }) => {
    setOpen(false);

    //   if (type === "member") {
    //     return router.push(`/servers/${params?.serverId}/conversations/${id}`);
    //   }

    //   if (type === "channel") {
    //     return router.push(`/servers/${params?.serverId}/channels/${id}`);
    //   }
  };
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full transition focus-visible:ring-transparent border-none focus-visible:ring-offset-0"
      >
        <Search className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
        <p className="font-semibold text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition">
          Search
        </p>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search all faculties, institutions, venues and concept" />
        <CommandList>
          <CommandEmpty>No Results found</CommandEmpty>
          {data.map(({ label, type, data }) => {
            if (!data?.length) return null;

            return (
              <CommandGroup key={label} heading={label}>
                {data?.map(({ name }) => {
                  return (
                    <CommandItem
                      key={name}
                      onSelect={() => onClick({ name, type })}
                    >
                      <span>{name}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            );
          })}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchField;
