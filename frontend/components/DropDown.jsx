import { useNavigate } from "react-router-dom";

function DropDown({ categoriesData, setDropDown }) {
  const navigate = useNavigate();
  const handleSubmit = (item) => {
    navigate(`/products?category=${item.title}`);
    setDropDown(false);
    window.location.reload();
  };

  return (
    <div className="pb-4 md:w-[190px] lg:w-[270px] bg-white absolute top-[72px] z-30 rounded-b-md shadow-sm overflow-y-auto">
      {categoriesData &&
        categoriesData.map((item, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer hover:bg-gray-100"
            onClick={() => handleSubmit(item)}
          >
            <img
              src={item.image_Url}
              className="w-6 h-6 object-contain ml-2.5 select-none"
              alt=""
            />
            <h3 className="m-3 select-none">{item.title}</h3>
          </div>
        ))}
    </div>
  );
}

export default DropDown;