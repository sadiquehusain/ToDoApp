import React from "react";
import "./ListItem.css";
function ListItem(props) {
  const items = props.items;
  const listItem = items.map((items) => {
    return (
      <div className="list" key={items.key}>
        <p>
          {items.text}
          <span>
            {" "}
            <button
              className="delete"
              onClick={() => props.deleteItem(items.key)}
            >
              Delete
            </button>{" "}
          </span>
        </p>
      </div>
    );
  });

  return (
    <>
      <div>{listItem}</div>
    </>
  );
}
export default ListItem;
