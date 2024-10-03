/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServiceAbout({ icon, title, description }) {
  return (
    <div className="bg-white border flex w-full gap-4 items-center border-[#eeeeee] p-3 min-h-[150px]">
      <div className="bg-primary w-16 h-16 flex  justify-center items-center rounded-full">
        <FontAwesomeIcon color="#ffffff" fixedWidth size="lg" icon={icon} />
      </div>
      <div className="flex flex-col gap-2 w-1/2">
        <h1 className="font-bold text-sm text-secondary min-h-[24px]">
          {title}
        </h1>
        <p className="text-xs text-secondary min-h-[40px]">{description}</p>
      </div>
    </div>
  );
}
