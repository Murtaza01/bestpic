import { SyntheticEvent } from "react";
import { fetchNewUser } from "../util/http";

const From = () => {
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    fetchNewUser(formData);
  }
  return (
    <div className="gird">
      <form
        className="flex flex-col items-center gap-5"
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">
          <input className="border-2" type="text" name="name" id="name" />
        </label>
        <label htmlFor="image">
          <input type="file" name="image" id="image" accept="image/*" />
        </label>
        <button className="border-2 border-black px-2 py-1">Submit</button>
      </form>
    </div>
  );
};

export default From;
