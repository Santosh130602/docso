import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2A5F72] text-white px-10 py-16 text-s font-[Lexend] pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

        <div>
          <h2 className="text-xl font-bold">Docso Medicare LLP</h2>
          <p className="mt-2 text-sm font-thin">The ultimate destination for all of your medical needs</p>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#2A5F72] transition">
              <img src="https://img.icons8.com/ios-glyphs/20/ffffff/facebook-new.png" alt="Facebook" />
            </a>
            <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#2A5F72] transition">
              <img src="https://img.icons8.com/ios-glyphs/20/ffffff/twitter--v1.png" alt="Twitter" />
            </a>
            <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#2A5F72] transition">
              <img src="https://img.icons8.com/ios-glyphs/20/ffffff/instagram-new.png" alt="Instagram" />
            </a>
          </div>
        </div>



        <div>
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm font-thin">
            <li><a href="#">Home</a></li>
            <li><a href="#">Surgery</a></li>
            <li><a href="#">OPD</a></li>
            <li><a href="#">Speciality</a></li>
            <li><a href="#">Consultation</a></li>
          </ul>
        </div>


        
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <ul className="space-y-1 text-sm font-thin">
            <li><a href="#">Who we are</a></li>
            <li><a href="#">Our Vision</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="space-y-2 text-sm font-thin">
            <li>+91 92509 80155</li>
            <li>docsomedicare@gmail.com</li>
            <li>
              1395, Roshni Tech Hub,<br />
              Marathahalli, Bangalore,<br />
              Karnataka - 560036
            </li>
          </ul>
        </div>

      </div>

      <div className="text-center mt-10 pt-6 text-sm font-thin">
        <p className='text-xs md:text-sm'>Copyright 2025 Docso, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
