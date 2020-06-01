import React, { useState }from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
function Payment() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')
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
                onChange = { e => setName(e.target.value) }
                onFocus = { e => setFocus(e.target.name) }
                />

                <input 
                type="tel" 
                name = "number" 
                value = { number } 
                onChange = { e => setNumber(e.target.value) }
                placeholder = "Number"
                onFocus = { e => setFocus(e.target.name)}
                />

                <input 
                type="tel" 
                name = "expiry" 
                value = { expiry } 
                onChange = { e => setExpiry(e.target.value) }
                placeholder = "MM/YY Expiry"
                onFocus = { e => setFocus(e.target.name)}
                />

                <input 
                type="text" 
                name = "cvc" 
                value = { cvc } 
                onChange = { e => setCvc(e.target.value) }
                placeholder = "CVC"
                onFocus = { e => setFocus(e.target.name)}
                />
            </form>
        </div>
    )
}

export default Payment
