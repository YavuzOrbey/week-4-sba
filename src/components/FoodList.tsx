import FoodItem from './FoodItem'
const FoodList = ({ foods, sendToGrocery, checked }:{foods:string[], sendToGrocery: (a:string)=>void, checked: Array<string>}) => {
    return <>{foods.map((food)=><FoodItem sendToGrocery={sendToGrocery} checked={checked.includes(food)} food={food} />)}</>
}

export default FoodList;