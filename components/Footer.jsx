import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full h-16 bg-gray-600 px-8 flex flex-row justify-around items-center">
      <p className="text-white">
        Made With <AiFillHeart className="inline-block text-yellow-300" /> By
        Aung Moe Oo
      </p>
    </div>
  );
};

export default Footer;
