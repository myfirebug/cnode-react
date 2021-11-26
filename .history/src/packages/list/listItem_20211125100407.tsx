import React, { FC, ReactElement } from "react";
import { HtmlHTMLAttributes } from "_@types_react@17.0.37@@types/react";

export interface IListItemProps extends Omit<HtmlHTMLAttributes<HTMLDivElement>, 'title'> {
  children?: ReactElement;
  title?: ReactElement | string;
  before?: ReactElement | string;
  after?: ReactElement | string;
}

const ListItem: FC<IListItemProps> = ({ children, title, before, after }) => {
  return (
    <div className="sz-list-item" onClick={() => alert(555)}>
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
