import heroImage from "@/assets/software-development-1.jpg";
import profileSection from "@/assets/working-freelancer-germany.jpeg";

import {
  faDesktop,
  faCogs,
  faTools,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import Service from "@/components/Service";
import CustomerCarousel from "../../components/Carousel";

export default function Home() {
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
  ];
  console.log(serviceData);
  return (
    <div className="bg-white ">
      <section
        className="bg-center h-[300px] lg:h-screen bg-no-repeat bg-cover flex justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="text-start w-[80%] mx-auto  mt-36 ">
          <h1 className="text-white hidden md:block text-7xl text-nowrap  mb-4">
            PT Multi Karya Solusi
          </h1>
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row gap-4 items-center p-6 justify-center">
        {serviceData.map((data, index) => {
          return (
            <Service
              title={data.title}
              description={data.description}
              icon={data.icon}
              key={index}
            />
          );
        })}
      </section>
      <section
        className="bg-no-repeat bg-cover relative flex justify-center items-center  py-[200px]   w-full"
        style={{ backgroundImage: `url(${profileSection})` }}
      >
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

          <div className="relative z-20 w-1/2 text-white flex justify-center text-center items-center flex-col">
            <h1 className="text-white text-[30px]">Profile</h1>
            <span className="text-white w-[150px] mt-5 h-1 border-white bg-white border block"></span>
            <p className="mt-5">PT Multi Karya Solusi is an Information Technology solutions company that includes Information Technology Consultation and Planning, Application System Development, Integration of communication devices and networks as well as maintenance and repair of system devices with coverage in various fields in the public and private sectors.</p>
            {/* <p className="mt-5">PT Multi Karya Solusi is an Information Technology solutions company that includes Information Technology Consultation and Planning, Application System Development, Integration of communication devices and networks as well as maintenance and repair of system devices with coverage in various fields in the public and private sectors.</p> */}
            {/* <p className="mt-5">With the support of experienced experts PT MKS provides the best solutions, technical support and quality assurance for customer satisfaction by applying the philosophy that our success is the result of partnerships from customers and principals.</p>
            <p className="mt-5">We highly value commitment and professionalism and uphold the code of ethics and customer loyalty, therefore customer trust and satisfaction is an absolute thing for us in running the business wheel.</p> */}
            <button className="bg-primary py-2 px-4 mt-10">Read More</button>
          </div>
      </section>
      <section className="flex py-[100px] justify-center flex-col items-center">
        <h1 className="text-2xl">Customer</h1>
        <span className="w-[50px] mt-5 h-1 border-primary bg-primary border block"></span>
        <CustomerCarousel/>
      </section>
    </div>
  );
}
