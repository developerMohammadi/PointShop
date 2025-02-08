"use client";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Link from "next/link";
import { Button } from "@mui/material";

const Panel = () => {
  const { filter, sort, star, detail } = useSelector((state: RootState) => ({
    filter: state.product.filter,
    sort: state.product.sort,
    star: state.product.star,
    detail: state.product.detail,
  }));
  return (
    <>
      <Link href={"/"}>
        <Button>ghabli</Button>
      </Link>

      <section className="py-3 md:py-5">
        <div className="container mx-auto max-w-lg">
          <div className="bg-blue-600 shadow-sm rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="text-lg font-semibold mb-1">Social Stats</h5>
                <p className="text-sm">Followers</p>
              </div>
              <div className="w-20 h-20 border-4 border-blue-400 rounded-full flex items-center justify-center">
                <i className="bi bi-people text-3xl"></i>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">
                    <i className="bi bi-twitter"></i>
                  </span>
                  <h6 className="m-0">Filter</h6>
                </div>
                <h6 className="text-lg font-bold">{filter}</h6>
              </div>

              <div className="bg-green-100 text-green-600 p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-2">
                    <i className="bi bi-facebook"></i>
                  </span>
                  <h6 className="m-0">Sort</h6>
                </div>
                <h6 className="text-lg font-bold">{sort}</h6>
              </div>

              <div className="bg-red-100 text-red-600 p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2">
                    <i className="bi bi-github"></i>
                  </span>
                  <h6 className="m-0">Star</h6>
                </div>
                <h6 className="text-lg font-bold">{star}</h6>
              </div>

              <div className="bg-sky-100 text-sky-600 p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center mr-2">
                    <i className="bi bi-youtube"></i>
                  </span>
                  <h6 className="m-0">details</h6>
                </div>
                <h6 className="text-lg font-bold">{detail}</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Panel;
