import { GlobalProvider } from "./context/GlobalContext"
import Header from "./components/Header"
import Balance from "./components/Balance"
import TransactionForm from "./components/transactions/TransactionForm"
import TransactionList from "./components/transactions/TransactionList"
import IncomeExpenses from "./components/IncomeExpenses"

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <section className="container mx-auto w-2/6">
          <main className="bg-zinc-800 p-10 rounded-lg flex gap-x-8">
            <section>
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </section>
            <section className="w-full">
              <TransactionList />
            </section>
          </main>
        </section>
      </div>
    </GlobalProvider>
  )
}

export default App