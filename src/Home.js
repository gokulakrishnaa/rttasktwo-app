import React from "react";
import "./Home.css";
import { Product } from "./Product";

export function Home({ add, setAdd, remove, setRemove }) {
  return (
    <div className="home">
      <Product
        add={add}
        setAdd={setAdd}
        remove={remove}
        setRemove={setRemove}
        title="Fancy Product"
        rating={0}
        price="80"
      />
      <Product
        add={add}
        setAdd={setAdd}
        remove={remove}
        setRemove={setRemove}
        title="Special Item"
        rating={4}
        price="99"
      />
      <Product
        add={add}
        setAdd={setAdd}
        remove={remove}
        setRemove={setRemove}
        title="Sale Item"
        rating={0}
        price="45"
      />
      <Product
        add={add}
        setAdd={setAdd}
        remove={remove}
        setRemove={setRemove}
        title="Popular Item"
        rating={3}
        price="35"
      />
    </div>
  );
}
