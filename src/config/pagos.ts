export const CONFIG_PAGOS = {
  titular: "Axel Matias Gamarra",
  cbu: "0000003100028073040358",
  alias: "APEX.WEB.STUDIO",
  cuit: "20-41893214-7",
  whatsapp: "5493454923088",
  cripto: {
    moneda: "USDT",
    red: "TRC-20 (Tron) / BEP-20",
    wallet: "TJvApexStudioWebUSDTWallet8921",
  },
  notaSinComision: "Transferencias directas y pagos sin comisiones intermediarias. Envía el comprobante para activación instantánea.",
  esquema: "Esquema 40-30-30: 40% al iniciar, 30% contra entrega de diseño/funcionalidad y 30% al publicar en producción.",
  metodosAceptados: [
    { id: "cbu", nombre: "CBU / CVU", badge: "Transferencia Bancaria", icon: "bank" },
    { id: "mercadopago", nombre: "Mercado Pago", badge: "Mercado Pago", icon: "mp" },
    { id: "usdt", nombre: "USDT / Crypto", badge: "TRC20 / BEP20", icon: "crypto" },
  ],
} as const;
