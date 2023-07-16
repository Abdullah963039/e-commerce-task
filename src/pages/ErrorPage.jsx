import { BsEmojiFrown } from "react-icons/bs";

export default function ErrorPage() {
  return (
    <div className="min-h-[calc(100vh_-_200px)] flex items-center justify-center bg-red-100 text-red-500 font-semibold text-4xl">
      <h1 className="flex items-center">
        Sorry, something went wrong ! <BsEmojiFrown />
      </h1>
    </div>
  );
}
