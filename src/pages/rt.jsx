import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Rt = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/home')
    },[])
    return (
        <>
        </>
    )
}

export default Rt;