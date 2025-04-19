module.exports = function(eleventyConfig) {
  // Copy the `public` folder to the output
  eleventyConfig.addPassthroughCopy({ "public": "/" });

  // Copy JavaScript files to the output
  eleventyConfig.addPassthroughCopy("src/js");

  // Watch for changes to Tailwind CSS files
  eleventyConfig.addWatchTarget("./src/styles/tailwind.css");

  // Watch for changes to JavaScript files
  eleventyConfig.addWatchTarget("./src/js");

  // Watch for changes to images
  eleventyConfig.addWatchTarget("./public/images");

  // Add shortcodes for components
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Configure directories
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    // Use .html as template engine for markdown files
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
