import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string;
}

function UnControlledAccordion(props: AccordionPropsType) {
    //локальный стейт для хранения состояния (свернут/развернут - collapsed(true/false))
    let [collapsed, setCollapsed] = useState<boolean>(false)

    console.log("UnControlledAccordion rendering")
        return (
            <div>
                <UnControlledAccordionTitle title={props.titleValue} collapsed={collapsed} setCollapsed={setCollapsed}/>
                {!collapsed&&<UnControlledAccordionBody/>} {/*если collapsed===true, то AccordionBody не отобразится*/}
            </div>

        );


}


type UnControlledAccordionTitlePropsType = {
    title: string;
    collapsed: boolean;
    setCollapsed: (collapsed:boolean) => void
}

function UnControlledAccordionTitle(props: UnControlledAccordionTitlePropsType) {
    console.log("UnControlledAccordionTitle rendering")
    return (
        <h3 onClick={()=>{props.collapsed
            ? props.setCollapsed(false)
            : props.setCollapsed(true)}}>
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