import React from "react";

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <h3 className=" uppercase md:tracking-[20px]  tracking-[5px] ml-2 sm:ml-0 text-gray-500 text-2xl">
      {title}
    </h3>
  );
}
