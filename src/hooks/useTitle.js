import { useEffect } from "react"


const useTitle = title => {
    useEffect(() =>{
        document.title = `${title}-news-dragon`
    } , [])
};

export default useTitle;