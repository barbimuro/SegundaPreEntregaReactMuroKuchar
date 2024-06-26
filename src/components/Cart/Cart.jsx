import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { cart, clearCart, totalQuantity} = useContext(CartContext)
    const quantity = totalQuantity();

    if(quantity === 0){
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="Option"></Link>
            </div>
        )
    }
    const total = cart.reduce((acc, item) => acc + item.subtotal, 0);

    return (
        <div>
            {cart.map(p=> <CartItem key={p.id}{...p}/>)}
            <h3>Total ${total}</h3>
            <button onClick={()=> clearCart()} className="Button">Limpiar Carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
} 
export default Cart