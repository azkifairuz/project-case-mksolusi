import heroImage from "@/assets/software-development-1.jpg"
export default function Home() {
  return (
    <div className="">
      <section
        className="bg-cover bg-center h-screen flex  justify-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="text-start lg:w-1/2 mt-36 ">
          <h1 className="text-white text-7xl text-nowrap  mb-4">
            PT Multi Karya Solusi
          </h1>
        </div>
      </section>
      <section>
        
      </section>
    </div>
  );
}
