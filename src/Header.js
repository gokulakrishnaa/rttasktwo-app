import "./Header.css";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export function Header({ add, setAdd, remove, setRemove }) {
  return (
    <div className="header">
      <div className="left">
        <p>Start Bootstrap</p>
      </div>
      <div className="middle">
        <p>Home</p>
        <p>About</p>
        <p>Shop</p>
      </div>
      <div className="right">
        <Button variant="outlined">
          <ShoppingCartIcon />
          Cart {add}
        </Button>
      </div>
    </div>
  );
}
