import { Navbar } from "./components/nav/Navbar";
import { Progress } from "./components/ui/progress";

function App() {
  return (
    <>
      <main className="">
        <Navbar />

        <section className="max-w-md">
          <h1>Heading</h1>
          <Progress value={23} />

          <p>
            arcu. Fusce vehicula vestibulum sem, vitae tincidunt urna. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Vivamus euismod
            nec est id consectetur. Vivamus sagittis ligula ac lobortis
            efficitur. Nulla feugiat ac risus gravida dignissim. Donec gravida,
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
