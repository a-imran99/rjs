import React from 'react';

const greeting = (props) => {
    const {name , heroName} = props;
    console.log(name , heroName);
    return(
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}
export default greeting;

//In parameter destructure 


// const greeting = ({name , heroName} ) => {
//     return(
//         <div>
//             <h1>
//                 Hello {name} a.k.a {heroName}
//             </h1>
//         </div>
//     )
// }