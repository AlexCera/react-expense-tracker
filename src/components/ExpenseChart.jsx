import { useGlobalContext } from "../context/GlobalContext"
import { VictoryPie, VictoryLabel } from "victory";
import { BsPieChartFill } from "react-icons/bs";

function ExpenseChart() {

    const { transactions } = useGlobalContext();

    const totalIncomes = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0);

    const totalExpenses = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;
    
    const expensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);
    const incomesPercentage = 100 - (expensesPercentage);

    if (totalIncomes === 0 && totalExpenses === 0) {
        return (
            <div className=" p-4 my-2">
                <div className="h-full flex items-center justify-center w-full flex-col">
                    <BsPieChartFill className="text-9xl" />
                    <h1 className="text-3xl font-bold my-2">No data yet</h1>
                </div>
            </div>
        );
    }

    return (
        <VictoryPie
            animate={{ duration: 500 }}
            colorScale={["#FF0020", "#00FF30"]}
            data={[
                { x: "Expenses", y: expensesPercentage },
                { x: "Incomes", y: incomesPercentage },
            ]}
            labels={({ datum }) => `${datum.x}\n${datum.y}%`}
            labelComponent={
                <VictoryLabel angle={-15} style={{ fill: "white", fontSize: "13px" }} />
            }
        />
    )
}

export default ExpenseChart