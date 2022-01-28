import  todoReducer, { todoAdded } from '../store/todoSlice'

test('should return the initial state', () => {
    expect(todoReducer(undefined, {})).toEqual(
        {
            todos: [],
            filter: 'all'
        }
    )
})