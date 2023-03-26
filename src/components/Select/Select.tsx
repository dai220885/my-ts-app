import React, {ChangeEvent} from 'react';

type SelectPropsType = {
    parentValue: string | undefined
    callBack: (selectedValue: string | undefined) => void
}

export const Select = (props: SelectPropsType) => {
    let selectOnChangeHandler = (e: ChangeEvent<HTMLSelectElement>) =>{
        props.callBack(e.currentTarget.value) // в "e.currentTarget.value" будет находится значение параметра "value" выбранного option из выпадающего списка, после чего это значение через колбэк запишется в стейт и вернется снова в пропсах в параметре "parentValue" и отобразится в селекте))
        //console.log(e.currentTarget.value)
    }
    console.log("Select rendering")
        return (
            <select value={props.parentValue} onChange={selectOnChangeHandler}>
                <option>None</option>
                <option value="1">Minsk</option>
                <option value="2">Kiev</option>
                <option value="3">Moscow</option>
            </select>

        );
}
