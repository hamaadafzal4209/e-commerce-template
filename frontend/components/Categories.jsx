import { brandingData, categoriesData } from "../static/data";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  return (
    <div className="my-12">
      {/* Branding products */}
      <div className="section bg-white shadow-sm">
        <div className="grid-container p-6 rounded-md mb-12">
          {brandingData &&
            brandingData.map((item, index) => (
              <div className="flex items-start" key={index}>
                {item.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* product categories */}
      <div className="section bg-white shadow-sm">
        <div className="grid-container p-6 rounded-md">
          {categoriesData &&
            categoriesData.map((item) => {
              const handleSubmit = (item) => {
                navigate(`/products?category=${item.title}`);
              };
              return (
                <div
                  className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
                  key={item.id}
                  onClick={() => handleSubmit(item)}
                >
                  <h5 className={`text-[18px] leading-[1.3]`}>{item.title}</h5>
                  <img
                    src={item.image_Url}
                    className="w-[100px] object-cover"
                    alt=""
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
