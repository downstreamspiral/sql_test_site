const browserSync = require("browser-sync").create();

browserSync.init({
    proxy: "http://localhost:3000",
    files: ["public/**/*.*"],
    port: 3001,
    open: true,
    notify: false
});
