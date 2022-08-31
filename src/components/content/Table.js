import React, { useState } from "react";
import filterIcon from "../../assets/filter-icon.svg";
import thicon from "../../assets/th-icon.svg";

const Table = ({ data }) => {
  const [input, setInput] = useState("");
  const getProduct = (dataProduct) => {
    return dataProduct.filter((value) => {
      return value.title.toLowerCase().includes(input.toLowerCase());
    });
  };

  return (
    <div className="mt-12">
      <h1 className="font-semibold text-2xl">Tabel List Produk</h1>
      <div className="flex justify-between mt-9">
        <button className="bg-blue-500 px-3 py-1 rounded-md text-white">
          + Input Produk Baru
        </button>
        <div className="flex">
          <button className="flex items-center text-blue-500 border border-blue-500 px-3 rounded-md mr-3">
            <img src={filterIcon} alt="filter" />
            Filter
          </button>
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </span>
            <input
              className="w-full bg-white placeholder:font-italitc border border-blue-500 rounded-md py-2 pl-10 pr-4 focus:outline-none"
              placeholder="Cari Laporan"
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </label>
        </div>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-9 mb-12">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-white bg-blue-500 ">
            <tr>
              <th scope="col" className="py-3 px-6 ">
                <div className="flex">
                  <img src={thicon} alt="th" className="mr-3" />
                  <p>ID</p>
                </div>
              </th>
              <th scope="col" className="py-3 px-6 lex">
                <div className="flex">
                  <img src={thicon} alt="th" className="mr-3" />
                  <p>Title</p>
                </div>
              </th>
              <th scope="col" className="py-3 px-6 ">
                <div className="flex">
                  <img src={thicon} alt="th" className="mr-3" />
                  <p>Kategori</p>
                </div>
              </th>
              <th scope="col" className="py-3 px-6 ">
                <div className="flex">
                  <img src={thicon} alt="th" className="mr-3" />
                  <p>Brand</p>
                </div>
              </th>
              <th scope="col" className="py-3 px-6 ">
                <div className="flex">
                  <img src={thicon} alt="th" className="mr-3" />
                  <p>Price</p>
                </div>
              </th>
              <th scope="col" className="py-3 px-6 ">
                <div className="flex">
                  <img src={thicon} alt="th" className="mr-3" />
                  <p>Rating</p>
                </div>
              </th>
              <th scope="col" className="py-3 px-6 ">
                <div className="flex">
                  <img src={thicon} alt="th" className="mr-3" />
                  <p>Detail</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data === [] || data === undefined
              ? "Loading..."
              : getProduct(data).map((product) => (
                  <tr className="bg-white border-b " key={product.id}>
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {product.id}
                    </th>
                    <td className="py-4 px-6">{product.title}</td>
                    <td className="py-4 px-6">{product.category}</td>
                    <td className="py-4 px-6">{product.brand}</td>
                    <td className="py-4 px-6">{product.price}</td>
                    <td className="py-4 px-6">{product.rating}</td>
                    <td className="py-4 px-6">
                      <span className="underline text-blue-600 cursor-pointer">
                        Lihat detail
                      </span>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
