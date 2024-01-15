import { Input } from "@ui/input";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-lg">
      <Input className="pl-10" placeholder="Search" />
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-input" />
    </div>
  );
};
