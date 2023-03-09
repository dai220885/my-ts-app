import React, {ChangeEvent} from 'react';

type CheckboxPropsType = {
    isChecked: boolean
    callBack: (newIsChecked: boolean) => void
}

export const Checkbox = (props: CheckboxPropsType) => {
    let checkboxOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        props.callBack(e.currentTarget.checked)
    }
    console.log("Checkbox rendering")
        return (
            <input type = 'checkbox' checked={props.isChecked} onChange={checkboxOnChangeHandler}/>


        );
}
