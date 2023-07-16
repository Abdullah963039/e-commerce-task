import { MdExpandMore } from "react-icons/md";
import filterIcon from "/public/assets/image/filter-icon.png";
import { Fragment } from "react";

export default function FilterationButtons() {
  const BUTTON_CLASSNAME =
    "capitalize flex items-center bg-smoothGray-light rounded-sm lg:py-3 lg:px-5 2xl:py-5 2x:px-7 text-gray-600 gap-2 whitespace-nowrap select-none";

  return (
    <Fragment key={"Filteration Buttons"}>
      <div className="flex items-center justify-between mt-11">
        <div className="flex items-center gap-8">
          <button className={BUTTON_CLASSNAME}>
            make up type
            <MdExpandMore className="text-black text-2xl" />
          </button>
          <button className={BUTTON_CLASSNAME}>
            price
            <MdExpandMore className="text-black text-2xl" />
          </button>
          <button className={BUTTON_CLASSNAME}>
            review
            <MdExpandMore className="text-black text-2xl" />
          </button>
          <button className={BUTTON_CLASSNAME}>
            color
            <MdExpandMore className="text-black text-2xl" />
          </button>
          <button className={BUTTON_CLASSNAME}>
            material
            <MdExpandMore className="text-black text-2xl" />
          </button>
          <button className={BUTTON_CLASSNAME}>
            offer
            <MdExpandMore className="text-black text-2xl" />
          </button>
          <button className={BUTTON_CLASSNAME}>
            all filter
            <img src={filterIcon} alt="Filter Icon" />
          </button>
        </div>

        <button className="capitalize flex items-center bg-white ring-1 ring-gray-200 rounded-sm lg:py-3 lg:px-5 2xl:py-5 2xl:px-7 text-gray-600 gap-2 whitespace-nowrap select-none">
          sort by
          <MdExpandMore className="text-black text-2xl" />
        </button>
      </div>
    </Fragment>
  );
}
