import React from "react";

type Props = {
  title: string;
  desc?: string;
};

export default function Title({ title, desc }: Props) {
  return (
    <div className="flex text-center items-center justify-center  flex-col gap-8">
      <h3 className=" uppercase md:tracking-[20px]  tracking-[5px] ml-2 sm:ml-0 text-gray-500 text-2xl">
        {title}
      </h3>
      <p className="ml-2 sm:ml-0 text-gray-400">{desc}</p>
    </div>
  );
}
