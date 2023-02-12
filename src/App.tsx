import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Raiting} from "./components/Raiting/Raiting";
import OnOff from './components/OnOff/OnOff';
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRaiting} from './components/UnControlledRaiting/UnControlledRaiting';

function App() {
    console.log("App rendering")
    //делает что-то полезное
    //обязана вернуть JSX
    return (
        <div>

            <PageTitle title={"Page title 1"}/>
            <Raiting value={2}/>
            <OnOff/>
            <OnOff/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>
            <Accordion titleValue={"Settings"} collapsed={false}/>
            <UnControlledAccordion titleValue={'UnControlledAccordion'}/>
            <Raiting value={0}/>
            <Raiting value={1}/>
            <Raiting value={2}/>
            <Raiting value={3}/>
            <Raiting value={4}/>
            <Raiting value={5}/>
            <div>UnconrolledRaiting:</div>
            <UnControlledRaiting/>



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



