import { IoIosSearch } from "react-icons/io";
import { FaUser, FaShoppingCart } from "react-icons/fa";

interface Props {
  number: string;
}

const FarmNav = ({ number }: Props) => {
  return (
    <div className=" lg-block  mb-8">
      <div className="flex justify-between items-center pt-8">
        <h1 className="text-4xl font-medium">Logo</h1>

        <div className="relative w-full max-w-[500px]">
          <input
            type="text"
            className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
            placeholder="Search Products..."
          />
          <IoIosSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500 size={20}" />
        </div>

        <div className="flex gap-4">
          <div className="icon-wrapper flex items-center justify-center border-gray-400 rounded-full w-[50px] h-[50px]">
            <FaUser className="text-[22px] hover:cursor-pointer" />
          </div>
          <div className="icon-wrapper flex items-center justify-center border-gray-400 rounded-full w-[50px] h-[50px]">
            <div
              className={`absolute mb-7 ml-7 text-red-600 font-bold text-[20px] rounded-full grid place-items-center`}
            >
              {number}
            </div>
            <FaShoppingCart className="text-[22px] hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmNav;
