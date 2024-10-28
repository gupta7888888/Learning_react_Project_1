import { FaRegEnvelope } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { BsBrowserChrome } from "react-icons/bs";
import './Components.css';
import { FaHeart } from "react-icons/fa";
import { IoPencilOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { useState } from "react";




const Card = (value) => {
    const{email, id, imgurl, name, phone, url} = value.value;
    const[isred, setIsred] = useState(false);
    const handleRed = () => {
      setIsred(!isred);
      // if (isred===true){
      //   setIsred(false);
      // } else if (isred=== false){
      //   setIsred(true);
      // }
    }
  return (
    <div className='border-2 border-black h-[354px] w-[300px]'>
        <div className="img_robo"><img className="img_rob" src={imgurl} />
    </div>
    <div className="txt_cls">

        <p>{name}</p>
        <div className="eml">
        <FaRegEnvelope />
        <p>{email}</p>
        </div>
        <div className="eml">
        <IoIosCall />
        <p>{phone}</p>
        </div>
        <div className="eml">
        <BsBrowserChrome />
        <p>{url}</p>
        
        </div>
        <div className="btm_sec cursor-pointer">
        <div
          onClick={handleRed}
          className="border-r-32 p-4 w-1/3 flex justify-center cursor pointer"
          >
        {isred ? <FaHeart /> : <FcLike />}
        </div>
        <IoPencilOutline />
        <MdDelete />



        </div>
    </div>
    </div>
  )
}

export default Card;