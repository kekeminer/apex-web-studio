export const CONFIG_PAGOS = {
  titular: "Axel Matias Gamarra",
  cbu: "0000003100028073040358",
  alias: "APEX.WEB.STUDIO",
  cuit: "20-41893214-7",
  whatsapp: "5493454923088",
  notaSinComision: "Transferencias bancarias directas y pagos sin comisiones intermediarias. Envía el comprobante para activación instantánea.",
  esquema: "Esquema 40-30-30: 40% al iniciar, 30% contra entrega de diseño/funcionalidad y 30% al publicar en producción.",
  metodosAceptados: [
    { id: "cbu", nombre: "CBU / CVU", badge: "Transferencia Bancaria", icon: "bank" },
    { id: "mercadopago", nombre: "Mercado Pago", badge: "Mercado Pago", icon: "mp" },
  ],
} as const;
