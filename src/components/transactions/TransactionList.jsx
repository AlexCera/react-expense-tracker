import { useGlobalContext } from "../../context/GlobalContext"

function TransactionList() {
    const { transactions, deleteTransaction } = useGlobalContext();
    return (
        <>
            {
                transactions.map(transaction => (
                    <div key={transaction.id}>
                        <p>{transaction.description}</p>
                        <span>{transaction.amount}</span>
                        <button title="Delete this transaction" onClick={() => deleteTransaction(transaction.id)}>X</button>
                    </div>
                ))
            }
        </>
    )
}

export default TransactionList