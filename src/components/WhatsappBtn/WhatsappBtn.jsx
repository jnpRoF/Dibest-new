import { IoLogoWhatsapp } from "react-icons/io";

const WhatsappBtn = () => {
  return (
    <div className="fixed bottom-8 right-[7%]">
      <a aria-label="Chat on WhatsApp" href="https://wa.me/+16028601112">
        <IoLogoWhatsapp className="w-[50px] h-[50px] text-green-500" />
      </a>
    </div>
  );
};

export default WhatsappBtn;
