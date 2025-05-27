// src/components/MobileWhatsAppFloating.tsx
import WhatsAppButton from "./WhatsappButton";

export default function MobileWhatsAppFloating() {
  return (
    <div
      className="
        fixed bottom-4 right-4 z-50
        block md:hidden
      "
    >
      <WhatsAppButton
        message="Olá, gostaria de saber mais sobre os planos de saúde da Porto Seguro."
      />
    </div>
  );
}
