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
  rows?: number;
}

const Skeleton: FC<ISkeletonProps> = ({ active, image, rows = 1 }) => {
  const { show=false, type = "image", width = 30, height = 30, round, block } = image;

  const headerClasses = classNames("sz-skeleton__header", {
    "is-block": block,
  });

  const imageClasses = classNames(
    "sz-skeleton__image",
    "sz-skeleton__animate",
    {
      [`is-${type}`]: type,
      "is-round": round,
    }
  );
  return (
    <ul className="sz-skeleton">
      {[...Array(rows)].map((_, index) => (
        <li className="sz-skeleton__item" key={index}>
          <div className={headerClasses}>
            <div
              className={imageClasses}
              style={{
                width: width,
                height: height,
              }}
            ></div>
            <div className="sz-skeleton__content">
              {[...Array(Math.floor(height / 15) - 1)].map((_, rowIndex) => (
                <div
                  className="sz-skeleton__row sz-skeleton__animate"
                  key={rowIndex}
                ></div>
              ))}
              <div
                className="sz-skeleton__row sz-skeleton__animate"
                style={{ width: Math.random() * 50 + 50 + "%" }}
              ></div>
            </div>
          </div>
          <div className="sz-skeleton__body">
            <div className="sz-skeleton__row sz-skeleton__animate"></div>
            <div
              className="sz-skeleton__row sz-skeleton__animate"
              style={{ width: Math.random() * 50 + 50 + "%" }}
            ></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Skeleton;
