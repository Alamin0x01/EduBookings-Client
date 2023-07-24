import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    // <footer className="footer mt-3 p-10 bg-base-200 text-base-content">
    //   <div>
    //     <img className="w-36" src={logo} alt="" />
    //     <br />
    //     <p className="font-bold">©Campus Books 2023</p>
    //   </div>
    //   <div>
    //     <span className="footer-title">Links</span>
    //     <Link to="/" className="link link-hover">
    //       Home
    //     </Link>
    //     <Link to="/colleges" className="link link-hover">
    //       Colleges
    //     </Link>
    //     <Link to="/admission" className="link link-hover">
    //       Admission
    //     </Link>
    //     <Link to="/mycollege" className="link link-hover">
    //       My College
    //     </Link>
    //   </div>
    //   <div>
    //     <span className="footer-title">Legal</span>
    //     <a className="link link-hover">Terms of use</a>
    //     <a className="link link-hover">Privacy policy</a>
    //     <a className="link link-hover">Cookie policy</a>
    //   </div>
    // </footer>
    <footer className=" mt-5 p-10 bg-cyan-400 text-white">
      <div className="flex justify-between flex-col lg:flex-row items-center text-center lg:space-y-0 space-y-6">
        <div>
          <img
            className="h-16 ml-14"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajLFt8gaA8aWm37mE2k9W41H9XQI1ipyyyZO5XvzqYiLZDh4I4jUMCuBw-kf5moGnKDA&usqp=CAU"
            alt=""
          />
          <p>
            EduBookings
            <br />
            support@EduBookings.com <br />
            +880 175634456
          </p>
        </div>
        <div>
          <span className="footer-title">Menu</span>
          <p>
            <Link className="hover:text-orange" to="/">
              Home
            </Link>
          </p>
          <p>
            <Link className="hover:text-orange" to="/">
              Colleges
            </Link>
          </p>
          <p>
            <Link className="hover:text-orange" to="/">
              Admissions
            </Link>
          </p>
          <p>
            <Link className="hover:text-orange" to="/">
              My college
            </Link>
          </p>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <p>
            South air, <br />
            Bonani Road <br />
            Dhaka
            <br />
            1st floor, EduBookings
          </p>
        </div>
        <div>
          <span className="footer-title">Social Links</span>
          <div className="mb-4">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/EduBookings">
                <FaFacebook className="text-3xl cursor-pointer hover:text-orange" />
              </a>
              <a href="https://www.instagram.com/EduBookings/">
                <FaInstagramSquare className="text-3xl cursor-pointer hover:text-orange" />
              </a>
              <a href="https://twitter.com/EduBookings">
                <FaTwitter className="text-3xl cursor-pointer hover:text-orange" />
              </a>
              <a href="https://github.com/EduBookings">
                <FaGithub className="text-3xl cursor-pointer hover:text-orange" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" items-center mt-8">
          <div className="border-t border-orange mx-auto mb-6"></div>
          <div className="text-center">
            <p>Copyright © EduBookings - 2023 - All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
