import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Fitness Center`;
    }, [title])
};

export default useTitle;