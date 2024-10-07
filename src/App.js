import ProductData, { Categories, CategoriesEspecific, ProductLimit } from "./Data/productData";

function App() {
  return (<>
    <p>Hola a todos</p>
    <ProductData/>
    <Categories/>
    <ProductLimit/>
    <CategoriesEspecific categoria ="jewelery" />
    </>
  );
}

export default App;
