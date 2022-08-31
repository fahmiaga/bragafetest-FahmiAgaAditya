import React from "react";
import setting from "../../assets/settings.svg";

const Category = ({ data }) => {
  let categories = [];
  if (data !== undefined) {
    let grp = data.reduce((group, product) => {
      const { category } = product;
      group[category] = group[category] ?? [];
      group[category].push(product);
      return group;
    }, {});

    for (const obj in grp) {
      categories.push({ category: obj, items: grp[obj] });
    }
  }

  function formatText(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="mt-11 grid grid-cols-4 gap-14">
      {categories.map((category) => (
        <div className="w-52 h-48 bg-white border border-blue-100 rounded-md relative">
          <div className="mt-6 ml-5">
            <p>{formatText(category.category)}</p>
            <p className="text-primary text-3xl font-semibold">
              {category.items.length}
            </p>
          </div>
          <img src={setting} alt="set" className="absolute bottom-0 right-0" />
        </div>
      ))}
    </div>
  );
};

export default Category;
