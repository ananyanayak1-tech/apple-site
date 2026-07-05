import React from "react";
import './App.css';

function DropdownMenu({data}){
     
    if(!data){
        return null;
    }

   
    return(
        <>
        <div className="dropdown">
            {
                Object.entries(data).map(([key , values], columnIndex) => (
                    <div className="column" key={key}>
                         <h4>{key}</h4>
                         {
                            values?.map((item, index) => (
                                <p key={index} 
                                className={columnIndex === 0 ? "primary-item" : "secondary-item"}>{item}</p>
                            ))
                         }

                    </div>
                    
                ))
            }
        </div>
        </>
    )
}

export default DropdownMenu;