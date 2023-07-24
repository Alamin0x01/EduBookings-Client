import { Link } from "react-router-dom";
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
    <footer className=" p-10 bg-sky-500 text-white">
      <div className="flex justify-between flex-col lg:flex-row items-center text-center lg:space-y-0 space-y-6">
        <div>
          <img
            className="h-16 ml-14"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajLFt8gaA8aWm37mE2k9W41H9XQI1ipyyyZO5XvzqYiLZDh4I4jUMCuBw-kf5moGnKDA&usqp=CAU"
            alt=""
          />
          <p>
            Edu-Cademy
            <br />
            support@Edu-Cademy.com <br />
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
            <Link className="hover:text-orange" to="/Classes">
              Classes
            </Link>
          </p>
          <p>
            <Link className="hover:text-orange" to="/">
              Teachers
            </Link>
          </p>
          <p>
            <Link className="hover:text-orange" to="/">
              Dashboard
            </Link>
          </p>
          <p>
            <Link className="hover:text-orange" to="/">
              Blogs
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
            1st floor, Edu-Cademy
          </p>
        </div>
        <div>
          <span className="footer-title">Social Links</span>
        </div>
      </div>
      <div>
        <div className=" items-center mt-8">
          <div className="border-t border-orange mx-auto mb-6"></div>
          <div className="text-center">
            <p>Copyright © Edu-Cademy - 2023 - All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
