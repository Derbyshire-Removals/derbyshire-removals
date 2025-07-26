const { execSync } = require('child_process');

module.exports = function(eleventyConfig) {
  // Add Git last modified date to pages
  eleventyConfig.addGlobalData("eleventyComputed", {
    gitLastModified: (data) => {
      if (data.page.inputPath) {
        try {
          // Clean up the file path for git
          let filePath = data.page.inputPath;
          if (filePath.startsWith('./')) {
            filePath = filePath.substring(2);
          }
          
          console.log(`Getting git date for: ${filePath}`);
          const gitDate = execSync(`git log -1 --format=%ci -- "${filePath}"`, { 
            encoding: 'utf8',
            timeout: 5000,
            cwd: process.cwd()
          }).trim();
          
          if (gitDate) {
            console.log(`Git date for ${filePath}: ${gitDate}`);
            return new Date(gitDate);
          } else {
            console.log(`No git date found for ${filePath}, using current date`);
            return new Date();
          }
        } catch (error) {
          console.warn(`Could not get git date for ${data.page.inputPath}:`, error.message);
          return new Date();
        }
      }
      return new Date();
    }
  });

  // Add date filter for sitemap
  eleventyConfig.addFilter("date", (dateObj, format) => {
    if (!dateObj) return '';
    const date = new Date(dateObj);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    if (format === 'Y-m-d') {
      return `${year}-${month}-${day}`;
    }
    return date.toISOString().split('T')[0];
  });

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
