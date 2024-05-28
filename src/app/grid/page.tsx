"use client";

import { useEffect, useState } from "react";
import { Product } from "../data/data_interface";
import data from "../data/gridData.json";

const GridTable = () => {
  const [dataState, updateDatastate] = useState<Product[] | null>([]);
  useEffect(() => {
    updateDatastate([...data]);
  }, []);

  function triggerOpen(id: number, state: boolean): any {
    if (dataState) {
      const updatedData = dataState.map((item) => {
        if (item.id === id) {
          return { ...item, open: !item.open };
        }
        return item;
      });
      updateDatastate(updatedData);
    }
  }
  return (
    <div className="h-[1000px] flex flex-row justify-center text-[14px] text-left">
      <div className="h-[480px] w-[852px] p-[30px] overflow-hidden">
        <div className="h-full overflow-y-auto">
          <table className="table-auto border-t border-r border-gray-300">
            <thead className="sticky top-0 bg-[#FAFAFA]">
              <tr>
                <th className="border-b border-l border-gray-300 px-[12px] py-[8px] w-[32px] h-[36px]"></th>
                <th className="border-b border-l border-gray-300 px-[12px] py-[8px] w-[300px]">
                  Product
                </th>
                <th className="border-b border-l border-gray-300 px-[12px] py-[8px] w-[50px]">
                  ID
                </th>
                <th className="border-b border-l border-gray-300 px-[12px] py-[8px] w-[100px]">
                  Unit Price
                </th>
                <th className="border-b border-l border-gray-300 px-[12px] py-[8px] w-[290px]">
                  Qty Per Unit
                </th>
              </tr>
            </thead>
            <tbody style={{ maxHeight: "360px" }} className="overflow-y-auto">
              {dataState &&
                dataState.map((item: Product, index: number) => (
                  <>
                    <tr
                      key={index}
                      className={`${
                        index % 2 == 0 ? `bg-[#F5F5F5]` : `bg-white`
                      } hover:bg-[#EAEAEA] `}
                    >
                      <td
                        className="border-l border-gray-300 px-[12px] py-[8px] hover:cursor-pointer align-top"
                        onClick={() => triggerOpen(item.id, item.open)}
                      >
                        {item.open ? "-" : "+"}
                      </td>
                      <td className="border-l border-gray-300 px-[12px] py-[8px] align-top">
                        {item.name}
                      </td>
                      <td className="border-l border-gray-300 px-[12px] py-[8px] align-top">
                        {item.id}
                      </td>
                      <td className="border-l border-gray-300 px-[12px] py-[8px] align-top">
                        {item.price}
                      </td>
                      <td className="border-l border-gray-300 px-[12px] py-[8px] align-top">
                        {item.qty}
                      </td>
                    </tr>
                    {item.open && (
                      <tr
                        className={`border-l border-gray-300 ${
                          index % 2 == 0 ? `bg-[#F5F5F5]` : `bg-white`
                        }`}
                      >
                        <td></td>
                        <td colSpan={4} className="px-[12px] py-[8px]">
                          <div className="flex flex-col">
                            <p className="mb-[14px]">
                              <span className="font-bold">In Stock:</span>{" "}
                              {item.inStock} units
                            </p>
                            <p className="mb-[14px]">
                              <span className="font-bold">On Order:</span>{" "}
                              {item.onOrder} units
                            </p>
                            <p className="mb-[14px]">
                              <span className="font-bold">Reorder Level:</span>{" "}
                              {item.reorder} units
                            </p>
                            <p className="mb-[14px] font-bold">Discontinued：</p>
                            <p className="mb-[14px] whitespace-nowrap flex-wrap">
                              <span className="font-bold">Category:</span>{" "}
                              {item.category}
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GridTable;
