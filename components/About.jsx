import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a skilled MERN Stack developer, proficient in creating robust
            and dynamic web applications using the MERN (MongoDB, Express.js,
            React.js, Node.js) technology stack. With a strong foundation in
            full-stack development, I possess the expertise to build end-to-end
            solutions that meet the unique needs of businesses and individuals
            alike. In summary, as a MERN Stack developer, I bring a
            comprehensive skill set and a passion for creating cutting-edge web
            applications. I am dedicated to delivering exceptional results,
            driving innovation, and helping businesses achieve their digital
            goals through reliable and scalable solutions.
          </p>
          <p className="py-2 text-gray-600">
            I started web developement in 2018 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
