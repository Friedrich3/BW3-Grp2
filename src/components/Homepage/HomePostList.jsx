import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeEachPost from "./HomeEachPost";

const HomePostList = function () {
  const allPosts = useSelector((state) => {
    return state.post.data;
  });
  //const dispatch= useDispatch()
  const [postList] = useState(allPosts);
  const[render,setRender] = useState(false)
  
  useEffect(()=>{
    console.log('renderizzato Lista') //TODO
},[render])

  return (
    <>
      <div>
        {postList.toReversed().map((element, index) => {
          if (index < 10) {
            return <HomeEachPost key={element._id} element={element} setRender={setRender} render={render}/>
          }
          return;
        })}
      </div>
    </>
  );
};
export default HomePostList;
