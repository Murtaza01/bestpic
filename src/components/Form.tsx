import { SyntheticEvent, useState } from "react";
import { fetchNewUser } from "../util/http";
import { MdCloudUpload } from "react-icons/md";

const From = () => {
  const [fileName, setFileName] = useState<string>();

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    fetchNewUser(formData);
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
      className="flex w-full flex-1 flex-col items-center justify-center gap-10"
      method="post"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <input
          className="peer block h-8 w-64 border-b-2 border-black/50 bg-transparent placeholder-transparent outline-none"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />
        <label
          htmlFor="name"
          className="absolute -top-4 start-0 cursor-text text-sm transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base"
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
      <button className="rounded-md bg-black/40 px-10 py-2 backdrop-blur-sm">
        Submit
      </button>
    </form>
  );
};

export default From;
