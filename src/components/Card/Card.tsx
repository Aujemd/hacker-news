//React
import { useState } from "react";

//Third part library
import TimeAgo from "javascript-time-ago";

//Styles
import "./styles.scss";

//Context
import { useApplicationContext } from "../../context/ApplicationContext";

//Types
import { Post } from "../../hooks/useData";

export const Card = (post: Post) => {
  //Local states
  const { savedFaves, addFave, removeFave } = useApplicationContext();

  const { created_at, author, story_title, story_url } = post;

  const timeAgo = new TimeAgo("en-US");

  //Methods

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
    <article className="card">
      <a
        href={story_url}
        target="_blank"
        rel="noreferrer"
        className="card__text__container"
        onClick={() => removeFave(post)}
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
      </a>

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
