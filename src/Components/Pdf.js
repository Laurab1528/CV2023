
import React from "react"; 
import pdf from "../Components/PDF.pdf";

export const Pdf = () => {


  

    // Function will execute on click of button 

    const onButtonClick = () => { 

        // using Java Script method to get PDF file 

        fetch(pdf).then(response => { 

            response.blob().then(blob => { 

                // Creating new object of PDF file 

                const fileURL = window.URL.createObjectURL(blob); 

                // Setting various property values 

                let alink = document.createElement('a');                

                
                


                alink.href = fileURL; 

                alink.setAttribute(
                    'download',
                    pdf,
                );
                document.body.appendChild(alink);


                alink.click(); 

                alink.parentNode.removeChild(alink);

            }) 

        }) 

    } 

    return ( 

        <> 

            <center> 


                <button onClick={onButtonClick}> 

                    Download PDF 

                </button> 

            </center> 

        </> 

    ); 
}; 


    
    
