import { GlobalProvider } from "./context/GlobalContext"
import Header from "./components/Header"
import Balance from "./components/Balance"
import TransactionForm from "./components/transactions/TransactionForm"
import TransactionList from "./components/transactions/TransactionList"
import IncomeExpenses from "./components/IncomeExpenses"
import ExpenseChart from "./components/ExpenseChart"

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center gap-x-4">
        <section className="container  w-2/4">
          <main className="bg-zinc-800 p-10 rounded-lg flex gap-x-8">
            <section>
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </section>
            <section className="flex flex-col flex-1">
              <ExpenseChart />
            </section>
          </main>
        </section>
        <section className="container  w-2/5">
          <main className="bg-zinc-800 p-10 rounded-lg">
            <TransactionList />
          </main>
        </section>
      </div>
    </GlobalProvider>
  )
}

export default App