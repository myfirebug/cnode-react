import React, { FC } from "react";

interface ISkeletonProps {
    active?: boolean;
    image?: "image" | "avatar" | "";
    block?: boolean;

}

const Skeleton: FC<ISkeletonProps> = () => {
  return <div className="sz-skeleton"></div>;
};

export default Skeleton;
