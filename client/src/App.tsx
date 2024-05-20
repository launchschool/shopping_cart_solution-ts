import AddProductForm from "./components/AddProductForm";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div id="app">
      <Header />
      <main>
        <ProductListing />
        <AddProductForm />
      </main>
    </div>
  );
}

export default App;
