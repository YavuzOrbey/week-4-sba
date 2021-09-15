import FoodItem from './FoodItem'
const FoodList = ({ foods, sendToGrocery, checked }) => {
    return foods.map((food) => <FoodItem sendToGrocery={sendToGrocery} checked={checked.includes(food)} food={food} />)
}

export default FoodList;