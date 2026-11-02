# Clínica Equilíbrio do Corpo — Site institucional

Site institucional da **Clínica Equilíbrio do Corpo** (Palhoça - SC), feito com [Astro](https://astro.build): HTML estático, rápido, com imagens otimizadas automaticamente (AVIF/WebP) e SEO local.

## Rodar localmente

Requisitos: **Node.js 22.23.4 ou superior** (o Astro 7 exige essa versão) e npm 9.6.5 ou superior. Quem usa [nvm](https://github.com/nvm-sh/nvm) pode rodar `nvm use` (versão definida em `.nvmrc`).

```bash
npm install       # ou: npm ci (instala exatamente as versões do package-lock.json)
npm run dev       # http://localhost:4321  (outra porta: npm run dev -- --port 5173)
npm run build     # gera a pasta dist/
npm run preview   # serve a versão de produção localmente
```

## Onde editar o conteúdo

Quase tudo fica em **`src/data/site.ts`**:

| O quê | Onde |
|---|---|
| Telefone, WhatsApp, endereço, Instagram, nota e total de avaliações | `clinic` |
| Mensagem padrão do WhatsApp | `DEFAULT_WA_MESSAGE` |
| As 12 especialidades (nome, descrição, ícone, foto, recorte) | `specialties` |
| Equipe | `team` (veja abaixo) |
| Diferenciais | `differentials` |
| Depoimentos do Google | `reviews` |

### Adicionar a equipe

Enquanto `team` estiver vazio, a seção mostra cards com "Em breve". Sem nomes inventados.
Para publicar os profissionais:

1. Coloque as fotos em `src/assets/equipe/` (ex.: `nome.jpg`, de preferência quadradas).
2. Em `src/data/site.ts`, importe e preencha:

```ts
import fotoNome from '../assets/equipe/nome.jpg';

export const team: TeamMember[] = [
  { name: 'Nome completo', role: 'Especialidade', registry: 'Registro profissional', bio: 'Breve apresentação.', photo: fotoNome },
];
```

### Trocar o logotipo

O logotipo atual (`src/components/Logo.astro` e `public/favicon.svg`) é **provisório**, inspirado no símbolo da clínica.
Para usar o arquivo oficial, substitua o SVG em `Logo.astro` por uma `<img>` do logo. Depois atualize `public/favicon.svg` e rode `npm run assets` para gerar de novo os ícones PNG e a imagem de compartilhamento (`public/og-image.jpg`).

### Trocar fotos

As fotos oficiais da clínica ficam em `src/assets/img/clinica/` (`clinica-recepcao`, `fisioterapia-atendimento`, `fisioterapia-ortopedica`, `fisioterapia-neurologica`, `fisioterapia-pelvica`, `acupuntura`, `nutricao`, `fonoaudiologia`, `psicologia`, `pilates`, `neuropsicopedagogia`, `intradermoterapia`). Elas foram recortadas da montagem enviada e têm cerca de 550 px de largura. **Se tiver as versões originais em alta resolução, basta substituir o arquivo mantendo o mesmo nome**; o Astro otimiza tudo no build e as imagens ficam mais nítidas em telas grandes.

`reabilitacao-vestibular.jpg` e `rpg.jpg` (em `src/assets/img/`) são fotos de banco de imagens mantidas porque a montagem não tinha foto desses procedimentos.
Se o recorte ficar ruim, ajuste o campo `focus` da especialidade (ex.: `'50% 30%'` = mostrar mais a parte de cima).

## Publicar

### GitHub

```bash
git init
git add .
git commit -m "Site Clínica Equilíbrio do Corpo"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/clinica-equilibrio-do-corpo.git
git push -u origin main
```

### Vercel

1. Em [vercel.com/new](https://vercel.com/new), importe o repositório. O framework **Astro** é detectado automaticamente.
2. Não é preciso mudar nada nas configurações de build: o `vercel.json` já define `npm run build` e a pasta `dist`, e a versão do Node vem do `package.json` (campo `engines`).
3. Em *Settings → Environment Variables*, crie `SITE_URL` com o domínio definitivo (ex.: `https://www.seudominio.com.br`). Esse valor é usado no link canônico, no Open Graph, no sitemap e nos dados estruturados.
4. Faça o deploy. Depois, cadastre o domínio em *Settings → Domains*.

## SEO incluído

- Título e descrição com foco em Palhoça - SC; `lang="pt-BR"`; meta geo.
- Open Graph e Twitter Card com imagem 1200×630.
- Dados estruturados `MedicalClinic` (schema.org) com endereço, telefone, Instagram e serviços.
- `sitemap-index.xml`, `robots.txt`, link canônico, favicon SVG e PNG, manifest.
- HTML semântico, link "pular para o conteúdo", foco visível e suporte a `prefers-reduced-motion`.

## Créditos das fotos

Fotos da clínica: material fornecido pela Clínica Equilíbrio do Corpo.
Reabilitação Vestibular e RPG: fotos do [Pexels](https://www.pexels.com) (licença gratuita para uso comercial, sem atribuição obrigatória).

## Estrutura

```
src/
  assets/img/        fotos (otimizadas no build)
  components/        Header, Hero, About, Specialties, Team, Differentials,
                     Reviews, CallToAction, Contact, Footer, WhatsAppFloat, Icon, Logo
  data/site.ts       conteúdo e contatos
  layouts/Base.astro <head>, SEO, JSON-LD e animações de rolagem
  pages/             index, 404 e robots.txt
  styles/global.css  identidade visual (cores, tipografia, botões)
public/              favicon, ícones, og-image, manifest
scripts/             geração de ícones e imagem OG (npm run assets)
docs/                material original (montagem de fotos enviada pela clínica)
.env.example         variáveis de ambiente (modelo, sem dados privados)
.nvmrc               versão do Node.js
```
