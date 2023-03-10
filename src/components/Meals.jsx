import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";

const Meals = () => {
  const { meals, loading, selectMeal } = useGlobalContext();
  if (loading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (meals.length < 1) {
    return (
      <section className="section">
        <h4>Nekas labs neatradās, pameklē kaut ko citu!</h4>
      </section>
    );
  }

  return (
    <section className="section-center">
      {meals.map((singleMeal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;

        return (
          <article className="single-meal" key={idMeal}>
            <img
              src={image}
              className="img"
              onClick={() => selectMeal(idMeal)}
              alt="kkāda bilde"
            />
            <footer>
              <h5>{title}</h5>
              {/* <button className="like-btn">
                <BsHandThumbsUp />
              </button> */}
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
