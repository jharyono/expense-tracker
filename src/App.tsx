import { useState } from "react"
import ExpenseList from "./components/ExpenseList"
import ExpenseFilter from "./components/ExpenseFilter"
import ExpenseForm from "./components/ExpenseForm"
import Navbar from "./components/Navbar"

function App() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Electricity", amount: 10, category: "Utilities" },
    {
      id: 2,
      description: "Watch Movie",
      amount: 15,
      category: "Entertainment",
    },
    { id: 3, description: "Lunch", amount: 15, category: "Groceries" },
    { id: 4, description: "Clean Water", amount: 20, category: "Utilities" },
    { id: 5, description: "Dinner", amount: 35, category: "Groceries" },
    { id: 6, description: "Netflix Bill", amount: 45, category: "Utilities" },
  ])

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses

  return (
    <>
      <Navbar />
      <div className="m-5">
        <div className="mb-5">
          <ExpenseForm
            onSubmit={(expense) =>
              setExpenses([
                ...expenses,
                { ...expense, id: expenses.length + 1 },
              ])
            }
          />
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  )
}

export default App
