import {HeartIcon} from "@heroicons/react/24/outline";
export default function BuyMeBtn() {
  return (
    <div className="text-center my-8 flex justify-center">
      <a
        className="rounded-md bg-primary flex justify-center w-fit items-center text-sm font-semibold text-white shadow-sm hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 px-8 py-4"
        href="mailto:mc.vietanh@gmail.com"
      >
        Hello, I'm free{" "}
        <div className="w-[60px]">
          <HeartIcon />
        </div>
        !
      </a>
    </div>
  );
}
