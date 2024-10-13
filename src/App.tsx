import "./assets/css/main.css";
import { FooterComponent } from "./components/footerComponent";
import { ProductsComponent } from "./components/productsComponent";
// import { ToggleComponent } from "./components/toggleComponent";

function App() {
  return (
    <>
      <section className="container mx-auto mt-5">
        <h3 className="w-fit mx-auto uppercase text-[1.8rem] font-bold">
          Привет
        </h3>
      </section>
      {/* <ToggleComponent /> */}
      <ProductsComponent />
      <FooterComponent />
    </>
  );
}

export default App;
