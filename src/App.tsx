import { BaggageClaim, Columns2 } from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <main className="">
        <div className="nav p-2 sticky top-0 backdrop-blur-md shadow-sm ">
          Hello weorl:d
          <Button variant="secondary" size="icon">
            <Columns2 />
          </Button>
          <Button>
            <BaggageClaim className="mr-3" />
            Checkout{" "}
          </Button>
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
