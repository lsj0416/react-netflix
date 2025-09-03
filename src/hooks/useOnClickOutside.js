import React, { useEffect } from 'react'

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        
        const listener = (event) => {
            console.log('ref', ref);
            if(!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler();
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        }
    }, [])
    return (
        <div>
        
        </div>
    )
}

export default useOnClickOutside
