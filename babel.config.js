module.exports = {
  presets: ["babel-preset-gatsby"],
  plugins: [
    [
      "prismjs",
      {
        languages: ["javascript"],
        plugins: ["line-numbers", "show-language"],
        theme: "okaidia",
        css: true,
      },
    ],
  ],
}
