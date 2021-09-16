import { useState, useEffect } from 'react'
const FoodItem = (props:any) => {
    return (<div>
        <span>{props.food}</span>
        <input type="checkbox" checked={props.checked} onChange={() => {
            props.sendToGrocery(props.food)
        }} />
    </div>)
}

export default FoodItem;