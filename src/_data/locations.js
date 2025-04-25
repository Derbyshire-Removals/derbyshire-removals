/**
 * Locations data for Derbyshire Removals
 * Used to generate content for the Areas We Cover page and other location-related components
 */

module.exports = {
  // Primary service locations with detailed information
  primaryLocations: [
    {
      name: "Derby",
      description: "Our headquarters, providing extensive removal services across the city and surrounding areas.",
      link: "/locations/derby/"
    },
    {
      name: "Matlock",
      description: "Specialised removal services in Matlock, accommodating the unique terrain and properties.",
      link: "/locations/matlock/"
    },
    {
      name: "Chesterfield",
      description: "Full-service house and office removals throughout Chesterfield and neighboring towns.",
      link: "/locations/chesterfield/"
    },
    {
      name: "Buxton",
      description: "Professional removal solutions tailored to Buxton's residential and commercial needs.",
      link: "/locations/buxton/"
    },
    {
      name: "Bakewell",
      description: "Expert removal services in Bakewell, with knowledge of the Peak District's unique challenges.",
      link: "/locations/bakewell/"
    },
    {
      name: "Alfreton",
      description: "Local expertise for seamless relocations in Alfreton and the surrounding area.",
      link: "/locations/alfreton/"
    },
    {
      name: "Mansfield",
      description: "Comprehensive moving services covering all aspects of Mansfield relocations.",
      link: "/locations/mansfield/"
    },
    {
      name: "Loughborough",
      description: "Reliable and efficient removal services for Loughborough residents and businesses.",
      link: "/locations/loughborough/"
    }
  ],

  // Additional coverage areas
  additionalAreas: [
    "Nottingham", "Leicester", "Sheffield", "Birmingham",
    "Stoke-on-Trent", "Stafford", "Wolverhampton", "Coventry",
    "Walsall", "Telford", "Ashbourne", "Belper",
    "Ripley", "Long Eaton", "Ilkeston", "Swadlincote"
  ],

  // All areas we cover (for the grid display)
  allAreas: [
    { name: "Derby", link: "/locations/derby/" },
    { name: "Chesterfield", link: "/locations/chesterfield/" },
    { name: "Matlock", link: "/locations/matlock/" },
    { name: "Buxton", link: "/locations/buxton/" },
    { name: "Alfreton", link: "/locations/alfreton/" },
    { name: "Ashbourne", link: "/locations/ashbourne/" },
    { name: "Bakewell", link: "/locations/bakewell/" },
    { name: "Belper", link: "/locations/belper/" },
    { name: "Ilkeston", link: "/locations/ilkeston/" },
    { name: "Swadlincote", link: "/locations/swadlincote/" },
    { name: "Nottingham", link: "/locations/nottingham/" },
    { name: "Leicester", link: "/locations/leicester/" },
    { name: "Birmingham", link: "/locations/birmingham/" },
    { name: "Sheffield", link: "/locations/sheffield/" },
    { name: "Lincoln", link: "/locations/lincoln/" },
    { name: "Mansfield", link: "/locations/mansfield/" },
    { name: "Loughborough", link: "/locations/loughborough/" }
  ]
};
