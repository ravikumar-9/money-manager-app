// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeBalance, expenseBalance, balanceAmount} = props

  console.log(incomeBalance)
  return (
    <>
      <li className="money-container">
        <div className="balance-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="amount-image"
          />
          <div>
            <p className="balance-heading" data-testid="balanceAmount">
              Your Balance
            </p>
            <p className="rupees">RS.{balanceAmount}</p>
          </div>
        </div>
      </li>
      <li className="money-container">
        <div className="balance-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="amount-image"
          />
          <div>
            <p className="balance-heading" data-testid="incomeAmount">
              Your Income
            </p>
            <p className="rupees">RS.{incomeBalance}</p>
          </div>
        </div>
      </li>
      <li className="money-container">
        <div className="balance-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="amount-image"
          />
          <div>
            <p className="balance-heading" data-testid="expensesAmount">
              Your Expenses
            </p>
            <p className="rupees">RS.{expenseBalance}</p>
          </div>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
