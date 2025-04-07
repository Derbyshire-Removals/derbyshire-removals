
export const metadata = {
  title: "Areas We Cover: Midlands & Nationwide | Derbyshire Removals",
  description: "Professional house and office removals across the Midlands. Serving Derby, Matlock, Chesterfield, Nottingham, Birmingham, and Leicester since 1988.",
  keywords: "removal services east midlands, west midlands removals, derby house moves, leicester removals, nottingham movers, birmingham relocation services",
  alternates: {
    canonical: "https://derbyshireremovals.com/areas-we-cover",
  },
  openGraph: {
    title: "Areas We Cover: Midlands & Nationwide | Derbyshire Removals",
    description: "Professional removals serving Derby, Matlock, Chesterfield, Nottingham, Birmingham, Leicester and beyond since 1988.",
    url: "https://derbyshireremovals.com/areas-we-cover",
    type: "website",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Derbyshire Removals Moving Services",
    "description": "With over 35 years of experience, Derbyshire Removals provides comprehensive moving services across the East and West Midlands, with additional coverage extending nationwide. Our local expertise and knowledge ensure a smooth and efficient moving experience.",
    "url": "https://derbyshireremovals.com/areas-we-cover",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Derbyshire Removals",
      "@id": "https://derbyshireremovals.com/#organization"
    },
    "areaServed": [
      "Derby", "Chesterfield", "Alfreton", "Matlock", "Buxton", "Swadlincote", 
      "Ilkeston", "Long Eaton", "Glossop", "Belper", "Ripley", "Ashbourne", 
      "Dronfield", "Staveley", "Heanor", "Clay Cross", "Bolsover", "Shirebrook", 
      "Bakewell", "Wirksworth", "New Mills", "Leicester", "Loughborough", 
      "Hinckley", "Melton Mowbray", "Coalville", "Wigston", "Market Harborough", 
      "Oadby", "Ashby-de-la-Zouch", "Earl Shilton", "Shepshed", "Blaby", 
      "Syston", "Broughton Astley", "Lutterworth", "Enderby", "Mountsorrel", 
      "Barrow upon Soar", "Sileby", "Kibworth Harcourt", "Nottingham", 
      "Mansfield", "Newark-on-Trent", "Worksop", "Sutton-in-Ashfield", 
      "Kirkby-in-Ashfield", "Arnold", "Carlton", "Retford", "Beeston", 
      "West Bridgford", "Hucknall", "Eastwood", "Stapleford", "Kimberley", 
      "Ollerton", "Bingham", "Ruddington", "Cotgrave", "Southwell", 
      "Stoke-on-Trent", "Stafford", "Burton upon Trent", "Lichfield", 
      "Newcastle-under-Lyme", "Cannock", "Tamworth", "Leek", "Burntwood", 
      "Uttoxeter", "Rugeley", "Kidsgrove", "Stone", "Hednesford", "Biddulph", 
      "Cheadle", "Penkridge", "Wombourne", "Codsall", "Eccleshall", "Birmingham", 
      "Coventry", "Wolverhampton", "Solihull", "Walsall", "Dudley", 
      "West Bromwich", "Sutton Coldfield", "Stourbridge", "Halesowen", 
      "Aldridge", "Tipton", "Wednesbury", "Brierley Hill", "Brownhills", 
      "Rowley Regis", "Smethwick", "Bilston", "Willenhall", "Bloxwich", "Warwick", 
      "Nuneaton", "Rugby", "Leamington Spa", "Bedworth", "Stratford-upon-Avon", 
      "Atherstone", "Kenilworth", "Polesworth", "Alcester", "Coleshill", 
      "Southam", "Bulkington", "Shipston-on-Stour", "Henley-in-Arden", "Studley", 
      "Bidford-on-Avon", "Wellesbourne", "Kingsbury", "Whitnash", "Nationwide",
      "East Midlands", "West Midlands"
    ]
  }
};

export default function AreasWeCoverLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
