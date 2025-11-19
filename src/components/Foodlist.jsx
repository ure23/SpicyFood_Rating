import { useState } from "react";


const List = ({name}) =>{
    return(
        <>
            <ul>
                {name && name.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        
        
        </>
    )
}
export default Foodlist;