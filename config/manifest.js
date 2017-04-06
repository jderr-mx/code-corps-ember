/*jshint node:true*/
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "Code Corps - Build a better future",
    short_name: "Code Corps",
    description: "Contribute to open source projects for social good",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/assets/images/192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/assets/images/180x180.png",
        sizes: "180x180",
        type: "image/png",
        targets: ['apple']
      },
      {
        src: "/assets/images/120x120.png",
        type: "image/png",
        targets: ['apple']
      }
    ]
  };
}
