/**
 * Dados centrais do site.
 * Edite este arquivo para atualizar contatos, especialidades, equipe e avaliações.
 */
import type { ImageMetadata } from 'astro';

// Fotos oficiais da clínica (recortadas da montagem enviada)
import ortopedica from '../assets/img/clinica/fisioterapia-ortopedica.jpg';
import neurologica from '../assets/img/clinica/fisioterapia-neurologica.jpg';
import pelvica from '../assets/img/clinica/fisioterapia-pelvica.jpg';
import acupuntura from '../assets/img/clinica/acupuntura.jpg';
import nutricao from '../assets/img/clinica/nutricao.jpg';
import fono from '../assets/img/clinica/fonoaudiologia.jpg';
import psicologia from '../assets/img/clinica/psicologia.jpg';
import pilates from '../assets/img/clinica/pilates.jpg';
import neuropsico from '../assets/img/clinica/neuropsicopedagogia.jpg';
import intradermo from '../assets/img/clinica/intradermoterapia.jpg';
// Sem foto específica na montagem: mantidas fotos que mostram o procedimento correto
import vestibular from '../assets/img/reabilitacao-vestibular.jpg';
import rpg from '../assets/img/rpg.jpg';

/* ------------------------------------------------------------------ */
/* Contato                                                             */
/* ------------------------------------------------------------------ */

export const clinic = {
  name: 'Clínica Equilíbrio do Corpo',
  shortName: 'Equilíbrio do Corpo',
  city: 'Palhoça',
  state: 'SC',
  street: 'R. Pref. Ari Wagner',
  district: 'Centro',
  postalCode: '88130-070',
  address: 'R. Pref. Ari Wagner - Centro, Palhoça - SC, 88130-070',
  phoneDisplay: '(48) 98456-8580',
  phoneE164: '+5548984568580',
  whatsappNumber: '5548984568580',
  instagramUrl: 'https://www.instagram.com/clinica.equilibriodocorpo/',
  instagramHandle: '@clinica.equilibriodocorpo',
  rating: 4.6,
  reviewCount: 68,
};

const mapsQuery = encodeURIComponent(`${clinic.name}, ${clinic.address}`);

export const links = {
  maps: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  route: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
  mapEmbed: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  reviews: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  tel: `tel:${clinic.phoneE164}`,
};

export const DEFAULT_WA_MESSAGE =
  'Olá! Gostaria de saber mais sobre os atendimentos da Clínica Equilíbrio do Corpo.';

/** Gera o link do WhatsApp com mensagem pré-configurada. */
export function whatsapp(message: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* ------------------------------------------------------------------ */
/* Navegação                                                           */
/* ------------------------------------------------------------------ */

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Clínica', href: '#a-clinica' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Nossa Equipe', href: '#equipe' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

/* ------------------------------------------------------------------ */
/* Especialidades                                                      */
/* ------------------------------------------------------------------ */

export type IconName =
  | 'bone' | 'brain' | 'lotus' | 'needle' | 'balance' | 'apple'
  | 'speech' | 'heart' | 'pilates' | 'spine' | 'book' | 'drop';

export interface Specialty {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: IconName;
  image: ImageMetadata;
  imageAlt: string;
  /** Ponto focal da foto no recorte (CSS object-position). */
  focus?: string;
  featured?: boolean;
}

export const specialties: Specialty[] = [
  {
    slug: 'fisioterapia-ortopedica',
    name: 'Fisioterapia Ortopédica',
    shortName: 'Fisioterapia Ortopédica',
    description:
      'Avaliação e tratamento de disfunções em músculos, ossos, articulações e tendões, com foco na recuperação do movimento e no alívio da dor.',
    icon: 'bone',
    image: ortopedica,
    imageAlt: 'Fisioterapeuta avaliando a coluna de uma paciente',
    focus: '62% 40%',
  },
  {
    slug: 'fisioterapia-neurologica',
    name: 'Fisioterapia Neurológica (Adulto e Infantil)',
    shortName: 'Fisioterapia Neurológica',
    description:
      'Reabilitação de pessoas com alterações do sistema nervoso, buscando mais funcionalidade, autonomia e qualidade de vida para adultos e crianças.',
    icon: 'brain',
    image: neurologica,
    imageAlt: 'Fisioterapeuta acompanhando exercício de reabilitação de um paciente',
    focus: '62% 45%',
  },
  {
    slug: 'fisioterapia-pelvica',
    name: 'Fisioterapia Pélvica – Uroginecologia Funcional',
    shortName: 'Fisioterapia Pélvica',
    description:
      'Cuidado especializado da musculatura do assoalho pélvico, com atendimento individualizado, acolhedor e realizado com total discrição e respeito.',
    icon: 'lotus',
    image: pelvica,
    imageAlt: 'Profissional segurando modelo anatômico da pelve com a musculatura do assoalho pélvico',
    focus: '35% 50%',
    featured: true,
  },
  {
    slug: 'acupuntura',
    name: 'Acupuntura',
    shortName: 'Acupuntura',
    description:
      'Técnica da medicina tradicional chinesa que utiliza agulhas finas aplicadas em pontos específicos do corpo, como recurso complementar ao cuidado.',
    icon: 'needle',
    image: acupuntura,
    imageAlt: 'Paciente relaxada durante sessão de acupuntura',
    focus: '30% 50%',
  },
  {
    slug: 'reabilitacao-vestibular',
    name: 'Reabilitação Vestibular',
    shortName: 'Reabilitação Vestibular',
    description:
      'Abordagem voltada a pessoas com tontura, vertigem e desequilíbrio, por meio de exercícios específicos para o sistema do equilíbrio.',
    icon: 'balance',
    image: vestibular,
    focus: '50% 88%',
    imageAlt: 'Paciente realizando exercício de equilíbrio em prancha com apoio profissional',
  },
  {
    slug: 'nutricionista',
    name: 'Nutricionista',
    shortName: 'Nutricionista',
    description:
      'Orientação alimentar individualizada para promover saúde, bem-estar e hábitos mais equilibrados no dia a dia.',
    icon: 'apple',
    image: nutricao,
    imageAlt: 'Prato de salada com frango, frutas e fita métrica sobre a mesa',
    focus: '60% 50%',
  },
  {
    slug: 'fonoaudiologia',
    name: 'Fonoaudiologia',
    shortName: 'Fonoaudiologia',
    description:
      'Avaliação e acompanhamento da comunicação, envolvendo fala, linguagem, voz e funções relacionadas à deglutição.',
    icon: 'speech',
    image: fono,
    imageAlt: 'Fonoaudióloga realizando exercício de articulação com uma criança',
    focus: '45% 40%',
  },
  {
    slug: 'psicologia',
    name: 'Psicologia',
    shortName: 'Psicologia',
    description:
      'Espaço de escuta acolhedora e acompanhamento profissional para cuidar da saúde emocional e mental.',
    icon: 'heart',
    image: psicologia,
    imageAlt: 'Psicóloga em consulta conversando com paciente',
    focus: '70% 45%',
  },
  {
    slug: 'pilates',
    name: 'Pilates',
    shortName: 'Pilates',
    description:
      'Exercícios orientados que trabalham força, flexibilidade, postura e consciência corporal de forma segura e individualizada.',
    icon: 'pilates',
    image: pilates,
    imageAlt: 'Paciente realizando exercício no aparelho de Pilates com acompanhamento profissional',
    focus: '55% 50%',
  },
  {
    slug: 'rpg',
    name: 'Reeducação Postural Global (RPG)',
    shortName: 'RPG',
    description:
      'Método fisioterapêutico que trabalha a postura de forma global, por meio de posturas de alongamento e reeducação do corpo.',
    icon: 'spine',
    image: rpg,
    imageAlt: 'Fisioterapeuta corrigindo a postura de uma paciente',
  },
  {
    slug: 'neuropsicopedagogia',
    name: 'Neuropsicopedagoga',
    shortName: 'Neuropsicopedagogia',
    description:
      'Acompanhamento dos processos de aprendizagem, considerando aspectos cognitivos, emocionais e pedagógicos de cada pessoa.',
    icon: 'book',
    image: neuropsico,
    imageAlt: 'Profissional em atividade com uma criança sobre bola terapêutica',
    focus: '55% 40%',
  },
  {
    slug: 'intradermoterapia',
    name: 'Intradermoterapia',
    shortName: 'Intradermoterapia',
    description:
      'Técnica de aplicação de substâncias na camada intradérmica da pele, indicada e realizada somente após avaliação profissional.',
    icon: 'drop',
    image: intradermo,
    imageAlt: 'Profissional realizando aplicação de intradermoterapia no ombro de um paciente',
    focus: '60% 50%',
  },
];

export const specialtyMessage = (name: string) =>
  `Olá! Gostaria de agendar um atendimento de ${name} na Clínica Equilíbrio do Corpo.`;

/* ------------------------------------------------------------------ */
/* Equipe                                                              */
/* ------------------------------------------------------------------ */

/**
 * Preencha com os dados reais da equipe. Enquanto a lista estiver vazia,
 * a seção exibe cards "em atualização" sem informações fictícias.
 *
 * Exemplo:
 * import fotoFulana from '../assets/equipe/fulana.jpg';
 * { name: 'Nome completo', role: 'Especialidade', bio: 'Breve apresentação.', photo: fotoFulana, registry: 'CREFITO 00000-F' }
 */
export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  photo?: ImageMetadata;
  registry?: string;
}

export const team: TeamMember[] = [];

/* ------------------------------------------------------------------ */
/* Diferenciais                                                        */
/* ------------------------------------------------------------------ */

export const differentials = [
  { icon: 'hands', title: 'Atendimento humanizado', text: 'Escuta atenta e respeito em cada etapa do seu cuidado.' },
  { icon: 'home', title: 'Ambiente acolhedor', text: 'Um espaço pensado para você se sentir confortável e seguro.' },
  { icon: 'users', title: 'Equipe multidisciplinar', text: 'Profissionais de diferentes áreas trabalhando pelo seu bem-estar.' },
  { icon: 'target', title: 'Atenção individualizada', text: 'Cada pessoa é única, e o cuidado também precisa ser.' },
  { icon: 'heart', title: 'Compromisso com o bem-estar', text: 'Saúde e qualidade de vida como propósito em cada atendimento.' },
  { icon: 'grid', title: 'Diversidade de especialidades', text: '12 especialidades reunidas em um só lugar, no Centro de Palhoça.' },
] as const;

/* ------------------------------------------------------------------ */
/* Avaliações (reais, do Google)                                       */
/* ------------------------------------------------------------------ */

export interface Review {
  text: string;
  author?: string;
}

export const reviews: Review[] = [
  {
    text: 'Gostaria de deixar meu carinho e reconhecimento à Clínica Equilíbrio. Parabenizo a Dra. Elaine, a Dra. Carol Lopes, a Dra. Juliana, o recepcionista Luiz e toda a equipe pelo excelente trabalho que realizam.',
  },
  { text: 'Excelente! Recomendo de olhos fechados. Toda equipe está de parabéns.' },
  {
    text: 'Excelente clínica! Atendimento maravilhoso desde a recepção até o acompanhamento nas sessões.',
  },
];
