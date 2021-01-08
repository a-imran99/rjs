import React from 'react'

function functionClick() {
    
    function clickHandler(){
        console.log("Button Cicked")
    }

    return (

        <div>
            <button onClick={clickHandler}> Click Me! </button>
        </div>
    )
}

export default functionClick
