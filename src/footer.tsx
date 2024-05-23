import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full border-t border-green-900/10 bg-black flex flex-col p-10 md:p-20 gap-10 md:px-[130px]">
      <div className="flex items-center justify-center gap-10">
        <Link
          to="/"
          className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
        >
          About
        </Link>
        <Link
          to="/products"
          className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
        >
          Products
        </Link>
        <Link
          to="/contact-us"
          className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
        >
          Contact
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
        >
          Terms & Privacy
        </Link>
      </div>

      <p className="text-[12px] leading-[24px] text-center text-[#FFE5AF]">
        © Bump Oil Innovations
. All Rights Reserved.
      </p>

 <div className="flex items-center justify-center">
 </div>
    </div>
  );
};

export default Footer;
