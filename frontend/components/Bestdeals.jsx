import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

function Bestdeals() {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      const productdata = [...allProducts].sort(
        (a, b) => b.total_sell - a.total_sell,
      );
      const firstFive = productdata.slice(0, 5);
      setData(firstFive);
    }
  }, [allProducts]);

  return (
    <div>
      <div className="section">
        <h1 className="heading">Best Deals</h1>
        <div className="mb-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data && data.length > 0 ? (
            data.map((item, index) => <ProductCard data={item} key={index} />)
          ) : (
            <div className="col-span-full text-center text-gray-600">
              No best deals available at the moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bestdeals;
