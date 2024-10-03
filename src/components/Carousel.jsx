import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
export default function CustomerCarousel() {
  const customers = [
    { name: 'Bank Sulsel', img: 'https://mksolusi.id/wp-content/uploads/2019/07/sulsel.png' },
    { name: 'ITA', img: 'https://mksolusi.id/wp-content/uploads/2019/07/ita.png' },
    { name: 'Linfox', img: 'https://mksolusi.id/wp-content/uploads/2019/07/linkfpx.png' },
    { name: 'Kamadjaja Logistics', img: 'https://mksolusi.id/wp-content/uploads/2019/07/logistic.png' },
    { name: 'Jaya Raya', img: 'https://mksolusi.id/wp-content/uploads/2019/07/pemda.png' },
    { name: 'Reindo', img: 'https://mksolusi.id/wp-content/uploads/2019/07/rindo.png' },
    { name: 'apaya', img: 'https://mksolusi.id/wp-content/uploads/2019/07/xxx.png' },



  ];

  return (
    <section className="w-full md:w-[80%] mx-auto py-8 text-center">
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        loop={true}
        pagination={{clickable:true,}}
        autoplay={{ delay: 3000 }}
        modules={[Pagination]} 
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 3, 
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {customers.map((customer, index) => (
          <SwiperSlide key={index}>
            <img
              src={customer.img}
              alt={customer.name}
              className="mx-auto  object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
