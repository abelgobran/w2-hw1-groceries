import React, { Component } from 'react'
import App from '../App'

class Groceries extends Component {
    constructor() {
        super()
        this.state = {
            item: '',
            units: '',
            quantity: '',
            isPurchased: false
        }
    }
    saveInfo = addItems => {
        this.setState({ [addItems.target.id]: addItems.target.value })
        console.log(this.saveInfo)

    }
    submitButton = event => {
        event.preventDefault()
        console.log(this.state)
        this.props.getList(this.state)
        

    }
    render() {
        return (
            <div>
                <h2>Groceries List</h2>
                <form onSubmit={this.submitButton}>
                    <label htmlFor='item' >item</label>
                    <input id='item' placeholder='Type Here'
                        onChange={this.saveInfo}
                        value={this.state.item} />

                    <label htmlFor='units'>units</label>
                    <input id="units" placeholder='Type Here'
                        onChange={this.saveInfo}
                        value={this.state.units} />


                    <label htmlFor='quantity'>quantity</label>
                    <input id='quantity' placeholder='Type Here'
                        onChange={this.saveInfo}
                        value={this.state.quantity} />


                    <button type="submit">Add item</button>
                </form>
            </div>
        )
    }
}
export default Groceries