import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 mx-auto my-4">
      <Input
        type="email"
        placeholder="Email"
        className="bg-white dark:bg-dark-500"
      />
      <Button type="submit" size={"icon"}>
        <SearchIcon className="h-5 w-5" />
      </Button>
    </div>
  );
};
export default Search;
