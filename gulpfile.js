const gulp = require('gulp');
const browseSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


// Static server
function bs() {
    serveSass();
    browseSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./html").on('change', browseSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./sass/**/*.scss", serveSass);
    watch("./js/*.js").on('change', browseSync.reload);
};

function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(dest("./css"))
        .pipe(browseSync.stream());
};

exports.serve = bs;