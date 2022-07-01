import React from "react";
import Image from "next/image";
import Moment from "react-moment";

Moment.globalFormat = "D MMM YYYY";
const Article = ({ data }) => {
  return (
    <a
      href={`https://blog.codewithkenn.com/${data.slug}`}
      target="_blank"
      className="flex flex-col my-2 md:my-4 md:flex-row"
    >
      {/* <Image
        alt="cover"
        src={`${data.coverImage}`}
        width={100}
        height={100}
        layout="responsive"
        className="object-cover rounded-md"
      /> */}
      <div className="flex group flex-col md:text-left">
        <h1 className="group-hover:underline text-sm font-medium md:text-md">
          {" "}
          {data.title}{" "}
        </h1>
        <Moment date={data.dateAdded} className="text-xs" />
      </div>
    </a>
  );
};

export default Article;
