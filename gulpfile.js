const { src, dest } = require('gulp')
const babel = require('gulp-babel')
const rename = require('gulp-rename')

exports.default = () => (
  src('src/konami-code.js')
    .pipe(babel({ presets: ['minify'] }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist'))
)
