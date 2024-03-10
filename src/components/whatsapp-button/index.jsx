import { FaWhatsapp } from "react-icons/fa";
import socialData from "@/data/social";

const WhatsAppButton = () => {
  return (
    <>
      <a id="whatsappButton" href={`https://wa.me/${socialData.whatsapp}`} >
        <FaWhatsapp />
      </a>
    </>
  )
};

export default WhatsAppButton;
