import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Raiting, RatingValueType} from './components/Raiting/Raiting';
import OnOff from './components/OnOff/OnOff';
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRaiting} from './components/UnControlledRaiting/UnControlledRaiting';
import UnControlledOnOff from './components/UnControlledOnOff/UnControlledOnOff';

function App() {
    console.log("App rendering")
    //делает что-то полезное
    //обязана вернуть JSX
    let [ratingValue, setRatingValue] = useState <RatingValueType>(0) //стейт для хранения состояния рейтинга
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false) //стейт для хранения состояния аккордиона (свернут/развернут)
    let [usersCollapsed, setUsersCollapsed] = useState<boolean>(false)
    let [settingsCollapsed, setSettingsCollapsed] = useState<boolean>(false)
    let [switchOn, setOn] = useState<boolean>(false)


    return (
        <div>

            <PageTitle title={"Page title 1"}/>
            <OnOff on={switchOn} onChange ={setOn}/>
            <OnOff on={switchOn} onChange ={setOn}/>
            <div><h3>UncontrolledOnOff:</h3></div>
            <UnControlledOnOff/>
            <UnControlledOnOff/>
            <div><h3>ControlledAccordions:</h3></div>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onClick = {setAccordionCollapsed}/>
            <Accordion titleValue={"Users"} collapsed={usersCollapsed} onClick = {setUsersCollapsed}/>
            <Accordion titleValue={"Settings"} collapsed={settingsCollapsed} onClick = {setSettingsCollapsed}/>
            <UnControlledAccordion titleValue={'UnControlledAccordion:'}/>
            <div><h3>UncontrolledRating:</h3></div>
            <UnControlledRaiting/>
            <div><h3>ControlledRating:</h3></div>
            <Raiting value={ratingValue} onClick = {setRatingValue}/>






        </div>
    );
}

export default App;

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return (
        <h1>{props.title}</h1>
    );
}



