import { useGlobalContext } from "../context";

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();
  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={image} alt="{title}" className="img modal-img" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Recepte</p>
          <p>{text}</p>
          <a href={source} target="_blank">
            Vairāk info šeit
          </a>
        </div>
        <button className="btn" onClick={closeModal}>
          close
        </button>
      </div>
    </aside>
  );
};

export default Modal;
