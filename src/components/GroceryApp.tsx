import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home"
import FoodList from './FoodList'
import { vegetables, fruits } from './foods'

interface IState{
    checked: Array<string>
}
interface IProps {
    
}
export default class GroceryApp extends React.Component<IProps, IState> {


    constructor(props:any) {
        super(props)
        console.log("constructor called")
        this.state = {
            checked: []
        }
    }
    sendToGrocery = (foodItem:string) => {
        //if it's already in there take it away
        let index = this.state.checked.indexOf(foodItem);
        if (index === -1) {
            let newChecked = [...this.state.checked, foodItem]
            this.setState({ checked: newChecked })
        }
        else {
            console.log(index)
            let newChecked = this.state.checked.filter((item) => item !== foodItem)
            this.setState({ checked: newChecked })
        }


    }
    render() {
        console.log("Grocery App rerendered")
        return (<div className="app">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/fruits">Fruits</Link>
                            </li>
                            <li>
                                <Link to="/vegetables">Vegetables</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/fruits">
                            <FoodList foods={fruits} checked={this.state.checked} sendToGrocery={this.sendToGrocery} />
                        </Route>
                        <Route path="/vegetables">
                            <FoodList foods={vegetables} checked={this.state.checked} sendToGrocery={this.sendToGrocery} />
                        </Route>
                        <Route path="/">

                            <Home />
                            <div>{this.state.checked.map((fruit) => <div>{fruit}</div>)}</div>
                        </Route>
                    </Switch>
                </div>
            </Router>

        </div>)
    }
}