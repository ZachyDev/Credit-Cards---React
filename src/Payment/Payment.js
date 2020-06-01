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
            <form>
                <input 
                type="text" 
                name = "name" 
                value = { name } 
                onChange = { e => setName(e.target.value) }
                onFocus = { e => setFocus(e.target.name) }
                />

                <input 
                type="tel" 
                name = "number" 
                value = { number } 
                onChange = { e => setNumber(e.target.value) }
                onFocus = { e => setFocus(e.target.name)}
                />

                <input 
                type="tel" 
                name = "expiry" 
                value = { expiry } 
                onChange = { e => setExpiry(e.target.value) }
                onFocus = { e => setFocus(e.target.name)}
                />

                <input 
                type="tel" 
                name = "text" 
                value = { cvc } 
                onChange = { e => setCvc(e.target.value) }
                onFocus = { e => setFocus(e.target.name)}
                />
            </form>
        </div>
    )
}

export default Payment
