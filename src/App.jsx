import { GlobalProvider } from "./context/GlobalContext"
import Header from "./components/Header"
import Balance from "./components/Balance"
import TransactionForm from "./components/transactions/TransactionForm"
import TransactionList from "./components/transactions/TransactionList"

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <TransactionList />
    </GlobalProvider>
  )
}

export default App