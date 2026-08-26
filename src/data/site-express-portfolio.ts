export interface PortfolioItem {
  nome: string
  setor: string
  url: string
  screenshot: string | null
}

export const siteExpressPortfolio: PortfolioItem[] = [
  {
    nome: 'MAC Assessoria Contábil',
    setor: 'Contabilidade',
    url: 'https://assessoriacontabilmac.com.br/',
    screenshot: '/assets/portfolio/mac-assessoria.jpg',
  },
]
