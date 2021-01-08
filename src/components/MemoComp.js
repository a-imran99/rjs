import React from 'react'

function MemoComp({name}) {
    console.log("rendering Memo componenet")
    return (
        <div>
            {name},hey
        </div>
    )
}

export default React.memo(MemoComp)
