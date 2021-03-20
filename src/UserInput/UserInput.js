import React from 'react';


const UserInput = (props) => {

   const style = {
      outline : 'none',
      width : '60%',
      padding : '10px 0px 8px 10px',
      border : '1px solid #ccc',
      borderRadius: '5px'
      
   }

   return <div>
            <h1>UserInput & UserOutput</h1>
            <input style={style} type="text" placeholder="Enter User Input Here" onChange ={props.changed}></input>
         </div>
}

export default UserInput;