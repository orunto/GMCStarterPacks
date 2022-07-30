import React from "react";
import { useCart } from "../contexts/cart";
import { CartItemsWrapper, StarterPacks, CartPrice, RemoveContainer, Remove, RemoveText, RemoveImage } from "./styles/Components.styles";
import remove from '../assets/remove.svg'

const starterPacks = {
    owanbe: {
        name: "Owambe Starter Pack",
        price: "\u20A6170,000",
        list: "Senator(2x), Loafers(1x), Agbada (1x), Ankara shorts(2x), Brogues(1x), Palms(1x)"
    },
    datenight: {
        name: "Date Night Special Starter Pack",
        price: "\u20A6170,000",
        list: "Collared shirts(3x), Blazers(2x), Jeans(2x), Pants(2x), Accesories(Wrist Watch)(1x), Loafers(1x)"
    },
    partygoer: {
        name: "Party Goer Starter Pack",
        price: "\u20A6170,000",
        list: "Patterned Shirt(3x), Jean(2x), Denim Jacket(1x), Chinos(3x), Pants(2x), Aloha Shirts(2x), Sneakers(2x)"
    },
    raining: {
        name: "Raining Season Starter Pack",
        price: "\u20A6170,000",
        list: "Dark coloured shirts(3x), Black jeans(2x), Grey Pants(1x), Hoodies(2x), Leather Jacket(1x), Denim Jacket(1x), Turtle Neck(2x)"
    },
    student: {
        name: "Student Starter Pack",
        price: "\u20A6170,000",
        list: "T-Shirts(3x), Jeans(1x), Pant Trousers(2x), Collared Shirts(2x), Polo Shirts(3x), Chinos(2x), Palm sandal(1x), Loafers(1x)"
    },
    techbro: {
        name: "TechBro Starter Pack",
        price: "\u20A6170,000",
        list: "Jean(s)(2x), Sweater/Cardigan(1x), Kakki pants(2x), Joggers(2x), Jersey(2x), Plain tees(3x), Crocs(1x), Designers tees(3x)" 
    },
    workfromhome: {
        name: "Work From Home Starter Pack",
        price: "\u20A6170,000",
        list: "Jean(s)(2x), Sweater/Cardigan(1x), Kakki pants(2x), Joggers(2x), Jersey(2x), Plain tees(3x), Crocs(1x), Designers tees(3x)" 
    },
    corporate: {
        name: "Corporate Casual Starter Pack",
        price: "\u20A6170,000",
        list: "Blazers Jacket(2x), Pant trousers(2x), Turtle Neck(2x), Plain round neck shirt(3x), Loafers(2x), White sneakers(1x)"
    },
    gym: {
        name: "Gym Starter Pack",
        price: "\u20A6170,000",
        list: "Racerbacks(5x), Sleeveless T-Shirts(4x), Sweatshorts(4x), Trainers(3x)"
    }
};

const CartItems = () => {
    const { items, removeFromCart } = useCart();
    return (
        <div>
            {items &&
                items.map((item) => {
                    const count = 0;
                    const starterPack = item && starterPacks[item.id];
                    return (
                        starterPack && (
                          <CartItemsWrapper key={item.id}>
                                <StarterPacks>
                                    {starterPack.name} : {count}
                                </StarterPacks>
                                <RemoveContainer>
                                <CartPrice> {starterPack.price} </CartPrice>
                                <Remove>
                                    <RemoveText>Remove</RemoveText>
                                    <RemoveImage src={remove} alt='remove' onClick={removeFromCart.bind(this, item)} />
                                </Remove>
                                </RemoveContainer>
                            </CartItemsWrapper>
                        )
                    );
                })}
        </div>
    );
};

export default CartItems;
