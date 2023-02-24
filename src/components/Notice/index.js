import React from "react";
import { v4 } from "uuid";

const noticeData = [
  {
    title: "Tablet Distribution",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quo aut suscipit eum, et, repellat distinctio praesentium, dolorem possimus reiciendis nesciunt iure atque! Explicabo, soluta veniam! Impedit necessitatibus placeat alias.",
    date: "20/02/23",
    file: "",
  },
  {
    title: "Change in time table",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quo aut suscipit eum, et, repellat distinctio praesentium, dolorem possimus reiciendis nesciunt iure atque! Explicabo, soluta veniam! Impedit necessitatibus placeat alias.",
    date: "14/02/23",
    file: "",
  },
  {
    title: "Zealicon 2023",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quo aut suscipit eum, et, repellat distinctio praesentium, dolorem possimus reiciendis nesciunt iure atque! Explicabo, soluta veniam! Impedit necessitatibus placeat alias.",
    date: "2/02/23",
    file: "",
  },
  {
    title: "Examination",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quo aut suscipit eum, et, repellat distinctio praesentium, dolorem possimus reiciendis nesciunt iure atque! Explicabo, soluta veniam! Impedit necessitatibus placeat alias.",
    date: "28/01/23",
    file: "",
  },
  {
    title: "Fee due",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quo aut suscipit eum, et, repellat distinctio praesentium, dolorem possimus reiciendis nesciunt iure atque! Explicabo, soluta veniam! Impedit necessitatibus placeat alias.",
    date: "20/02/23",
    file: "",
  },
  {
    title: "Application of NOC",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quo aut suscipit eum, et, repellat distinctio praesentium, dolorem possimus reiciendis nesciunt iure atque! Explicabo, soluta veniam! Impedit necessitatibus placeat alias.",
    date: "20/02/23",
    file: "",
  },
  {
    title: "CIA-2 Marks",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quo aut suscipit eum, et, repellat distinctio praesentium, dolorem possimus reiciendis nesciunt iure atque! Explicabo, soluta veniam! Impedit necessitatibus placeat alias.",
    date: "20/02/23",
    file: "",
  },
];

const Notice = () => {
  const list = noticeData.map((el) => (
    <div
      key={v4()}
      className="w-[250px] px-4 py-2 mx-2 mb-10 rounded shadow bg-gray-50"
    >
      <p className="w-full text-lg font-bold text-center">{el.title}</p>
      <p className="my-2 text-sm">{el.description}</p>
      <div className="flex items-center justify-between mt-4 mb-2">
        <div className="px-4 py-1 text-sm bg-blue-200 rounded-md cursor-pointer">
          View
        </div>
        <span className="text-sm">{el.date}</span>
      </div>
    </div>
  ));

  const dummy = new Array(5)
    .fill(0)
    .map((_) => <div className="w-[250px] mx-2 mb-10" key={v4()}></div>);

  return (
    <div>
      <p className="mb-8 text-xl font-bold text-center">Notice Board</p>
      <div className="flex flex-wrap justify-between">
        {list}
        {dummy}
      </div>
    </div>
  );
};

export default Notice;
