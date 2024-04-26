import "./Product.css";

const Products = ({ result }) => {
  return (
    <>
      <section className="  grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">{result}</section>
    </>
  );
};

export default Products;
