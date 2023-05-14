import { useGlobalContext } from "../context/GlobalContext"


function Balance() {
    const { transactions } = useGlobalContext();
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((sum, value) => (sum += value), 0)
    return (
        <>
            <h3>Your Balance</h3>
            <h1>${total}</h1>
        </>
    )
}

export default Balance