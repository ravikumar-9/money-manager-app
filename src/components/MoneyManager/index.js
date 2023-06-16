import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    amount: '',
    title: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionsList: [],
  }

  getIncome = () => {
    let income = 0

    const {transactionsList} = this.state

    transactionsList.forEach(eachIncome => {
      if (eachIncome.type === transactionTypeOptions[0].displayText) {
        income += parseInt(eachIncome.amount)
      }
    })

    return income
  }

  getExpenses = () => {
    let expense = 0

    const {transactionsList} = this.state

    transactionsList.forEach(eachExpense => {
      if (eachExpense.type === transactionTypeOptions[1].displayText) {
        expense += parseInt(eachExpense.amount)
      }
    })

    return expense
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({optionId: event.target.value})
  }

  onAddAmountHistory = event => {
    event.preventDefault()
    const {amount, optionId, title} = this.state

    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption

    const newAmountHistory = {
      id: uuidv4(),
      title,
      amount,
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newAmountHistory],
      amount: '',
      optionId: '',
      title: '',
    }))
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedTransactionList = transactionsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
      transactionsList: updatedTransactionList,
    })
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {amount, title, optionId, transactionsList} = this.state

    const incomeBalance = this.getIncome()

    const expenseBalance = this.getExpenses()

    const balanceAmount = this.getBalance()

    return (
      <div className="bg-container">
        <div className="top-section">
          <h1 className="name-heading">Hi,Richard</h1>
          <p className="description">
            welcome back to your
            <span className="des-styled"> Money Manager</span>
          </p>
        </div>
        <ul className="money-section">
          <MoneyDetails
            amount="100"
            incomeBalance={incomeBalance}
            expenseBalance={expenseBalance}
            balanceAmount={balanceAmount}
          />
        </ul>
        <div className="transaction-history-container">
          <form className="inputs-container" onSubmit={this.onAddAmountHistory}>
            <h1 className="transactions-heading">Add Transactions</h1>
            <label className="label-title" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="title-input"
              placeholder="Title"
              value={title}
              onChange={this.onChangeTitle}
            />
            <label className="label-amount" htmlFor="amount">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              className="amount-input"
              placeholder="Amount"
              value={amount}
              onChange={this.onChangeAmount}
            />
            <label className="label-type" htmlFor="type">
              Type
            </label>
            <select
              id="type"
              className="type-input"
              value={optionId}
              onChange={this.onChangeType}
            >
              {transactionTypeOptions.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <ul className="transactions-container">
            <h1 className="history-heading">History</h1>
            <div className="transaction-details">
              <p className="amount">Title</p>
              <p className="amount">Amount</p>
              <p className="amount">Type</p>
            </div>
            {transactionsList.map(eachAmount => (
              <TransactionItem
                amountDetails={eachAmount}
                key={eachAmount.id}
                deleteTransaction={this.deleteTransaction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
