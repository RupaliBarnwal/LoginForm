import React from "react"
import  ReactDOM  from "react-dom/client"
import Form from "./Form";
import ReactForm from "./ReactForm";

const Title=()=>(
    <h1 className="head"> Namaste React</h1>

  );

const Layout=()=>{
    return(
        <div>
        {/* <Form/> */}
        <ReactForm/>
       </div>
    )
};

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(Layout());