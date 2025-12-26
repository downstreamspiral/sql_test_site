const browserSync = require("browser-sync").create();

browserSync.init({
    proxy: "http://localhost:3000",
    files: ["public/**/*.*"],
    port: 4000,
    open: true,
});
