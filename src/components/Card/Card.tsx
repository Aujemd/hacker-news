//Third part library
import TimeAgo from "javascript-time-ago";

//Components
import { Like } from "../Like/Like";

//Styles
import "./styles.scss";

//Context
import { useApplicationContext } from "../../context/ApplicationContext";

//Types
import { Post } from "../../hooks/useData";

export const Card = (post: Post) => {
  //Local states
  const { removeFave } = useApplicationContext();

  const { created_at, author, story_title, story_url } = post;

  const timeAgo = new TimeAgo("en-US");

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
            <span>{` by ${author}`}</span>
          </p>
        </div>
        <p className="card__text">{story_title} </p>
      </a>

      <Like post={post} />
    </article>
  );
};
