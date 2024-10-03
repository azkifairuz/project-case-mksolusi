import {
  faCogs,
  faDesktop,
  faHdd,
  faLightbulb,
  faSitemap,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import ServiceAbout from "../../components/ServiceAbout";
import profileSection from "@/assets/working-freelancer-germany.jpeg";

export default function About() {
  const serviceData = [
    {
      title: "Software Development",
      description:
        "Custom Development , Integration, Data Migration & Enhancement & Mobile Application",
      icon: faDesktop,
    },
    {
      title: "System Integration",
      description:
        "Data Center Consolidation , Network & Security & Server and Storage",
      icon: faCogs,
    },
    {
      title: "Maintenance & Support",
      description:
        "Offsite Support Staffing , Onsite Support Staffing & Project Based Support",
      icon: faTools,
    },
    {
      title: "Network & Telecommunication",
      description:
        "We will help all the needs of network installation and preparation based on your needs, taking into account what is needed and what is more efficient.",
      icon: faSitemap,
    },
    {
      title: "Hardware",
      description:
        "Making a great and innovative products or custom it based on your needs, we provide hardware solutions to help solving your problems.",
      icon: faHdd,
    },
    {
      title: "IT & Business Consultand",
      description:
        "We works in partnership with our clients, advising them how to use information technology in order to meet their business objectives or overcome problems.",
      icon: faLightbulb,
    },
  ];
  return (
    <div className="w-full bg-white">
      <div className="w-full md:w-[80%] p-4 flex mx-auto justify-between items-center">
        <h1 className="text-lg font-bold">About</h1>
        <p className="text-xs text-gray-500 ">
          <span className="font-semibold text-black cursor-pointer">Home </span>
          » About
        </p>
      </div>
      <div className="w-full grid grid-cols-1 gap-4 mx-auto md:grid-cols-3  md:w-[80%]">
        {serviceData.map((data, index) => {
          return (
            <ServiceAbout
              title={data.title}
              description={data.description}
              icon={data.icon}
              key={index}
            />
          );
        })}
      </div>
      <section
        className="bg-no-repeat bg-cover relative flex justify-center items-center  py-[200px]   w-full"
        style={{ backgroundImage: `url(${profileSection})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-20 w-1/2 text-white flex justify-center text-center items-center flex-col">
          <h1 className="text-white text-[30px]">More About Us</h1>
          <span className="text-white w-[150px] mt-5 h-1 border-white bg-white border block"></span>
    
          <p className="mt-5">
            PT Multi Karya Solusi is an Information Technology solutions company
            that includes Information Technology Consultation and Planning,
            Application System Development, Integration of communication devices
            and networks as well as maintenance and repair of system devices
            with coverage in various fields in the public and private sectors.
          </p>{" "}
          <p className="mt-5">
            With the support of experienced experts PT MKS provides the best
            solutions, technical support and quality assurance for customer
            satisfaction by applying the philosophy that our success is the
            result of partnerships from customers and principals.
          </p>
          <p className="mt-5">
            We highly value commitment and professionalism and uphold the code
            of ethics and customer loyalty, therefore customer trust and
            satisfaction is an absolute thing for us in running the business
            wheel.
          </p>
          <button className="bg-primary py-2 px-4 mt-10">Read More</button>
        </div>
      </section>
    </div>
  );
}
