import React from "react";
import { Link } from "react-router";
import { formatDate } from "../utils/FormatDate";

type Props = {
  id: string;
  imageUrl: string;
  aiProbability: number;
  createdAt: string;
};

const HistoryItem = ({ id, imageUrl, aiProbability, createdAt }: Props) => {
  return (
    <Link
      to={`/history/${id}`}
      className="block transition-transform hover:-translate-y-1"
    >
      <div className="flex items-end justify-start gap-4 p-4 bg-cuswhite rounded-lg shadow-[2px_2px_8px_-3px_rgba(0,0,0,0.3)]">
        <img
          src={imageUrl}
          className="w-15 h-15 rounded-m object-cover rounded-md"
        />
        <div className="flex flex-col items-start justify-end ">
          <p className="text-bd-m md:text-bd text-cusblack font-semibold">
            <span>{aiProbability}%</span>Terdeteksi AI
          </p>
          <p className="text-capt-m md:text-capt text-cusdarkgrey">
            {formatDate(createdAt)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HistoryItem;
