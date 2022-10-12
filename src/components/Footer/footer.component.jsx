import React from "react";
import { BsFacebook,} from "react-icons/bs"
import { AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai"
import { TiSocialYoutubeCircular } from "react-icons/ti"
import { ImMail4 } from "react-icons/im"
import { BiChevronDown } from "react-icons/bi"
const FooterSm = () => {}
const FooterMd = () => {
    return (
        <>
        <div className="grid w-full">
        <div className="row-container flex h-80 bg-footercolor-800 text-white w-full mt-12 ">
        <div className="flex flex-nowrap  w-full h-full mt-6  justify-evenly text-lg">
        <div className=" column  font-semibold text-yellow-500 ">Browser
                <div className="column font-light text-white">By Search</div>
                <div className="column font-light text-white">By map</div>
                <div className="column font-light text-white">By Resources</div>

                </div>
         <div className=" column font-semibold text-yellow-500">Address
         <div className="column font-light text-white text-justify">Punjabi University Patiala<br></br>NH 64, Urban Estate Phase II,<br></br>Patiala, Punjab (147002) </div>    
        </div>
        <div  className="column font-semibold  text-yellow-500 text-justify">Events
        <div className="column font-light text-white text-justify"><a href="">Standing up to Harrasement</a> </div>
        <div className="column font-light text-white text-justify"><a href="">2Nd National Workshop On Research <br></br>Methodology And Statistical Tools</a>  </div>
       
        </div>
        <div  className=" column font-semibold box-border float-left  text-yellow-500 text-justify">Contact
        <div className="column font-light text-white">Email: alumni@pup.org</div>
        <div className="column font-light text-white">Phone: 0175-3046421  <br></br>Fax: 0175-3046425 </div>
        <div  className="flex items-center gap-x-1.5 py-2 text-white">
              <a href="https://www.facebook.com/PbiUniPatiala/" target="_blank"> <BsFacebook className="h-10 w-8 hover:text-yellow-500" /> </a>
              <div> <a href="https://twitter.com/PbiUniPatiala" target="_blank"><AiFillTwitterCircle  className="h-10 w-8 hover:text-yellow-500"/> </a></div>
              <div><a href="https://www.linkedin.com/school/punjabi-university/" target="_blank"><AiFillLinkedin className= "h-10 w-8 hover:text-yellow-500" /></a> </div>
              <div> <a href="https://www.youtube.com/channel/UCUzK9LJkEy9WVfbbqgSOSeA" target="_blank"><TiSocialYoutubeCircular className="h-10 w-8 hover:text-yellow-500" /></a></div>
              <div> <ImMail4 className="h-10 w-8 hover:text-yellow-500"/> </div>
          </div>
        </div>
       
      
      </div>
      
      </div>
      <div className="row-container flex flex-nowrap w-full h-20 px-4 justify-around">
          <div className="ml-5">
          <div className="column font-semibold text-lg font-sans ">Punjabi University Patiala-147002</div>
          <div className="column ">Email: dean.alumnirelations@gmail.com</div>
          <div className="column "></div>
         
      </div>
      <div className="column mt-3 italic"> © 2022 Copyright Alumni Association| All Rights Reserved </div>
      </div>
      </div>
     
     
      </>

           
        
    );
};
const Footer = () => {
    return (
        <div className="hidden md:flex lg:flex">
            <FooterMd />

        </div>
    );
}
export default Footer;