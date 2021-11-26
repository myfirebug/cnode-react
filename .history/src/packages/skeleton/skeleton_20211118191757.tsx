import React, { FC } from "react";

interface ISkeletonProps {
    active?: boolean;
    image: {
        show?: boolean;
        type?: "image" | "avatar";
        width?: number | string;
        height?: number | string;
        round?: boolean;
    };
    block?: boolean;
}

const Skeleton: FC<ISkeletonProps> = ({
    active,
    image,
    block
}) => {
  const {show, type, width, height, round} = image
  
  return (
    <ul className="sz-skeleton">
        <li className="sz-skeleton__item">
            <div className="sz-skeleton__header">
                <div className="sz-skeleton__image"></div> 
            </div>
            <div className="sz-skeleton__body"></div> 
        </li>
    </ul>
  )
};

export default Skeleton;
