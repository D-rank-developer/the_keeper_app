import React from "react";
import HeaderComponent from "./Header";
import FooterComponent from "./footer";
import NoteComponent from "./Note";
function AppComponent(){
    return(
        <div>
           <HeaderComponent/>
           <NoteComponent/>
           <FooterComponent/>
        </div>
    )
}
export default AppComponent;