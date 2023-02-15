import React, {useState, MouseEvent} from 'react';
import star from './star.jpg'

export function UnControlledRaiting() {
    //локальный стейт для хранения количества звезд (значения рейтинга)
    let [starValue, setStarValue] = useState<number>(0)

    console.log('Raiting rendering')
    return (
        <div>
            <img src={star} alt="star img"/>
            <button onClick={()=>{setStarValue(0)}}>0</button>
            <UnControlledStar
                selected={starValue > 0}
                setStarValue={setStarValue}
                starValue={1}/>
            <button onClick={()=>{setStarValue(1)}}>1</button>
            <UnControlledStar
                selected={starValue > 1}
                setStarValue={setStarValue}
                starValue={2}/>
            <button onClick={()=>{setStarValue(2)}}>2</button>
            <UnControlledStar
                selected={starValue > 2}
                setStarValue={setStarValue}
                starValue={3}/>
            <button onClick={()=>{setStarValue(3)}}>3</button>
            <UnControlledStar
                selected={starValue > 3}
                setStarValue={setStarValue}
                starValue={4}/>
            <button onClick={()=>{setStarValue(4)}}>4</button>
            <UnControlledStar
                selected={starValue > 4}
                setStarValue={setStarValue}
                starValue={5}/><button onClick={()=>{setStarValue(5)}}>5</button>
        </div>
    );

}

type UnControlledStarPropsType = {
    selected: boolean;
    setStarValue:(starValue: number)=>void
    starValue: number
}

function UnControlledStar(props: UnControlledStarPropsType) {
    console.log('Star rendering')
    const starOnClickHandler =  (event: MouseEvent<HTMLSpanElement>)=>{props.setStarValue(props.starValue)}

    return (
        <>
            {/*условный рендеринг:*/}
            {/*{props.selected&&(<span> <b>star </b></span>)}*/}
            {/*{!props.selected&&<span>star </span>}*/}

            {/*то же самое, но тернарным выражением:*/}
            {props.selected
                ?<span onClick={starOnClickHandler}> <b>star </b></span>
                :<span onClick={starOnClickHandler}>star </span>}
        </>
    );
}