import React from "react";
import Data from "./Data";

export default function Main({ Data }) {
  return (
    <div className="container">
      {Data.map((e) => {
        // console.log(e);
        return (
          <div>
            <h1>{e.Category}</h1>
            <div>
              <div>
                {e.stock.map((a) => {
                  return (
                    <div className="d-flex justify-content-between w-75">
                      <p className="bold">{a.name}</p>
                      <p>{a.stockes}</p>
                      <p>${a.price}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
