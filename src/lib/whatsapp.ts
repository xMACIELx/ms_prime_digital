export const WHATSAPP_NUMBER = 'https://wa.me/555197993631'

export const WHATSAPP_MESSAGES = {
  generico: 'Olá! Quero saber mais sobre os serviços da MS Digital Prime.',
  siteExpress: 'Olá! Quero meu Site Express',
}

export function buildWhatsappHref(message: string) {
  return `${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
