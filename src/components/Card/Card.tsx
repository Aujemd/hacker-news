//React
import { useState } from "react";

//third part library
import TimeAgo from "javascript-time-ago";

//styles
import "./styles.scss";

//Context
import { useSavedFaves } from "../../context/SavedFavesContext";

//types
import { Post } from "../../hooks/useData";

//methods
const isLiked = (post: Post, savedFaves: Array<Post>) => {
  const isLiked = savedFaves.find(
    (item: Post) => item.objectID === post.objectID
  );

  if (isLiked) {
    return true;
  }

  return false;
};
export const Card = (post: Post) => {
  const { savedFaves, addSavedFave, removeSavedFave } = useSavedFaves();

  const [isCurrentLiked, setIsCurrentLiked] = useState<boolean>(
    isLiked(post, savedFaves)
  );

  const { created_at, author, story_title } = post;

  const timeAgo = new TimeAgo("en-US");

  const handleClick = () => {
    if (isCurrentLiked) {
      removeSavedFave(post);
      setIsCurrentLiked(false);
    } else {
      addSavedFave(post);
      setIsCurrentLiked(true);
    }
  };

  return (
    <article className="card">
      <div
        className="card__text__container"
        onClick={() => removeSavedFave(post)}
      >
        <div className="card__timeago__container">
          <img
            src="assets/images/clock.svg"
            className="card__clock"
            alt="clock"
          />
          <p className="card__timeago">
            {timeAgo.format(new Date(created_at))}
            by <span>{author}</span>
          </p>
        </div>
        <p className="card__text">{story_title} </p>
      </div>

      <div className="card__like__container" onClick={handleClick}>
        <img
          src={`assets/images/${isCurrentLiked ? "like" : "unlike"}.svg`}
          className="card__like"
          alt="like"
        />
      </div>
    </article>
  );
};
