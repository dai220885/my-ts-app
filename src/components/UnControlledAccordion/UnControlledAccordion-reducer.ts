import React from 'react';

const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
export type AccStateType = {
    collapsed: boolean
}

const UnControlledAccordionReducer = (state: AccStateType, action: ToggleCollapsedActionType) => {
    switch (action.type){
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed}
        default: return state
    }

};


export type ToggleCollapsedActionType = ReturnType<typeof toggleCollapsedAC>
export const toggleCollapsedAC = () => ({type: TOGGLE_COLLAPSED} as const)


export default UnControlledAccordionReducer;

