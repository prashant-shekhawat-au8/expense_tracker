export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        personal_transactions: state.personal_transactions.filter(transaction => transaction.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        personal_transactions: [action.payload, ...state.personal_transactions]
      }
    default:
      return state;
  }
}