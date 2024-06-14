import { useState } from "react";

export function useLocalStorage(key, value) {
    const [ storedValue, setStoredValue ] = useState(()=> {
        try{
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : value;
        } 
        catch(err) {
            console.log(err)
            return value;
        }
        
    });

    const setValue = value => {
        return ;
    }

    return [ storedValue, setValue ]
}