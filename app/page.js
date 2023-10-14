"use client";
import Image from "next/image";
import { Checkbox } from "@material-tailwind/react";

export default function Home() {
  return (
    <div className=" flex  ">
      {/* left */}
      <div className="flex items-center justify-center bg-white-200 shadow-md px-6 ml-14 w-full  ">
        <Image
          src={"/Image.avif"}
          alt="product image"
          width={500}
          height={300}
        />
      </div>
      {/* right */}
      <div className=" flex flex-col  shadow-md px-8 ml-8  w-1/2 mr-2">
        <h2 className="font-semibold items-center text-4xl flex justify-center">
          Settings
        </h2>

        <div className="mt-4 mb-2">
          <h2 className="text-xl mb-2">Change T-Shirt Color</h2>
          <div className="flex gap-4 mb-2">
            <div
              style={{
                height: "25px",
                width: "25px",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            ></div>
            <div
              style={{
                height: "25px",
                width: "25px",
                backgroundColor: "blue",
                borderRadius: "50%",
              }}
            ></div>
            <div
              style={{
                height: "25px",
                width: "25px",
                backgroundColor: "green",
                borderRadius: "50%",
              }}
            ></div>
            <div
              style={{
                height: "25px",
                width: "25px",
                backgroundColor: "orange",
                borderRadius: "50%",
              }}
            ></div>
          </div>
        </div>

        <div className="h-px  bg-black"></div>
        <div className="mt-4 mb-4">
          <h2 className="text-xl mb-2">Change Image</h2>
          <div>
            <div className="flex flex-col">
              <input type="file" name="myImage" />
              <button className="bg-teal-500 text-white w-1/4 p-2 rounded">
                UPLOAD NOW
              </button>
            </div>
          </div>
        </div>
        <div className="h-px  bg-black"></div>
        <div className="mt-4 mb-4">
          <h2 className="text-xl mb-2">Write Text</h2>
          <p className="text-gray-400 mb-4">Upper Text</p>
          <div className="flex  text-gray-200 mb-1">
            <p className="text-gray-200 ml-[200px] ">Upper Text</p>
            <input className="text-gray-200" name="" id="" />
          </div>
          <div className="h-px  bg-black mb-2"></div>

          <p className="text-gray-400 mb-4">Lower Text</p>
          <div className="flex  text-gray-200 mb-1">
            <p className="text-gray-200 ml-[200px] ">Lower Text</p>
            <input className="text-gray-200" name="" id="" />
          </div>
          <div className="h-px  bg-black"></div>
        </div>
        <div className=" flex gap-4 mt-4 mb-4">
          <div className="flex flex-col w-1/2">
            <p className="text-gray-400 mb-4">Text Size</p>

            <input
              id="default-range"
              type="range"
              value="50"
              className="w-full h-2 bg-teal-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-300 w-[240px]"
            />
          </div>

          <div className="flex flex-col w-1/2">
            <p className="text-gray-400 mb-4">Text Color</p>
            <div class="flex flex-col  mb-4">
              <div className="flex mb-2">
                <input type="radio" class="h-4 w-4 border-gray-300 " />
                <label class="text-sm font-medium text-gray-500 ml-2 block">
                  Black
                </label>
              </div>
              <div className="flex mb-2">
                <input type="radio" class="h-4 w-4 border-gray-300 " />
                <label class="text-sm font-medium text-gray-500 ml-2 block">
                  Blue
                </label>
              </div>
              <div className="flex mb-2">
                <input type="radio" class="h-4 w-4 border-gray-300 " />
                <label class="text-sm font-medium text-gray-500 ml-2 block">
                  White
                </label>
              </div>
              <div className="flex mb-2">
                <input type="radio" class="h-4 w-4 border-gray-300 " />
                <label class="text-sm font-medium text-gray-500 ml-2 block">
                  Green
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
