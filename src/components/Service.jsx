/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Service({icon,title,description}) {

  return (
    <div className="bg-white border flex flex-col w-full md:w-[350px]  gap-4 items-center text-center border-[#eeeeee] p-3">
        <div className="bg-primary w-20 h-20 flex justify-center items-center rounded-full">
          <FontAwesomeIcon color="#ffffff" size="lg" icon={icon}/>
        </div>
        <h1 className="font-bold text-base text-secondary">{title}</h1>
        <p className="text-sm text-secondary">{description}</p>
    </div>
  )
}
