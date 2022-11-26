import { useRef } from "react";
import { useEffect } from "react";

export const useObserver = (ref, canLoad, isLoading, callback)  => {
    const observer = useRef();
    useEffect(()=>{

        if(isLoading) return;
        if(observer.current) observer.current.disconnect();
        var cb = function(entries, observer) {
            /* Content excerpted, show below */
            if (entries[0].isIntersecting && canLoad
              ){
                
                callback();
                
            }
            //console.log(entries);
            //console.log(lastElement);
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current); 
       
      
        },[isLoading])
}