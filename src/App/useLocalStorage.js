import React from "react";

function useLocalStorage(itemName, initialValue){

    const [item, setItem] = React.useState(initialValue);
    // valor por defecto true para cuando este cargue sepamos que esta cargando nuestro initialValue
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
   
    let parsedItem;

     React.useEffect(()=> {
      setTimeout(()=>{
        //Encapsulamos el codigo con la idea de utilizar los actualizadores de nuestros estados de loading y error utilizando el try y el catch que nos permite mostrar si funciona o no, y capturar el error. 
      try{
        const localStorageItem = localStorage.getItem(itemName);  
        if (!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
    
          parsedItem= initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
      } catch(error){
       // En dado caso que falle, tenemos que matar ese estado de carga 
        setLoading(false);
        setError(true);
      }
      }, 2000);
    });
    

 
   
     const saveItem = (newItem) => {
       localStorage.setItem(itemName, JSON.stringify(newItem));
       
       setItem(newItem);
     };
 
     return {
      item, 
      saveItem,
      loading,
      error,
    }; 
 
 }

 export {useLocalStorage};