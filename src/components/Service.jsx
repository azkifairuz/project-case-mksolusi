/* eslint-disable react/prop-types */

export default function Service({icon,title,description}) {

  return (
    <div className="bg-white border flex flex-col gap-4 justify-center text-center border-[#eeeeee] p-3">
        <div className="bg-primary w-7 h-7 rounded-full">
          {icon}
        </div>
        <h1 className="font-bold text-lg text-secondary">{title}</h1>
        <p className="text-sm text-secondary">{description}</p>
    </div>
  )
}
