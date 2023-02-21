import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onClick: (collapsed: boolean)=>void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
        return (
            <div>
                <AccordionTitle
                    title={props.titleValue}
                    collapsed={props.collapsed}
                    onClick={props.onClick}/>
                {!props.collapsed&&<AccordionBody/>} {/*если collapsed===true, то AccordionBody не отобразится*/}
            </div>
        );
}

//первоначальный вариант с использованием if
// function Accordion2(props: AccordionPropsType) {
//     console.log("Accordion rendering")
//     if (props.collapsed){
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//
//         );
//     }
//     return (
//         <div>
//             <AccordionTitle title={props.titleValue}/>
//             <AccordionBody/>
//         </div>
//
//     );
// }

type AccordionTitlePropsType = {
    title: string;
    collapsed: boolean;
    onClick: (collapsed: boolean)=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    let accordionTitleOnClickHandler = ()=>props.onClick(!props.collapsed)
    return (
        <h3 onClick={accordionTitleOnClickHandler}>{props.title}</h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;