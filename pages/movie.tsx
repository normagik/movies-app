import { IoMdArrowDropdown } from "react-icons/io";

const movie = () => {
  return (
    <div>
      <nav className=" flex items-center justify-center">
        <ul className="flex">
          <div className="flex items-center mr-6">
            <li>Overview</li>
            <IoMdArrowDropdown className="inline-block ml-1" />
          </div>
          <div className="flex items-center mr-6">
            <li>Media</li>
            <IoMdArrowDropdown className="inline-block ml-1" />
          </div>
          <div className="flex items-center mr-6">
            <li>Fandom</li>
            <IoMdArrowDropdown className="inline-block ml-1" />
          </div>
          <div className="flex items-center mr-6">
            <li>Share</li>
            <IoMdArrowDropdown className="inline-block ml-1" />
          </div>
        </ul>
      </nav>
      <section></section>
    </div>
  );
};

export default movie;
