import { RiArrowRightSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";

const SideSection = () => {
  return (
    <div className=" w-full max-h-full col-span-1 ">
      <div className="flex items-center border border-gray-300 shadow-lg p-4 mb-2 rounded-xl cursor-pointer">
        <p className="font-semibold">Sort</p>
        <RiArrowRightSLine className="inline-block mt-1 ml-auto" />
      </div>
      <div className=" flex items-center border border-gray-300 shadow-lg p-4 rounded-xl cursor-pointer">
        <p className="font-semibold">Where To Watch</p>
        <RiArrowRightSLine className="inline-block mt-1 ml-auto" />
      </div>

      <div className="border border-gray-300 shadow-lg my-2 rounded-xl divide-y">
        <div className="flex items-center p-4">
          <h2 className="font-semibold">Filters</h2>
          <MdOutlineKeyboardArrowDown className="inline-block ml-auto " />
        </div>
        <div className="p-2 text-sm">
          <div className="flex items-center px-2 text-[#999999] mb-2">
            <p>Show Me</p>
            <AiFillQuestionCircle className="inline-block ml-4" />
          </div>
          <fieldset className="px-2">
            <div>
              <input
                className="bg-cyan-400"
                id="everything"
                type="radio"
                value="1"
                name="everything"
                checked
              />
              <label className="pl-1" htmlFor="everything">
                Everything
              </label>
            </div>
            <div>
              <input
                className="bg-cyan-400"
                id="seen"
                type="radio"
                value="2"
                name="seen"
              />
              <label className="pl-1" htmlFor="seen">
                Movies I Have Seen
              </label>
            </div>
            <div>
              <input
                className="bg-cyan-400"
                id="not-seen"
                type="radio"
                value="3"
                name="not seen"
              />
              <label className="pl-1" htmlFor="not-seen">
                Movies I Haven't Seen
              </label>
            </div>
          </fieldset>
        </div>
        <div className="px-4 py-2 text-sm ">
          <p className="text-[#999999] mb-2">Availabilities</p>
          <div>
            <input
              className="
              bg-cyan-400"
              id="availabilities"
              type="checkbox"
              value=""
              name="availabilities"
              checked
            />
            <label className="pl-1" htmlFor="availabilities">
              Everything
            </label>
          </div>
        </div>
        <div className="px-4 py-2 text-sm">
          <p className="text-[#999999] mb-2">Release Dates</p>
          <div>
            <input
              className="bg-cyan-400"
              id="releases"
              type="checkbox"
              value=""
              name="releases"
              checked
            />
            <label className="pl-1" htmlFor="releases">
              Search All Releases?
            </label>
          </div>
          <p className="text-[#B6B6B6]">from</p>

          <p className="text-[#B6B6B6]">to</p>
        </div>
        <div className="px-4 py-2 text-sm">
          <p className="text-[#999999]">Genres</p>
          <div className="py-2">
            <button className="py-2 px-4 bg-white text-gray-500 rounded-full border border-gray-400 btn-primary mr-2 ">
              Action
            </button>
            <button className="py-2 px-4 bg-white text-gray-500 rounded-full border border-gray-400 btn-primary ">
              Adventure
            </button>
          </div>
          <button className="py-2 px-4 bg-white text-gray-500 rounded-full border border-gray-400 btn-primary mr-2 ">
            Animation
          </button>
          <button className="py-2 px-4 bg-white text-gray-500 rounded-full border border-gray-400 btn-primary ">
            Comedy
          </button>
        </div>
      </div>
    </div>
  );
};
export default SideSection;
