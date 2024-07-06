// import { useQuery } from "@tanstack/react-query";
// import { fetchUsers } from "../util/http";
// import { useState } from "react";
// import { shuffle } from "../util/helpers";
// const Pictures = () => {
//   const [shownImages, setShownImages] = useState<string[]>([]);
//   const [isShown, setIsShown] = useState(false);
//   const {
//     data: users,
//     isPending,
//     isError,
//   } = useQuery({
//     queryKey: ["users"],
//     queryFn: fetchUsers,
//   });
//   if (isPending) {
//     return <p>loading...</p>;
//   }

//   if (isError) {
//     return <p>Error !</p>;
//   }
//   const fetchedImages: [] = users.map(
//     ({ imageUrl }: { imageUrl: string }) => imageUrl,
//   );
//   const images = fetchedImages;
//   shuffle(images);

//   function handleShow() {
//     setShownImages(images);
//     setIsShown((prev) => !prev);
//   }

//   function handleClick(index: number) {
//     setShownImages((prev) => {
//       const pickedImg = prev[index];
//       return prev.filter((img) => img !== pickedImg);
//     });
//   }

//   return (
//     <>
//       {isShown && (
//         <ul className="flex flex-wrap items-center justify-center gap-5">
//           {shownImages.map((url: string, index: number) => {
//             return (
//               <li
//                 key={index}
//                 className="w-40"
//                 onClick={() => handleClick(index)}
//               >
//                 <img src={url} alt="" />
//               </li>
//             );
//           })}
//         </ul>
//       )}
//       <button className="border-2 text-lg" onClick={handleShow}>
//         Show
//       </button>
//     </>
//   );
// };

// export default Pictures;
