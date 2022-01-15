import './App.css';
import React,{Component} from 'react'
import Groceries from './Components/Groceries';
import GroceriesList from './Components/GroceriesList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      groceries: [],
      
    }
    this.state.purchased={
      purchaseditems:[]
    }
  }
  getList=(list)=>{
    this.setState({groceries:[...this.state.groceries,list]})
  }
  makePurchase=event=>{
    this.state.groceries[-1]
    this.setState({groceries:[...this.state.G]})

  }

  render() {

    return (
      <div className="App">
        
        <Groceries  getList={this.getList}/>
        <GroceriesList getgroceries={this.state.groceries}/>
        <Groceries getpurchased={this.state.purchased}/>
        
      </div>
    );

  }
}
export default App;
