export default function Contact() {
  return (
    <div className="w-full bg-white">
      <div className="h-[450px] w-full border-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4700523324836!2d106.7991497561129!3d-6.201552466232435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6bc1715d631%3A0xac5785593356cd5d!2sJakarta%20Design%20Center!5e0!3m2!1sen!2sid!4v1636567003539!5m2!1sen!2sid"
          height="100%"
          width="100%"
          allowFullScreen="true"
          loading="lazy"
        ></iframe>
      </div>
      <div className="w-full md:w-[80%] my-6 p-5 mx-auto flex flex-col gap-4 flex-start md:flex-row  md:justify-between">
        <div className="flex  flex-col gap-4">
          <input
            type="text"
            className="p-2 outline-none bg-[#f6f6f6]"
            placeholder="YOUR NAME"
          />
          <input
            type="email"
            className="p-2 outline-none bg-[#f6f6f6]"
            placeholder="EMAIL ADDRESS"
          />
          <textarea
            name=""
            rows={15}
            cols={30}
            className="text-gray-400 bg-[#f6f6f6] p-2 outline-none"
            id=""
          >
            MASSAGE
          </textarea>
        </div>
        <div className="justify-self-end md:w-1/2 text-[#8b8b8b] flex flex-col text-end flex-end">
          <h1 className="text-2xl ">GET IN TOUCH</h1>
          <span className="text-primary w-[50px] mt-5 h-1 border-primary text-end  ml-auto bg-primary border inline-block"></span>
          <ul>
            <li className="py-6 border-b-[#d8d8f8] border-b">
              <p>We’re happy to answer any questions you have or provide you with
              an estimate. Just contact us in address below, or send us a
              message in the form aside.</p>
            </li>
            <li className="py-6 border-b-[#d8d8f8] border-b">
              JDC Buliding 6th Floor, Jl. Gatot Subroto Kav. 53 Jakarta 10260.
            </li>
            <li className="py-6 border-b-[#d8d8f8] border-b">info@mksolusi.id</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
