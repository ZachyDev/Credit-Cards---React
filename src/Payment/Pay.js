import React, { Component } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

class Pay extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             number: '',
             expiry: '',
             cvc: '',
             focus: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            focus: e.target.name
        })
    }
    render() {
        const { name,number,expiry,cvc,focus } = this.state
        return (
            <div>
            <Cards  
                name = { name }
                number = { number }
                expiry = { expiry }
                cvc = { cvc }
                focused = { focus }
            />
            <form>
            <input 
            type="text" 
            name = "name" 
            value = { name } 
            placeholder = "Name"
            onChange = { this.handleChange }
            onFocus = { focus }
            />

            <input 
            type="tel" 
            name = "number" 
            value = { number } 
            onChange = { this.handleChange }
            placeholder = "Number"
            onFocus = { focus }
            />

            <input 
            type="tel" 
            name = "expiry" 
            value = { expiry } 
            onChange = { this.handleChange }
            placeholder = "MM/YY Expiry"
            onFocus = { focus }
            />

            <input 
            type="text" 
            name = "cvc" 
            value = { cvc } 
            onChange = { this.handleChange }
            placeholder = "CVC"
            onFocus = { focus  }
            />
        </form>
            </div>
        )
    }
}

export default Pay
