"use-client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import Loader from "../../Loader";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { server } from "../../../server";
import { toast } from "react-toastify";

function AllCoupons() {
  const { products } = useSelector((state) => state.products);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [value, setValue] = useState(null);
  const [coupouns, setCoupouns] = useState([]);
  const [minAmount, setMinAmout] = useState(null);
  const [maxAmount, setMaxAmount] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${server}/couponscode/get-coupons/${seller._id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setIsLoading(false);
        setCoupouns(res.data.couponCodes);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, [dispatch, seller._id]);

  const handleDelete = async (id) => {
    axios
      .delete(`${server}/couponscode/delete-coupon/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        toast.success("Coupon code deleted succesfully!");
      });
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/couponscode/create-coupon`,
        {
          name,
          minAmount,
          maxAmount,
          selectedProducts,
          value,
          shopId: seller._id,
        },
        { withCredentials: true },
      )
      .then(() => {
        toast.success("Coupon code created successfully!");
        setModalOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const columns = [
    { field: "id", headerName: "Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Coupon Code",
      minWidth: 180,
      flex: 1,
    },
    {
      field: "price",
      headerName: "Value",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Delete",
      flex: 0.5,
      minWidth: 100,
      headerName: "Delete",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  coupouns &&
    coupouns.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: item.value + " %",
        sold: 10,
      });
    });

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="relative">
        <div className="absolute right-0 top-4">
          <Button
            variant="contained"
            className="font-semibold"
            onClick={() => setModalOpen(true)}
          >
            Create Coupon Code
          </Button>
        </div>
      </div>
      <div className="mx-4 mt-16 w-full overflow-hidden bg-white pt-1">
        <Box
          sx={{ height: { xs: 300, sm: 400 }, width: "100%" }}
          className="overflow-auto"
        >
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </Box>
      </div>
      {modalOpen && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-75"
        >
          <div className="relative flex w-full max-w-2xl items-center justify-center p-4">
            <div className="custom-scrollbar relative h-[90vh] overflow-y-auto rounded-lg bg-white shadow md:h-[70vh] dark:bg-gray-700">
              <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Create Coupon Code
                </h3>
                <button
                  type="button"
                  className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setModalOpen(false)}
                >
                  <IoClose size={30} />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Coupon Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your coupon code name..."
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="value"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Discount Percentenge{" "}
                    </label>
                    <input
                      type="text"
                      name="value"
                      value={value}
                      required
                      onChange={(e) => setValue(e.target.value)}
                      placeholder="Enter your coupon code value..."
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="minAmount"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Minimum Amount
                    </label>
                    <input
                      type="number"
                      name="value"
                      value={minAmount}
                      onChange={(e) => setMinAmout(e.target.value)}
                      placeholder="Enter your coupon code min amount..."
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="maxAmount"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Maximum Amount
                    </label>
                    <input
                      type="number"
                      name="value"
                      value={maxAmount}
                      onChange={(e) => setMaxAmount(e.target.value)}
                      placeholder="Enter your coupon code max amount..."
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="selectedProduct"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Select Product
                    </label>
                    <select
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      value={selectedProducts}
                      onChange={(e) => setSelectedProducts(e.target.value)}
                    >
                      <option value="Choose your selected products">
                        Choose a selected product
                      </option>
                      {products.map((product) => (
                        <option key={product._id} value={product._id}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="contained" color="primary" type="submit">
                      Create
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AllCoupons;
