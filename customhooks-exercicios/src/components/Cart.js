import { useState } from "react";
import useCounter from "../Hooks/useCounter"
import { Item } from "./Item";


export const Cart = () => {

  const {value: quantity, 
    onIncrement, 
    onDecrement, 
    onReset, 
    setQuantity} = useCounter({
    min: 0,
    max: 10,
    initial: 0
  })

  return (
    <div>
      <h1>Meu carrinho</h1>
      <Item
        label="My produto massa"
        quantity={quantity}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onReset={onReset}
        setQuantity={setQuantity}
      />
    </div>
  );
};
