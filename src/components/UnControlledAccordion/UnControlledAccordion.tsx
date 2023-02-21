import React, {useState, MouseEvent} from 'react';

type AccordionPropsType = {
    titleValue: string;
}

function UnControlledAccordion(props: AccordionPropsType) {
    //локальный стейт для хранения состояния (свернут/развернут - collapsed(true/false))
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let onClickHandler = ()=>setCollapsed(!collapsed)
    console.log("UnControlledAccordion rendering")
        return (
            <div>
                <UnControlledAccordionTitle title={props.titleValue} onClick ={onClickHandler}/>
                {!collapsed&&<UnControlledAccordionBody/>} {/*если collapsed===true, то AccordionBody не отобразится*/}
            </div>

        );


}


type UnControlledAccordionTitlePropsType = {
    title: string;
    onClick: ()=>void
}

function UnControlledAccordionTitle(props: UnControlledAccordionTitlePropsType) {
    console.log("UnControlledAccordionTitle rendering")
    return (
        <h3 onClick={props.onClick}>
            {props.title}
        </h3>
    );
}

function UnControlledAccordionBody() {
    console.log("UnControlledAccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UnControlledAccordion;