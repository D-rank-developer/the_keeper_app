import React from 'react';
function FooterComponent(){
    const currentYear = new Date().getFullYear();
    return(
        <footer><p>Copyright © {currentYear}</p></footer>
            
        
    )
}
export default FooterComponent;