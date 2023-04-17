import React, {useState} from 'react';
import './App.css';
import Accordion, {AccordionItemType} from './components/Accordion/Accordion';
import {Raiting, RatingValueType} from './components/Raiting/Raiting';
import OnOff from './components/OnOff/OnOff';
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRaiting} from './components/UnControlledRaiting/UnControlledRaiting';
import UnControlledOnOff from './components/UnControlledOnOff/UnControlledOnOff';
import {Select} from './components/Select/Select';
import {Checkbox} from './components/Checkbox/Checkbox';
import {v1} from 'uuid';
import {CustomSelect} from './components/CustomSelect/CustomSelect';
import {Clock} from './components/Clock/Clock';
import {ResetEffectExample} from './components/ResetEffectExample';
import {log} from 'util';

//добавили тестовый комментарий

function App() {
    console.log('App rendering')
    //делает что-то полезное
    //обязана вернуть JSX
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0) //стейт для хранения состояния рейтинга
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false) //стейт для хранения состояния аккордиона (свернут/развернут)
    let [usersCollapsed, setUsersCollapsed] = useState<boolean>(false)
    let [settingsCollapsed, setSettingsCollapsed] = useState<boolean>(false)
    let [switchOn, setOn] = useState<boolean>(false)
    let [ParentValue, setParentValue] = useState<string | undefined>(undefined) //стейт для хранения значения, выбранного в  селекте
    let [isChecked, setIsChecked] = useState<boolean>(false)//стейт для хранения значения, выбранного в   чекбоксе
    let [title, setTitle] = useState<string>('users') //стейт для хранения заголовка аккордиона с юзерами
    let users: AccordionItemType[] = [
        {id: v1(), name: 'Sveta', age: 23},
        {id: v1(), name: 'Victor', age: 43},
        {id: v1(), name: 'Andrey', age: 28},
        {id: v1(), name: 'Nikita', age: 33},
    ]
    let [selectValue, setSelectValue] = useState()
    let [testCount, setTestCount] = useState(0)

    let createPromise = () =>{
        let pr = new Promise((resolve, reject) =>{
            setTimeout(()=>{
                console.log(2.1)
                resolve('resolved');
            }, 0) //setTimeout попадает в мАкротаски
            setTimeout(()=>console.log(2.2), 0) //setTimeout попадает в мАкротаски
            console.log(2.3)
        })
        //pr.then(()=>createPromise()) //создает мИкротаску, которая вызывает эту же функцию и снова создает микротаску. в итоге браузет зависает
        return pr
    }
    console.log(1)
    console.log(2)
    // let pr = new Promise((resolve, reject) =>{
    //     setTimeout(()=>console.log(2.1), 0)
    //     resolve('resolved');
    //     setTimeout(()=>console.log(2.2), 0)
    //     console.log(2.3)
    // })
    createPromise().then(()=>console.log(4)) //then у промиса (аналог подписчика) и колбэк из него попадает в мИкротаски сразу же, как только промис зарезолвился
    console.log(3)



    return (
        <div>

            <PageTitle title={'Page title 1'}/>
            {/*<OnOff on={switchOn} onChange ={setOn}/>*/}
            {/*<OnOff on={switchOn} onChange ={setOn}/>*/}
            {/*<div><h3>UncontrolledOnOff:</h3></div>*/}
            {/*<UnControlledOnOff/>*/}
            {/*<UnControlledOnOff/>*/}
            {/*<div><h3>ControlledAccordions:</h3></div>*/}
            {/*/!*<Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onClick = {setAccordionCollapsed}/>*!/*/}
            {/*<Accordion titleValue={title} collapsed={usersCollapsed} onClick = {setUsersCollapsed} items={users} callBack ={setTitle}/>*/}
            {/*/!*<Accordion titleValue={"Settings"} collapsed={settingsCollapsed} onClick = {setSettingsCollapsed}/>*!/*/}
            <UnControlledAccordion titleValue={'UnControlledAccordion:'}/>
            {/*<div><h3>UncontrolledRating:</h3></div>*/}
            {/*<UnControlledRaiting/>*/}
            {/*<div><h3>ControlledRating:</h3></div>*/}
            {/*<Raiting value={ratingValue} onClick = {setRatingValue}/>*/}
            {/*<div><h3>ControlledSelect:</h3></div>*/}
            {/*<Select parentValue={ParentValue} callBack={setParentValue}/>*/}
            {/*<div><h3>ControlledChecbox:</h3></div>*/}
            {/*<Checkbox isChecked={isChecked} callBack={setIsChecked}/>*/}
            <div><h3>CustomSelect:</h3></div>
            <CustomSelect
                value={selectValue}
                onChange={setSelectValue}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Kiev'},
                    {value: '3', title: 'Moscow'},
                ]}
            />
            <div><h3>Clock:</h3></div>
            <Clock mode={'digital'}/>
            <Clock mode={'analog'}/>
            <Clock/>

            <div>
                {testCount}
                <button onClick={()=>{setTestCount(testCount + 1)}}>+</button>
            </div>
            <div><h3>ResetEffectExample:</h3></div>
            {testCount % 2 ===0? <ResetEffectExample/> : <></>}




        </div>
    );
}

export default App;

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    //console.log('PageTitle rendering')
    return (
        <h1>{props.title}</h1>
    );
}



