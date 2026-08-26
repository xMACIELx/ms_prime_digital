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
  {
    nome: 'W&W Assessoria',
    setor: 'Cidadania e Franquias',
    url: 'https://3b71dulryu8lzadapxhzqcx5.179.198.114.86.sslip.io/',
    screenshot: '/assets/portfolio/ww-assessoria.jpg',
  },
  {
    nome: 'Le Patriz',
    setor: 'Moda Feminina',
    url: 'https://www.lepatriz.com.br/',
    screenshot: '/assets/portfolio/le-patriz.jpg',
  },
]
