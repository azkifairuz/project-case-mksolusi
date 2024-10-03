import { faEnvelope, faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="w-full text-white">
      <div className="bg-[#262626] p-6">
        <h1>Business Info</h1>
        <div className="flex text-[#777777] mt-4 text-sm items-start gap-4 w-[200px]">
          {<FontAwesomeIcon icon={faMapMarked} />}
          <p>
            Office Representative: JDC Buliding 6th Floor, Jl. Gatot Subroto
            Kav. 53 Jakarta 10260 Workshop: JL. Kafi II Komplek Mabad II ,
            Kel.Srengseng Sawah Kec. Jagakarsa , Jakarta Selatan
          </p>
        </div>
        <div className="flex gap-4  w-[200px] text-sm mt-4 items-start text-[#777777]">
          {<FontAwesomeIcon icon={faEnvelope} />}
          <p>info@mksolusi.id</p>
        </div>
      </div>
      <div className="bg-[#222222] text-[#999999] items-center flex justify-between px-4">
        <p>copyright Multi Karya Solusi @2024 - All Rights Reserved</p>
        <ul className="flex gap-2">
          <Link
            to={"/home"}
            className="cursor-pointer py-3 text-sm text-[#666666]"
          >
            Home
          </Link>
          <Link
            to={"/home"}
            className="cursor-pointer py-3 text-sm text-[#666666]"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
}
