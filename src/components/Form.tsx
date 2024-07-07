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
    <form
      className="flex w-full flex-1 flex-col items-center justify-center gap-10"
      method="post"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <input
          className="peer block border-b-2 border-black/50 bg-transparent outline-none"
          type="text"
          name="name"
          id="name"
        />
        <label
          htmlFor="name"
          className="absolute top-0 cursor-text transition-all duration-[400ms] peer-focus:-top-6 peer-focus:scale-90"
        >
          Name
        </label>
      </div>

      <label htmlFor="image" className="cursor-pointer">
        Upload Image
        <input
          className="hidden"
          type="file"
          name="image"
          id="image"
          accept="image/*"
        />
      </label>
      <button className="rounded-md bg-black/20 px-10 py-2 backdrop-blur-sm">
        Submit
      </button>
    </form>
  );
};

export default From;
