import React from "react";
import "./Product.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export function Product({
  title,
  rating,
  price,
  add,
  setAdd,
  remove,
  setRemove,
}) {
  const [show, setShow] = useState(true);
  return (
    <div className="product">
      <Card sx={{ maxWidth: 320 }}>
        <CardMedia
          component="img"
          height="280"
          image="http://dummy.tcdw.org/300"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              setAdd(add + 1);
              setShow(false);
            }}
          >
            {show ? "Add to Cart" : ""}
          </Button>
          <Button
            onClick={() => {
              setRemove(add - 1);
              setShow(true);
            }}
          >
            {show ? "" : "Remove"}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
