import type { Icon } from '@phosphor-icons/react'
import {
  Target,
  MagnifyingGlass,
  TrendUp,
  Browser,
  FlowArrow,
  UsersFour,
  Sparkle,
  Code,
  ChatCircleDots,
} from '@phosphor-icons/react'

export type ServiceGroup = 'marketing' | 'automacao'

export interface Service {
  id: string
  group: ServiceGroup
  icon: Icon
  title: string
  summary: string
  description: string
  points: string[]
  /** desktop column span in the 3-col bento grid */
  span: 'wide' | 'normal'
}

export const marketingServices: Service[] = [
  {
    id: 'trafego-pago',
    group: 'marketing',
    icon: Target,
    title: 'Tráfego pago',
    summary: 'Anúncios que colocam sua marca na frente de quem já está pronto para comprar.',
    description:
      'Campanhas de tráfego pago desenhadas para conectar sua oferta ao público certo, com velocidade. A estratégia combina segmentação, criativos e páginas de destino para transformar atenção em oportunidade real.',
    points: [
      'Segmentação por interesse, comportamento e contexto',
      'Testes de criativo para entender o que converte melhor',
      'Acompanhamento de métricas para dar previsibilidade ao investimento',
    ],
    span: 'wide',
  },
  {
    id: 'google-ads',
    group: 'marketing',
    icon: MagnifyingGlass,
    title: 'Google Ads',
    summary: 'Apareça exatamente quando o cliente já está procurando o que você vende.',
    description:
      'Em vez de falar para todo mundo, colocamos sua oferta na frente de quem já está pesquisando por um serviço ou produto parecido com o seu, no momento em que a decisão está sendo tomada.',
    points: [
      'Campanhas de busca com foco em intenção real',
      'Monitoramento de termos e cliques para reduzir desperdício de verba',
      'Anúncios e páginas alinhados ao nível de interesse do público',
    ],
    span: 'normal',
  },
  {
    id: 'redes-sociais',
    group: 'marketing',
    icon: TrendUp,
    title: 'Crescimento de redes sociais',
    summary: 'Presença que constrói confiança antes mesmo da primeira conversa.',
    description:
      'Estratégia de conteúdo e crescimento orgânico pensada para que sua marca seja lembrada e escolhida, com consistência de publicação e leitura constante do que gera mais engajamento.',
    points: [
      'Calendário de conteúdo alinhado ao seu público',
      'Ajuste de formato e mensagem a partir do comportamento real',
      'Base sólida para campanhas pagas futuras',
    ],
    span: 'normal',
  },
  {
    id: 'criacao-site',
    group: 'marketing',
    icon: Browser,
    title: 'Criação de site',
    summary: 'Um site rápido, claro e construído para converter visita em contato.',
    description:
      'O site é o centro da sua presença digital. Ele precisa apresentar a marca com clareza, passar confiança e orientar o visitante até a ação certa, seja orçamento, WhatsApp ou formulário.',
    points: [
      'Layout que valoriza a marca e os diferenciais do negócio',
      'Navegação simples em qualquer tela, sem perder velocidade',
      'Estrutura com foco em conversão e prova social',
    ],
    span: 'wide',
  },
]

export const automationServices: Service[] = [
  {
    id: 'automacoes',
    group: 'automacao',
    icon: FlowArrow,
    title: 'Otimização de processos com automações',
    summary: 'Tarefas repetitivas saem das suas mãos e passam a rodar sozinhas.',
    description:
      'Mapeamos as etapas do seu processo que consomem tempo sem gerar valor direto e construímos automações que cuidam delas, liberando a equipe para o que realmente precisa de atenção humana.',
    points: [
      'Mapeamento dos processos com maior potencial de automação',
      'Integração entre as ferramentas que você já usa',
      'Redução de erro humano em tarefas repetitivas',
    ],
    span: 'normal',
  },
  {
    id: 'crm',
    group: 'automacao',
    icon: UsersFour,
    title: 'Implementação de CRM de vendas',
    summary: 'Cada contato organizado, cada oportunidade visível, nada se perde.',
    description:
      'Estruturamos um CRM ajustado ao seu funil de vendas real, para que a equipe saiba exatamente com quem falar, quando falar e o que oferecer em cada etapa da negociação.',
    points: [
      'Funil configurado para o seu ciclo de vendas',
      'Histórico de contato centralizado por cliente',
      'Relatórios simples para acompanhar conversão',
    ],
    span: 'normal',
  },
  {
    id: 'ia',
    group: 'automacao',
    icon: Sparkle,
    title: 'Implementação de IA',
    summary: 'Inteligência artificial aplicada em pontos reais de operação, não como enfeite.',
    description:
      'Identificamos onde a IA gera ganho real no seu negócio, seja atendimento, análise de dados ou geração de conteúdo, e implementamos com acompanhamento próximo até virar rotina.',
    points: [
      'Diagnóstico de onde a IA gera retorno real',
      'Implementação conectada às ferramentas existentes',
      'Ajuste contínuo conforme o uso no dia a dia',
    ],
    span: 'normal',
  },
  {
    id: 'software',
    group: 'automacao',
    icon: Code,
    title: 'Desenvolvimento de software',
    summary: 'Sistemas sob medida para o que nenhuma ferramenta pronta resolve.',
    description:
      'Quando o processo do seu negócio é específico demais para uma ferramenta genérica, construímos o sistema certo, do zero, alinhado ao jeito como sua operação realmente funciona.',
    points: [
      'Levantamento de requisitos junto à sua operação',
      'Desenvolvimento focado em uso real, não em recursos extras',
      'Suporte para ajustes conforme o negócio cresce',
    ],
    span: 'wide',
  },
  {
    id: 'chatbots',
    group: 'automacao',
    icon: ChatCircleDots,
    title: 'Chatbots de atendimento',
    summary: 'Resposta imediata para o cliente, sem depender de alguém estar online.',
    description:
      'Construímos chatbots que respondem dúvidas comuns, qualificam o contato e direcionam para um humano no momento certo, mantendo o atendimento ativo em qualquer horário.',
    points: [
      'Fluxo de conversa desenhado para o seu tipo de cliente',
      'Qualificação automática antes de passar para a equipe',
      'Atendimento ativo fora do horário comercial',
    ],
    span: 'normal',
  },
]
