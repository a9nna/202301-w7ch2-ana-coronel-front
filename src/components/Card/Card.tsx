const Card = (): JSX.Element => {
  return (
    <article className="card">
      <img
        src="https://media.vandal.net/i/620x387/1-2022/20221181037175_1.jpg"
        alt="Terminator"
        width="200"
        height="150"
        className="card__image"
      />
      <h2 className="card__title">Terminator</h2>
      <div className="card__info-top">
        <span>Speed: 5</span>
        <span>Endurance: 7</span>
      </div>
      <span className="card__info-bottom">Creation date: 27/03/2137</span>
      <div className="card__buttons buttons">
        <button className="buttons__modify" aria-label="modify button">
          📝
        </button>
        <button className="buttons__delete" aria-label="delete button">
          🗑️
        </button>
      </div>
    </article>
  );
};

export default Card;
