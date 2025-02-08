"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ProductProps } from "../page";
import useRunOnce from "@/app/services/useRunOnce";
import getProduct from "./getProdectDetail.services";
import { Button, IconButton } from "@mui/material";

const Detail = () => {
  const [data, setData] = useState<ProductProps | null>(null);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useRunOnce({
    fn: async () => {
      if (id) {
        const res = await getProduct(id);
        res && setData(res);
      }
    },
  });

  return (
    <>
      <div className="text-[30px] not-italic w-2/3">{data?.title}</div>
      <div className="flex">
        <div className="w-2/3 p-5">
          <div className="w-80">
            <img
              className="w-full"
              src={data?.image}
              alt={"enalaha maa saberin"}
            />
          </div>
          <div className="h-[2px] w-full bg-black my-10"></div>
          <div>
            <span className="text-[25px]">description</span>
            <div className="text-gray-500 text-[20px]">{data?.description}</div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-5 ">
          <div className="border-gray-300 border-2 m-auto p-3 rounded-lg">
            <div className="flex gap-3">
              <div className="text-2xl font-bold">title :</div>
              <div>{data?.title}</div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl font-bold">price :</div>
              <div className="text-xl ">{data?.price}</div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl font-bold">category : </div>
              <div>{data?.category}</div>
            </div>
          </div>
        <div className="border-gray-300 border-2 rounded-lg h-40 m-y-auto w-[475px]">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
