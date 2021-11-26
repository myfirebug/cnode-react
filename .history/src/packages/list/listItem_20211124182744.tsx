import React, { FC, ReactElement } from "react";

export interface IListItemProps {
  children?: ReactElement;
  title?: ReactElement | string;
  before?: ReactElement | string;
  after?: ReactElement | string;
  onClick?: Function
}

const ListItem: FC<IListItemProps> = ({ children, title, before, after }) => {
  return (
    <div className="sz-list-item">
      {title && <div className="sz-list-item__header">{title}</div>}
      <div className="sz-list-item__body">
        {before && <div className="sz-list-item__before">{before}</div>}
        <div className="sz-list-item__center">{children}</div>
        {after && <div className="sz-list-item__after">{after}</div>}
      </div>
    </div>
  );
};

export default ListItem;
