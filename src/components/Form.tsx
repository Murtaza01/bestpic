import { SyntheticEvent, useState } from "react";
import { fetchDeleteUser, fetchLogin } from "../util/http";
import { MdCloudUpload } from "react-icons/md";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { clear, save } from "../store/tokenSlice";
import { User } from "../util/types";
import { useMutation } from "@tanstack/react-query";
import ErrorMessage from "./ErrorMessage";

type props = {
  userData: User;
};

const From = ({ userData }: props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [fileName, setFileName] = useState<string>();

  const {
    mutate: logUser,
    isError,
    isPending,
  } = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: FormData) => {
      return fetchLogin(data);
    },
    onSuccess: (data) => {
      dispatch(save(data.token));
      return navigate("..");
    },
  });

  const {
    mutate: deleteUser,
    isPending: deletePending,
    isError: deleteError,
  } = useMutation({
    mutationKey: ["logout"],
    mutationFn: fetchDeleteUser,
    onSuccess: () => {
      dispatch(clear());
      return navigate("..");
    },
  });

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    if (!fileName) {
      setFileName("");
      return;
    }

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    logUser(formData);
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
      className="relative flex flex-1 flex-col items-center justify-center gap-10"
      method="post"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      {isError || deleteError ? (
        <ErrorMessage
          position="absolute top-[6%]"
          msg="Failed To Fetch, Please try again later"
        />
      ): undefined}

      {userData.name ? (
        <h2 className="text-xl">{userData.name}</h2>
      ) : (
        <div className="relative">
          <input
            className="peer block h-8 w-64 border-b-2 border-black bg-transparent placeholder-transparent outline-none"
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
      )}

      {userData.imageUrl ? (
        <img
          src={userData.imageUrl}
          className="size-44 rounded-md object-cover"
          alt=""
        />
      ) : (
        <div className="max-w-96 px-4">
          <label
            htmlFor="image"
            className={`flex w-full cursor-pointer flex-wrap items-center justify-center gap-2 overflow-hidden rounded-sm px-2 py-1 text-center ${fileName ? "bg-green-600" : "bg-rose-600"}`}
          >
            <MdCloudUpload className="text-xl" />
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
        </div>
      )}
      {/* if userData is not fetched and no file were givin */}
      {!userData.imageUrl && fileName === "" && (
        <span className="">
          <MdError className="inline text-xl text-yellow-400" /> put your godman
          file
        </span>
      )}
      {userData._id ? (
        <button
          onClick={() => deleteUser()}
          className="rounded-md bg-neutral-900/40 px-10 py-2 backdrop-blur-sm"
        >
          {deletePending ? (
            <span className="animate-pulse">Deleting...</span>
          ) : (
            "Delete"
          )}
        </button>
      ) : (
        <button className="rounded-md bg-neutral-900/30 px-10 py-2">
          {isPending ? (
            <span className="animate-pulse">Submitting...</span>
          ) : (
            "Submit"
          )}
        </button>
      )}
    </form>
  );
};

export default From;
