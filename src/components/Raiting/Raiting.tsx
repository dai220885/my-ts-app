import React from 'react';
import star from './star.jpg'
/*type RaitingPropsType1 = {
    value: number;
}*/

type RaitingPropsType2 = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}


export function Raiting(props: RaitingPropsType2) {
    console.log('Raiting rendering')
    return (
        <div>
            <img src={star} alt="star img"/>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    );

    // if (props.value === 1) {
    //     return (
    //         <div>
    //             <img src="./konvert-4.jpg" alt="star"/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     );
    // }
    // if (props.value === 2) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     );
    // }
    // if (props.value === 3) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     );
    // }
    // if (props.value === 4) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //         </div>
    //     );
    // }
    // if (props.value === 5) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //         </div>
    //     );
    // }
    // return (
    //     <div>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //     </div>
    // );

}


type StarPropsType = {
    selected: boolean;
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return (
        <>
            {props.selected&&(<span> <b>star </b></span>)}
            {!props.selected&&<span>star </span>}
        </>
    );

//первоначальный вариант
    // if (props.selected) {
    //     return (
    //         <span> <b>star </b></span>
    //     );
    // } else {
    //     return (
    //         <span>star </span>
    //     );
    // }

}