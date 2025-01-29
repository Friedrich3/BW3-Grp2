import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeEachPost from "./HomeEachPost";

const HomePostList = function () {
  const allPosts = useSelector((state) => {
    return state.post.data;
  });

  const [postList, setPostList] = useState(allPosts);

useEffect(()=>{

},[postList])

  return (
    <>
      <div>
        {postList.toReversed().map((element, index) => {
          if (index < 10) {
            return <HomeEachPost key={element.id} element={element} />
          }
          return;
        })}
      </div>
    </>
  );
};
export default HomePostList;
