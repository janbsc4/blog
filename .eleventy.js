module.exports = eleventyConfig => {
  // Copy our static assets to the output folder
  eleventyConfig.addPassthroughCopy('css');
  // eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.setTemplateFormats([
    "md",
    "css" // css is not yet a recognized template extension in Eleventy
  ]);
  // Returning something from the configuration function is optional
  return {
    pathPrefix: "/blog/",
    dir: {
      output: 'docs'
    }
  };
};
