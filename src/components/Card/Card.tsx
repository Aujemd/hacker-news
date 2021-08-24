//styles
import "./styles.scss";

export const Card = () => {
  return (
    <article className="card">
      <div className="card__text__container">
        <div className="card__timeago__container">
          <img
            src="assets/images/clock.svg"
            className="card__clock"
            alt="clock"
          />
          <p className="card__timeago">1 hour ago by author</p>
        </div>
        <p className="card__text">
          Realize for React for Visualizing State ﬂow and component hierarchy
        </p>
      </div>

      <div className="card__like__container">
        <img src="assets/images/like.svg" className="card__like" alt="like" />
      </div>
    </article>
  );
};
