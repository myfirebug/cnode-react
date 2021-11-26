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

  const imageClasses = classNames(
    "sz-skeleton__image",
    "sz-skeleton__animate",
    {
      [`is-${type}`]: type,
    }
  );
  return (
    <ul className="sz-skeleton">
      <li className="sz-skeleton__item">
        <div className={headerClasses}>
          <div
            className={imageClasses}
            style={{
              width: width,
              height: height,
            }}
          ></div>
          <div className="sz-skeleton__content">
            <div className="sz-skeleton__row sz-skeleton__animate" style={{width: Math.random() * 50 + 50 + '%'}}></div>
            <div className="sz-skeleton__row sz-skeleton__animate" style={{width: Math.random() * 50 + 50 + '%'}}></div>
          </div>
        </div>
        <div className="sz-skeleton__body">
            <div className="sz-skeleton__row sz-skeleton__animate" style={{width: Math.random() * 50 + 50 + '%'}}></div>
            <div className="sz-skeleton__row sz-skeleton__animate" style={{width: Math.random() * 50 + 50 + '%'}}></div>
          </div>
      </li>
    </ul>
  );
};

export default Skeleton;
