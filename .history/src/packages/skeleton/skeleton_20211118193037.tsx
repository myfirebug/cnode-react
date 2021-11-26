import React, { FC } from "react";
import classNames from "classnames";
import "./stype/skeleton.scss";

interface ISkeletonProps {
  active?: boolean;
  image: {
    show?: boolean;
    type?: "image" | "avatar";
    width?: number;
    height?: number;
    round?: boolean;
    block?: boolean;
  };
}

const Skeleton: FC<ISkeletonProps> = ({ active, image }) => {
  const { show, type = "image", width = 30, height = 30, round, block } = image;

  const headerClasses = classNames("sz-skeleton__header", {
    "is-block": block,
  });

  const imageClasses = classNames("sz-skeleton__image", {
    [`is-${type}`]: type,
  });
  return (
    <ul className="sz-skeleton">
      <li className="sz-skeleton__item">
        <div className={headerClasses}>
          <div className={imageClasses}></div>
          <div className="sz-skeleton__content">
            <div className="sz-skeleton__row"></div>
          </div>
        </div>
        {typeof block === "boolean" && !block ? (
          <div className="sz-skeleton__body"></div>
        ) : null}
      </li>
    </ul>
  );
};

export default Skeleton;
