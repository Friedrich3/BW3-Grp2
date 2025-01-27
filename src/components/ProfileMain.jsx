import { useDispatch, useSelector } from "react-redux"
import ProfileHero from "./ProfileHero"
import { getDataAction } from "../redux/action"
import { useEffect } from "react"

const ProfileMain = function (){

    const dispatch = useDispatch()
    const profilo = useSelector((state)=>{ return state.profile.data})
    //FETCH INFO PROFILO CON BEARER CASUALE DEI 6
    
    
    useEffect(()=>{
        dispatch(getDataAction()) 
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

    return(
        <>
            <ProfileHero profilo={profilo}/>
        </>
    )
}
export default ProfileMain