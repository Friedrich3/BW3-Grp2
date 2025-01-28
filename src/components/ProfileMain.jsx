import { useSelector } from "react-redux"
import ProfileHero from "./ProfileHero"


const ProfileMain = function (){

    const profilo = useSelector((state)=>{ return state.profile.data})
    //FETCH INFO PROFILO CON BEARER CASUALE DEI 6
    


    return(
        <>
            <ProfileHero profilo={profilo}/>
        </>
    )
}
export default ProfileMain