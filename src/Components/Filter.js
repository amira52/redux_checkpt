import React from 'react'

const Filter = ({setStatus}) => {
    return (
        <div>
           <button onClick={()=> setStatus("all")}>All</button> 
           <button onClick={()=> setStatus("done")}>Done</button> 
           <button onClick={()=> setStatus("undone")}>Undone</button> 
        </div>
    )
}

export default Filter
