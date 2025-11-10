import { IphoneDiv } from "./ui/iphone-div";
import Image from "next/image";

const MockHome = () => {
  return (
    <div className="w-full xl:w-[90%] relative">
      <div>
        <p className="text-white playpen font-bold absolute z-51 right-[37px] rotate-90 top-8">
          Limeme
        </p>

        <div className="absolute -top-[50px] right-5 z-50">
          <svg
            fill="#fda4af"
            height="200px"
            width="100px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 458.001 458.001"
          >
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M308.497,0H149.504c-8.284,0-15,6.716-15,15v428.001c0,5.601,3.12,10.735,8.092,13.314 c4.971,2.579,10.966,2.175,15.545-1.051l70.859-49.9l70.859,49.9c4.584,3.228,10.577,3.628,15.545,1.051 c4.972-2.579,8.092-7.714,8.092-13.314V15C323.497,6.716,316.781,0,308.497,0z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </div>

      <IphoneDiv>
        <div className="w-full flex flex-col gap-3 justify-center items-center">
          <Image src={"/sample.jpg"} width={500} height={500} alt="header" />
          <Image src={"/text.jpg"} width={500} height={200} alt="welcome" />
          <p>test</p>
        </div>
      </IphoneDiv>
    </div>
  );
};
export default MockHome;
