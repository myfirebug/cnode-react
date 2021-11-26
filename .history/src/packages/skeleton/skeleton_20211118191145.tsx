import React, { FC } from "react";

interface ISkeletonProps {
    active?: boolean;
    image?: {
        show?: boolean;
        type?: "image" | "avatar";
        width?: number | string;
        height?: number | string;
        round?: boolean;
    };
    block?: boolean;
}

const Skeleton: FC<ISkeletonProps> = () => {
  return <div className="sz-skeleton"></div>;
};

export default Skeleton;
