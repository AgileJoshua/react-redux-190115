import React, { useContext, useState, useEffect } from 'react'
import { ProductItem } from '../api/types';
import { CartContext } from '../context/shoppingcart/cartContext';
import Product from './Product';

const useCurrentTime = (ms:number, render:(time:string)=>React.ReactElement) => {

    let [timeNow, setTimeNow] = useState(new Date());

    useEffect(() => {
        const timerID= setTimeout(() => {
            setTimeNow(new Date())
        }, ms);
        return ()=>{
            clearTimeout(timerID)
        }
    },[timeNow, ms])


    return render(timeNow.toISOString());
}

const CartInfo: React.FC = () => {
    const cart = useContext(CartContext)

const timeNow = useCurrentTime(5000, (time)=>(<Product product={{name:time,price:5765675,category:[]}}></Product>))

    const createCartTooltip = (items: ProductItem[]) => {
        return items?.reduce((tip, item) => tip + `${item.name}: $${item.price}\n`, '');
    }

    return (
        <div title={createCartTooltip(cart.items)} className='component'>
            Cart contains: {(cart.items && cart.items.length) || 0}<br></br>
            {timeNow}
        </div>
    )
}

export default CartInfo;