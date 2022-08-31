import React, { useEffect, useState } from "react";
import Category from "./Category";
import Table from "./Table";
import TotalProduct from "./TotalProduct";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://dummyjson.com/products";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="ml-72 w-9/12 mt-6">
      <h1 className="font-semibold">Dashboard</h1>
      <TotalProduct data={data} />
      <Category data={data.products} />
      <Table data={data.products} />
    </div>
  );
};

export default Content;
