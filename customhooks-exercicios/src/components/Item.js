import "./styles.css";

export function Item ({label, quantity, onDecrement,
   onReset, onIncrement, setQuantity}) {

    const handleChange = (event) => {
      const {target} = event;
      setQuantity(Number(target.value))
    };

  return (
    <div className="Item">
      <p className="label">{label}</p>
      <input 
      className="qty" 
      type="text"  
      value={quantity} 
      onChange={handleChange}
      />
      {/*<p className="qty">Quantidade: {quantity}</p>*/}
      <button onClick={() => onDecrement (2) }>-</button>
      <button onClick={onReset}>Restaurar</button>
      <button onClick={() => onIncrement (2) }>+</button>
    </div>
  );
}