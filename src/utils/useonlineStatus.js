import { useEffect, useState } from "react";

// Custom hook for internet status
const useonlineStatus = () => {

    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    }, []) 
    
    // boolean
    return onlineStatus;
}

export default useonlineStatus;