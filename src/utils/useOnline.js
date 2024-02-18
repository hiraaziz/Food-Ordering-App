import { useEffect, useState } from "react";

const useOnline = () => {

    const [isOnline, setIsOnline] = useState(false);

    // clean up event listeners, whenever you change route , previous listeners will remain there 
    useEffect(() => {

        const handleOnline = () => {
            setIsOnline(false);
        }
        const handleoffline = () => {
            setIsOnline(true);
        }
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleoffline)

        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleoffline)
        }
    }, [])
    return isOnline
}
export default useOnline;