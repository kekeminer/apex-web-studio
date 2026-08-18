export const CONFIG_PAGOS = {
  titular: "Axel Matias Gamarra",
  cbu: "0000003100028073040358",
  whatsapp: "5493454923088",
  notaSinComision: "Ambos métodos son sin comisión. Cuando realices el pago, enviá el comprobante por WhatsApp para confirmarlo.",
  opciones: [
    {
      id: "transferencia",
      titulo: "Transferencia bancaria",
      textoGuia: "Transferí desde tu home banking a este CBU."
    },
    {
      id: "mercadopago",
      titulo: "Mercado Pago",
      textoGuia: "Abrí Mercado Pago, tocá en 'Enviar dinero' y transferí a este CBU. Pagás con tu dinero en cuenta, sin comisión."
    }
  ]
} as const;
