import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AreasWeCover = () => {
  const regions = [
    {
      name: "East Midlands",
      areas: [
        { shire: "Derbyshire", towns: ["Derby", "Chesterfield", "Swadlincote", "Ilkeston", "Long Eaton", "Buxton", "Glossop", "Belper", "Ripley", "Ashbourne", "Dronfield", "Matlock", "Staveley", "Heanor", "Clay Cross", "Bolsover", "Shirebrook", "Bakewell", "Wirksworth", "New Mills"] },
        { shire: "Leicestershire", towns: ["Leicester", "Loughborough", "Hinckley", "Melton Mowbray", "Coalville", "Wigston", "Market Harborough", "Oadby", "Ashby-de-la-Zouch", "Earl Shilton", "Shepshed", "Blaby", "Syston", "Broughton Astley", "Lutterworth", "Enderby", "Mountsorrel", "Barrow upon Soar", "Sileby", "Kibworth Harcourt"] },
        { shire: "Lincolnshire", towns: ["Lincoln", "Boston", "Grantham", "Skegness", "Spalding", "Gainsborough", "Stamford", "Sleaford", "Louth", "Bourne", "Mablethorpe", "Horncastle", "Market Deeping", "Holbeach", "Long Sutton", "Woodhall Spa", "Crowland", "Caistor", "Spilsby", "Alford"] },
        { shire: "Northamptonshire", towns: ["Northampton", "Kettering", "Corby", "Wellingborough", "Rushden", "Daventry", "Brackley", "Towcester", "Desborough", "Rothwell", "Irthlingborough", "Raunds", "Thrapston", "Oundle", "Higham Ferrers", "Burton Latimer", "Irchester", "Brixworth", "Earls Barton", "Wollaston"] },
        { shire: "Nottinghamshire", towns: ["Nottingham", "Mansfield", "Newark-on-Trent", "Worksop", "Sutton-in-Ashfield", "Kirkby-in-Ashfield", "Arnold", "Carlton", "Retford", "Beeston", "West Bridgford", "Hucknall", "Eastwood", "Stapleford", "Kimberley", "Ollerton", "Bingham", "Ruddington", "Cotgrave", "Southwell"] },
        { shire: "Rutland", towns: ["Oakham", "Uppingham", "Cottesmore", "Edith Weston", "Empingham", "Greetham", "Ketton", "Langham", "Lyddington", "Market Overton", "North Luffenham", "Ryhall", "Whissendine"] }
      ]
    },
    {
      name: "West Midlands",
      areas: [
        { shire: "Herefordshire", towns: ["Hereford", "Leominster", "Ross-on-Wye", "Ledbury", "Bromyard", "Kington", "Pembridge", "Weobley", "Eardisley", "Fownhope", "Colwall", "Credenhill", "Peterchurch", "Bodenham", "Whitchurch", "Wigmore", "Leintwardine", "Madley", "Ewyas Harold", "Much Marcle"] },
        { shire: "Shropshire", towns: ["Shrewsbury", "Telford", "Oswestry", "Bridgnorth", "Market Drayton", "Ludlow", "Whitchurch", "Newport", "Shifnal", "Bayston Hill", "Wem", "Broseley", "Much Wenlock", "Church Stretton", "Ellesmere", "Pontesbury", "Albrighton", "Cleobury Mortimer", "Craven Arms", "Bishop's Castle"] },
        { shire: "Staffordshire", towns: ["Stoke-on-Trent", "Stafford", "Burton upon Trent", "Lichfield", "Newcastle-under-Lyme", "Cannock", "Tamworth", "Leek", "Burntwood", "Uttoxeter", "Rugeley", "Kidsgrove", "Stone", "Hednesford", "Biddulph", "Cheadle", "Penkridge", "Wombourne", "Codsall", "Eccleshall"] },
        { shire: "Warwickshire", towns: ["Warwick", "Nuneaton", "Rugby", "Leamington Spa", "Bedworth", "Stratford-upon-Avon", "Atherstone", "Kenilworth", "Polesworth", "Alcester", "Coleshill", "Southam", "Bulkington", "Shipston-on-Stour", "Henley-in-Arden", "Studley", "Bidford-on-Avon", "Wellesbourne", "Kingsbury", "Whitnash"] },
        { shire: "West Midlands", towns: ["Birmingham", "Coventry", "Wolverhampton", "Solihull", "Walsall", "Dudley", "West Bromwich", "Sutton Coldfield", "Stourbridge", "Halesowen", "Aldridge", "Tipton", "Wednesbury", "Brierley Hill", "Brownhills", "Rowley Regis", "Smethwick", "Bilston", "Willenhall", "Bloxwich"] },
        { shire: "Worcestershire", towns: ["Worcester", "Redditch", "Bromsgrove", "Kidderminster", "Malvern", "Evesham", "Droitwich Spa", "Stourport-on-Severn", "Bewdley", "Pershore", "Tenbury Wells", "Upton-upon-Severn", "Broadway", "Alvechurch", "Wythall", "Hagley", "Fernhill Heath", "Rubery", "Catshill", "Hartlebury"] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24">
        <h1 className="text-3xl font-bold mb-6">Detailed Areas We Cover</h1>
        {regions.map((region, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{region.name}</h2>
            {region.areas.map((area, areaIndex) => (
              <div key={areaIndex} className="mb-4">
                <h3 className="text-xl font-medium mb-2">{area.shire}</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                  {area.towns.map((town, townIndex) => (
                    <li key={townIndex} className="text-sm">{town}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
        <p className="mt-8">
          While we specialize in the East and West Midlands, our services extend nationwide. 
          If you don't see your specific location listed, please contact us for more information 
          about our coverage in your area.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default AreasWeCover;