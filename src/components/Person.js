import React from 'react'

function Person({person, value, email}) {
    
    return (
      <div>
          <h2>
            I am {person}, {value}, and my Email is {email}
          </h2>
          
      </div>
    );
}

export default Person
