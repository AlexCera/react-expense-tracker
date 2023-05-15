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
            amount: +amount
        })
    }

    return (
        <>
            <form onSubmit={onSubmit} className="flex flex-col justify-center items-center">
                <input type="text" placeholder="Enter a description" onChange={(e) => { setDescription(e.target.value) }} 
                className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full outline-none" />
                <input type="number" step="0.01" placeholder="00.00" onChange={(e) => { setAmount(e.target.value) }} 
                className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full outline-none" />
                <button className="bg-green-700 text-white px-3 py-2 block mb-2 w-full rounded-lg">Add transaction</button>
            </form>
        </>
    )
}

export default TransactionForm