let gulp = require('gulp');
let connect = require('gulp-connect');

let root = './';
let port = 3000;
let html = root + 'client/**/*.html';
let js   = root + 'client/**/*.js';
let css  = root + 'client/**/*.css';


//html
gulp.task('html',function(){
	console.log('bbb')
	gulp.src(html)
		.pipe(connect.reload());

})

//js
gulp.task('js',function(){

	gulp.src(js)
		.pipe(connect.reload());
})

//css
gulp.task('css',function(){

	gulp.src(css)
		.pipe(connect.reload())
})

//server
gulp.task('server',function(){

	connect.server({
		root:root,
		port:port,
		livereload:true

	});
})

//build
gulp.task('build', [ 'html', 'js', 'css' ])

//dev
gulp.task('dev', [ 'server', 'build' ], function(){

	gulp.watch(html,['html']);
	gulp.watch(js,['js']);
	gulp.watch(css,['css']);
})