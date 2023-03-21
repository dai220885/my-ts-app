import React, {ChangeEvent, useState, KeyboardEvent, useReducer, useEffect} from 'react';
import styles from './CustomSelect.module.css'

export type CustomSelectItemType = {
    title: string
    value: any
}
type CustomSelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: CustomSelectItemType[]
}


export const CustomSelect = (props: CustomSelectPropsType) => {
    // let selectOnChangeHandler = (e: ChangeEvent<HTMLSelectElement>) =>{
    //     props.onChange(e.currentTarget.value) // в "e.currentTarget.value" будет находится значение параметра "value" выбранного option из выпадающего списка, после чего это значение через колбэк запишется в стейт и вернется снова в пропсах в параметре "parentValue" и отобразится в селекте))
    //     //console.log(e.currentTarget.value)
    // }
    const [active, setActive] = useState<boolean>(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);
    const selectedItem = props.items.find(item => item.value === props.value)
    const hoveredItem = props.items.find(item => item.value === hoveredElementValue)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    useEffect(()=>{setHoveredElementValue(props.value)}, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' ){
            for (let i = 0; i< props.items.length; i++) {
                if (props.items[i].value===hoveredElementValue){
                    const pretendentElement = e.key === 'ArrowDown'? props.items[i+1]: props.items[i-1]
                    if(pretendentElement){
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value)
            }

        }
        if (e.key === 'Enter' || e.key === 'Escape' ){
            setActive(false)
        }
    }
    return (
        // <div className={styles.select + ' ' + (active? styles.active: '')}> // можно скрыть элемент с помощью добавления/не добавления css стилей, а можно просто отрисовывать/не отрисовывать в зависимости от чего-то ( у нас от значения active)
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(item =>
                        <div className={styles.item + ' ' + (hoveredItem === item ? styles.selected : '')}
                             onMouseEnter={()=>setHoveredElementValue(item.value)}
                             key={item.value}
                             onClick={() => onItemClick(item.value)}
                        >
                            {item.title}
                        </div>)
                    }
                </div>
            }

        </div>

    );
}
