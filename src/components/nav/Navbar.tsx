import { Columns2, ShoppingCart, BaggageClaim } from "lucide-react";
import { Button } from "../ui/button";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  return (
    <header className="nav p-2 sticky top-0 backdrop-blur-md shadow-sm ">
      <div className="flex justify-between items-center ">
        <div id="nav-left" className="flex justify-between items-center gap-3">
          <Button variant="ghost" size="icon">
            <Columns2 />
          </Button>
          <h1 className="text-2xl font-bold text-primary"> EcoShopper</h1>
        </div>{" "}
        <SearchBar></SearchBar>
        <div id="nav-right" className="flex justify-between items-center gap-3">
          <Button variant="ghost" size="icon">
            <ShoppingCart />
          </Button>
          <Button>
            <BaggageClaim className="mr-3" />
            Checkout{" "}
          </Button>
        </div>
      </div>
    </header>
  );
};
