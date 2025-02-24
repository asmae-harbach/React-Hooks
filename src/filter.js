import { useState } from "react";

function Filter({filterNote, filtreTitre}){

    function onClickNote(val){
        const noteNumber = Number(val);
        filterNote(noteNumber)
    }
    return(
        <>
            <select onChange={(e) =>onClickNote(e.target.value)} className="text-black">
                <option >Filtrez par note</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>

            </select>
            <input type="text" onChange={(e) =>filtreTitre(e.target.value)} placeholder="Filtrez par titre" className="text-black"></input>
            
        </>
    )
}
export default Filter