import { SyntheticEvent, useState } from "react";
import { fetchNewUser } from "../util/http";
import { MdCloudUpload } from "react-icons/md";
import { MdError } from "react-icons/md";

const From = () => {
  const [fileName, setFileName] = useState<string>();
  const [error, setError] = useState<string | undefined>();

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const error = await fetchNewUser(formData);
    // if error exist save it and show it
    setError(error);
    // if no file selected set empty string to show error
    if (!fileName) {
      setFileName("");
    }
  }

  function handleChange(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      const name = target.files[0].name;
      setFileName(name);
    }
  }
  return (
    <form
      className="relative flex w-full flex-1 flex-col items-center justify-center gap-10"
      method="post"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      {error && (
        <span className="absolute top-[10%] w-[70%] bg-rose-600 px-2 py-3 text-center">
          Failed To Fetch, Please try again later
        </span>
      )}

      <div className="relative">
        <input
          className="peer block h-8 w-64 border-b-2 border-black/50 bg-transparent placeholder-transparent outline-none"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />
        <label
          htmlFor="name"
          className="absolute -top-5 start-0 cursor-text text-sm transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base"
        >
          Your Name
        </label>
      </div>

      <label
        htmlFor="image"
        className={`flex items-center gap-2 rounded-sm px-2 py-1 ${fileName ? "bg-green-600" : "bg-rose-600"}`}
      >
        <MdCloudUpload className={`text-xl`} />
        {fileName ? fileName : "Upload Your Image"}
        <input
          className="hidden"
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
      {fileName === "" && (
        <span className="">
          <MdError className="inline text-xl text-rose-500" /> put your godman
          file
        </span>
      )}
      <button className="rounded-md bg-black/40 px-10 py-2 backdrop-blur-sm">
        Submit
      </button>
    </form>
  );
};

export default From;
