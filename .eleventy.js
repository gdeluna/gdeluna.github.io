module.exports = function(eleventyConfig) {
  // Copy static assets to the _site output directory
  eleventyConfig.addPassthroughCopy({
    "css/": "css/",
    "images/": "images/"
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
