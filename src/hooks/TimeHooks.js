import { useEffect, useState } from "react";

export const useTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return {
        time: `${time.getUTCHours()}:${time.getUTCMinutes()}`,
        date: time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC'})
    }
}