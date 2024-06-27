import { SyntheticEvent } from "react";

const App = () => {
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    fetch("http://localhost:3000/user/new", {
      method: "POST",
      body: formData,
    });
  }

  return (
    <div className="gird h-screen place-content-center text-3xl">
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

export default App;
