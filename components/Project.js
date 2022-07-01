import React from "react";

const Project = ({ data }) => {
  return (
    <a
      href={data.url}
      target="_blank"
      className="flex flex-col my-2 md:my-4 md:flex-row"
    >
      <div className="flex group flex-col md:text-left">
        <h1 className="group-hover:underline text-sm font-semibold md:text-md">
          {" "}
          {data.name}{" "}
        </h1>
        <p className="text-xs">{data.description}</p>
      </div>
    </a>
  );
};

export default Project;
