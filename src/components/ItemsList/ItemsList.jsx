import React, { FC } from "react";

// interface ItemListProps {
//     propsNames: string[];
//     data: any[];
//     onClick?: () => void;
//     Component: FC<any>;
// }

// TODO: define the type of every react component
// TODO: comeback later and try finding the solutions
const ItemsList = (props) => {
  const { propsNames, data = [], onClick, Component } = props;

  const getProps = (itemData) => {
    const props = {};
    for (let key of propsNames) {
      props[key] = itemData[key];
    }
    return props;
  };

  return (
    <div className="flex gap-4 justify-between items-center flex-wrap p-6 h-full">
      {data?.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Component {...getProps(item)} onClick={() => onClick(item)} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ItemsList;
