import EachProduct from "../EachProduct/EachProduct";

const Products = ({ data, ff }) => {
  console.log(ff, data);
  return (
    <div className="flex flex-col flex-wrap mx-auto md:w-4/5 items-center justify-center md:flex-row sm2:flex-row">
      {ff.length !== 0
        ? ff.map((product) => (
            <EachProduct name={product.name} key={product.id} />
          ))
        : data.map((product) => (
            <EachProduct name={product.name} key={product.id} />
          ))}
    </div>
  );
};

export default Products;
