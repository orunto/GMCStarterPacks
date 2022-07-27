import React
// { useContext } 
from "react"

import { ReactComponent as CartIconBag } from '../../assets/cart.svg';
import '../styles/Components.styles';

const CartIcon = () => {
    return(
        <CartIconBag alt='cart' to='/cart' />
    )
}
export default CartIcon;