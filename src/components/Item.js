import { FaTrash, FaEdit, FaStar } from "react-icons/fa";
import { useGlobalContext } from "../context";
export const Item = ({ text, id, stars }) => {
  const { handleStar, removeItem } = useGlobalContext();
  const myStars = Array.from({ length: 10 });
  return (
    <div className="item--container">
      <p className="item">{text}</p>
      <div className="icon--container">
        {myStars.map((star, idx) => {
          return (
            <FaStar
              className={stars > idx ? "star active" : "star"}
              onClick={() => handleStar(id, idx + 1)}
            />
          );
        })}
        <FaTrash className="icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};
