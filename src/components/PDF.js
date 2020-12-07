import React, { useState } from 'react'; 
import { Document, Page,pdfjs } from 'react-pdf'; 
import resume from '../images/MyResume.pdf';
  
//PDFjs worker from an external cdn 
  
const PDF = () => { 
      
   pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 
   
   const [numPages, setNumPages] = useState(null); 
   const [pageNumber, setPageNumber] = useState(1); 

   const onDocumentLoadSuccess = ({ numPages }) => { 
      setNumPages(numPages); 
      setPageNumber(1); 
   } 
   
   return (
      <div> 
         <Document 
            file={ resume } 
            onLoadSuccess={ onDocumentLoadSuccess } 
            > 
            <Page pageNumber={ pageNumber } /> 
         </Document> 
      </div> 
   ); 
}

export default PDF;