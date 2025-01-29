import { useSelector } from "react-redux"
import ProfileHero from "./ProfileHero"
import ProfileInfo from "./ProfileInfo"
import ProfileExperience from "./ProfileExperience"


const ProfileMain = function (){

    const profilo = useSelector((store)=>{ return store.profile.data})
    //FETCH INFO PROFILO CON BEARER CASUALE DEI 6
    


    return(
        <>
            <ProfileHero profilo={profilo}/>
            <ProfileInfo />
            <ProfileExperience />
        </>
    )
}
export default ProfileMain