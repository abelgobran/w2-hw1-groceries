import React,{Component} from "react";



class GroceriesList extends Component{

    constructor(){
        super()
        
    }
 
    // createList=(list)=>saveInfo()

    render(){
        return(
            <div>
                <ul>
                    <h2>List</h2>
                    {this.props.getgroceries.map((listItems, index) => {
                        return <div key={index}> Item: {listItems.item} Units:{listItems.units} Quantity:{listItems.quantity} {<button id='purchase' onClick={this.props.makePurchase}>Purchase</button>}</div>
                    }
                    )}
                </ul>

                <ol>
                    <h2>Purchased</h2>
                    {this.props.purchased.map((paidItems,index)=>{
                        return <div key={index}> Item:{paidItems.item} Units:{paidItems.units} Quantity:{paidItems.quantity} </div>
                    })}

                </ol>
            </div>
        )
    }
}

export default GroceriesList