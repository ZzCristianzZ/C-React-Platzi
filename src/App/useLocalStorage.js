import React from "react";

function useLocalStorage(itemName, initialValue){

    const [item, setItem] = React.useState(initialValue);
    // valor por defecto true para cuando este cargue sepamos que esta cargando nuestro initialValue
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
   
     React.useEffect(()=> {
      const localStorageItem = localStorage.getItem(itemName);  
      if (!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
  
        parsedItem= initialValue;
      }else{
        parsedItem = JSON.parse(localStorageItem);
      }
    
    })
    

 
   
     const saveItem = (newItem) => {
       localStorage.setItem(itemName, JSON.stringify(newItem));
       
       setItem(newItem);
     };
 
     return [item, saveItem]; 
 
 }

 export {useLocalStorage};