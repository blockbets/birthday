import { useGlobalContext } from "../context";
import { List } from "../components/List";

export const Presents = () => {
  const { text, handleChange, handleSubmit } = useGlobalContext();

  return (
    <section className="section--center">
      <section className="form">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            const id = new Date().getTime().toString();
            handleSubmit(id);
          }}
        >
          <h2>My Present List</h2>

          <input
            value={text}
            type="text"
            id="present"
            onChange={(e) => handleChange(e.target.value)}
            placeholder="eg Peppa Pig"
            className="input--presents"
          />
          <button type="submit" className="btn--presents">
            Add Present
          </button>
        </form>

        <List />
      </section>
    </section>
  );
};
