import todoReducer, { taskLoad, todoSlice, inputDelete, updateText, updateChecker, completedAll, deleteAll, createTask, updateFilter } from '../store/todoSlice'

test('should return the initial state', () => {
    expect(todoReducer(undefined, {})).toEqual(
        {
            todos: [],
            filter: 'all'
        }
    )
})

// test('should handle a todo being added to an empty list', () => {
//     // const previousState = [{_id: "61f3c758e94a920cb37882aa",date: "2022-01-28T21:36:01.717Z",desc: "",done: false,text: "5"}]
//     // todoReducer(undefined, {}).toEqual(
//     //     {
//     //         todos: [],
//     //         filter: 'all'
//     //     }
//     // )
//     const newFilter = 'comoleated'
//     expect(todoReducer(newFilter, updateFilter(_, newFilter))).toEqual(
//         {
//             filter: 'comoleated'
//         }
//     )
// })


