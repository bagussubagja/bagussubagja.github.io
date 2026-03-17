import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

const messages = [
  "Interested in collaborating? Let's discuss your project!",
  "Have an exciting project idea? Let's make it happen!",
  "Need a Flutter developer? I'm ready to help!",
  "Let's collaborate to create something amazing!",
  "Have a dream project? Let's build it together!",
];

const PromoToast = () => {
  const messageIndexRef = useRef(0);
  const isMobile = useIsMobile();

  const handleContact = () => {
    window.location.href = "mailto:bagussubagja17@gmail.com";
  };

  useEffect(() => {
    const showToast = () => {
      toast.dismiss();
      toast(messages[messageIndexRef.current], {
        duration: 5000,
        position: isMobile ? "bottom-center" : "top-right",
        className: isMobile ? "mb-20" : "animate-subtle-shake",
        action: {
          label: "Contact Me",
          onClick: handleContact,
        },
      });
      messageIndexRef.current = (messageIndexRef.current + 1) % messages.length;
    };

    const initialTimeout = setTimeout(showToast, 5000);
    const interval = setInterval(showToast, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isMobile]);

  return null;
};

export default PromoToast;
