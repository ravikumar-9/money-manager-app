// Write your code here
import './index.css'

const TransactionItem = props => {
  const {amountDetails, deleteTransaction} = props

  const {title, amount, type, id} = amountDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  console.log(amountDetails)
  console.log(amount)

  return (
    <li className="history">
      <p className="title">{title}</p>
      <p className="title">{amount}</p>
      <p className="type">{type}</p>
      <button
        type="button"
        className="delete-button"
        onClick={onDeleteTransaction}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
