// action types: ADD_ITEM, DEL_ITEM, UPDATE_ITEM, RESET_ITEM
export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [{ id: 1, name: 'iphone 12 pro max', price: 45000, amount: 1 }]
    case 'DEL_ITEM':
      return []
    default:
      return state
  }
}
