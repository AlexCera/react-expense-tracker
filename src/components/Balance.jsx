import { useGlobalContext } from "../context/GlobalContext"


function Balance() {
    const data = useGlobalContext();
    return (
        <>
            <h2>Balance</h2>

            <p> aa {JSON.stringify(data)}</p>
        </>
    )
}

export default Balance