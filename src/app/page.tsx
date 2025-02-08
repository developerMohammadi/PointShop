"use client";

import { useEffect } from "react";
import Button from "@mui/material/Button";
import Sort from "./sort.formcontrol";
import SelectForm from "./categori.formcontrol";
import axios from "axios";
import { useState } from "react";
import useRunOnce from "./services/useRunOnce";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
// import { RootState, AppDispatch } from "@/app/store/store";
import {
  incrementFilter,
  incrementSort,
  incrementStar,
  incrementDetail,
  loadStateFromLocalStorage,
} from "@/app/store/productSlice";
import Link from "next/link";
import Skeleton from "@mui/material/Skeleton";
import SkeletonComponent from "./skeletonComponent";
import specificCategory from "./specificCategory.services";
import { AppDispatch, RootState } from "./store/store";
import sortProducts from "./sortProduct.services";
import { Box } from "@mui/material";

export interface ProductProps {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const filter = useSelector((state: RootState) => state.product.filter);

  useEffect(() => {
    const savedState = localStorage.getItem("productState");
    if (savedState) {
      dispatch(loadStateFromLocalStorage(JSON.parse(savedState)));
    }
  }, [dispatch]);

  const getData = async () => {
    setLoading(true);
    const res = await axios.get(`https://fakestoreapi.com/products`);
    if (res.status !== 200) throw new Error();
    setProducts(res.data);
    setLoading(false);
  };

  useRunOnce({
    fn: () => getData(),
  });
  //
  // if (loading)
  //     return (
  //         <div className="flex flex-wrap gap-4">
  //             {Array.from({length: 12}).map((_, index) => (
  //                 <SkeletonComponent key={index}/>
  //             ))}
  //         </div>
  //     );

  // if (!loading)
  return (
    <>
      <div
        className={"flex w-full justify-between flex-row-reverse h-28 px-16"}
      >
        <div className="h-full flex justify-center flex-col text-yellow-500">
          logo
        </div>
        <div className="flex items-center">
          <Button sx={{ color: "#595f68" }} variant="text">
            men's clothing
          </Button>
          <Button sx={{ color: "#595f68" }} variant="text">
            women's clothing
          </Button>
          <Button sx={{ color: "#595f68" }} variant="text">
            zivaralat
          </Button>
          <Button sx={{ color: "#595f68" }} variant="text">
            garm
          </Button>
          <Button sx={{ color: "#595f68" }} variant="text">
            sard
          </Button>
        </div>
        <div className="flex items-center">
          <Link href={"/panel"}>
            <Button variant="text">login to panel</Button>
          </Link>
        </div>

        {/*<Button onClick={() => dispatch(incrementFilter())}>*/}
        {/*  Add Filter*/}
        {/*</Button>*/}
        {/*<div className="h-20 mb-8 bg-white w-full flex px-8">*/}
        {/*  <Sort selection={(item) => sortProducts(item)}/>*/}
        {/*  <SelectForm*/}
        {/*      selection={(categori) => specificCategory(categori)}*/}
        {/*  />*/}
        {/*  <Link className="m-auto" href={"/panel"}>*/}
        {/*    <Button>next</Button>*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>
      {!loading ? (
        <div className="bg-gray-900">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
              {products &&
                products.map((item: ProductProps) => {
                  return (
                    <div
                      className="bg-white rounded-lg shadow-lg p-8 h-[900px] w-[465px] flex flex-col justify-between"
                      key={item.id}
                    >
                      <div className="relative overflow-hidden h-[530px] w-full flex justify-center p-[5%]">
                        <img
                          className=" h-[90%] "
                          src={item.image}
                          alt="Product"
                        />
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Link href={`/detail?` + `id=${item.id}`}>
                            <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                              View Product
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mt-4">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-gray-900 font-bold text-lg">
                          {item.price}$
                        </span>
                        <Button
                          onClick={() => dispatch(incrementStar())}
                          variant="contained"
                          className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
