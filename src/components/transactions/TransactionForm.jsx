import { useState } from "react"
import { useGlobalContext } from "../../context/GlobalContext"

function TransactionForm() {

    const { addTransaction } = useGlobalContext()
    const [description, setDescription] = useState()
    const [amount, setAmount] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()
        addTransaction({
            id: window.crypto.randomUUID(),
            description,
            amount
        })
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Enter a description" onChange={(e) => { setDescription(e.target.value) }} />
                <input type="number" step="0.01" placeholder="00.00" onChange={(e) => { setAmount(e.target.value) }} />
                <button>Add transaction</button>
            </form>
        </>
    )
}

export default TransactionForm