import React, { useState } from "react";



function Demo() {
 
      const [name, setName] = useState("");
      const handleSubmit=(event)=>{
            event.preventDefault();
    alert(`The name you entered was: ${name}`)
      }
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                       
                        <input type="submit" /> 
                </form>
            </div>
        )
 
}
export default Demo;