import { useGlobalContext } from "../../context/GlobalContext"

export function TransactionItem({ transaction }) {
    const { deleteTransaction } = useGlobalContext();

    return (
        <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
            <p className="text-sm">{transaction.description}</p>
            <div>
                <span>${transaction.amount}</span>
                <button title="Delete this transaction" 
                    onClick={() => deleteTransaction(transaction.id)}>X</button>
            </div>
        </li>
    )
}