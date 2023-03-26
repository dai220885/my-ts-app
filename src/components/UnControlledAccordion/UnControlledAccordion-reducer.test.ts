import React from 'react';
import UnControlledAccordionReducer, {AccStateType, toggleCollapsedAC} from './UnControlledAccordion-reducer';

test('collapsed should be true', () => {
    //data
    const state: AccStateType = {
        collapsed: false
    }
    //action
    const newState = UnControlledAccordionReducer(state, toggleCollapsedAC())

    //expect
    expect(newState.collapsed).toBe(true)
    expect(state.collapsed).toBe(false)
})

test('collapsed should be false', () => {
    //data
    const state: AccStateType = {
        collapsed: true
    }
    //action
    const newState = UnControlledAccordionReducer(state, toggleCollapsedAC())

    //expect
    expect(newState.collapsed).toBe(false)
    expect(state.collapsed).toBe(true)
})

// test('collapsed should be false after dispatching incorrect action', () => {
//     //data
//     const state: AccStateType = {
//         collapsed: false
//     }
//     //action
//     //const newState = UnControlledAccordionReducer(state, {type: 'WRONG-ACTION'})
//
//     //expect
//     //expect(()=> {UnControlledAccordionReducer(state, {type: 'WRONG-ACTION'})}).toThrowError()
//     expect(state.collapsed).toBe(false)
// })