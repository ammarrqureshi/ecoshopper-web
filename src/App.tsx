import { BaggageClaim, Columns2, ShoppingCart } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  return (
    <>
      <main className="">
        <div className="nav p-2 sticky top-0 backdrop-blur-md shadow-sm ">
          <div className="flex justify-between items-center gap-8">
            <div
              id="nav-left"
              className="flex justify-between items-center gap-3"
            >
              <Button variant="ghost" size="icon">
                <Columns2 />
              </Button>
              <h1 className="text-lg font-bold text-primary"> EcoShopper</h1>
            </div>{" "}
            <Input placeholder="Search" value="" />
            <div
              id="nav-right"
              className="flex justify-between items-center gap-3"
            >
              <Button variant="ghost" size="icon">
                <ShoppingCart />
              </Button>
              <Button>
                <BaggageClaim className="mr-3" />
                Checkout{" "}
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-20">
          <h1>Heading</h1>

          <p>
            arcu. Fusce vehicula vestibulum sem, vitae tincidunt urna. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Vivamus euismod
            nec est id consectetur. Vivamus sagittis ligula ac lobortis
            efficitur. Nulla feugiat ac risus gravida dignissim. Donec gravida,
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
