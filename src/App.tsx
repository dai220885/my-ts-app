import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Raiting} from "./components/Raiting/Raiting";

function App() {
    console.log("App rendering")
    //делает что-то полезное
    //обязана вернуть JSX
    return (
        <div>
            <PageTitle title={"Page title 1"}/>
            <PageTitle title={"Page title 2"}/>
            <PageTitle title={"Page title 3"}/>
            <PageTitle title={"Page title 4"}/>
            <Raiting value={2}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>
            <Accordion titleValue={"Settings"} collapsed={false}/>
            <Raiting value={0}/>
            <Raiting value={1}/>
            <Raiting value={2}/>
            <Raiting value={3}/>
            <Raiting value={4}/>
            <Raiting value={5}/>
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



