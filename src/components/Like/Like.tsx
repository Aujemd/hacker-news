//React
import { useState, FC } from "react";

//Styles
import "./styles.scss";

//Context
import { useApplicationContext } from "../../context/ApplicationContext";

//Types
import { Post } from "../../hooks/useData";
type LikeProps = {
  post: Post;
};

export const Like: FC<LikeProps> = ({ post }) => {
  //Local states
  const { savedFaves, addFave, removeFave } = useApplicationContext();

  /**
   * isLiked
   * * Function to know if a card was liked
   * @param post The post to check
   * @param savedFaves Post faves saved
   * @returns the boolean if is liked true else false
   */
  const isLiked = (post: Post, savedFaves: Array<Post>): boolean => {
    const isLiked = savedFaves.find(
      (item: Post) => item.objectID === post.objectID
    );

    if (isLiked) {
      return true;
    }

    return false;
  };

  const [isCurrentLiked, setIsCurrentLiked] = useState<boolean>(
    isLiked(post, savedFaves)
  );

  /**
   * handleClick
   * * Function to execute when a card is clicked
   * Set states to when a card is clicked
   */
  const handleClick = (): void => {
    if (isCurrentLiked) {
      removeFave(post);
      setIsCurrentLiked(false);
    } else {
      addFave(post);
      setIsCurrentLiked(true);
    }
  };

  return (
    <div className="card__like__container" onClick={handleClick}>
      <img
        src={`assets/images/${isCurrentLiked ? "like" : "unlike"}.svg`}
        className="card__like"
        alt="like"
      />
    </div>
  );
};
