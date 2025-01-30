import { useSelector } from "react-redux";
import HomeEachPost from "./HomeEachPost";

const HomePostList = function () {
  const allPosts = useSelector((state) => {
    return state.post.data;
  });
  //const dispatch= useDispatch()
  


  return (
    <>
      <div>
        {allPosts.toReversed().map((element, index) => {
          if (index < 10) {
            return <HomeEachPost key={element._id} element={element}/>
          }
          return;
        })}
      </div>
    </>
  );
};
export default HomePostList;
