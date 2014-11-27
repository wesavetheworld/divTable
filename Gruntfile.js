module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
			dist : {
				options: {
					banner: '/*! <%= pkg.name %> v<%= pkg.version %> | AGPL http://www.gnu.org/licenses/ */\n'
				},
				files: {
					'dist/js/<%= pkg.name %>.min.js' : 'src/js/<%= pkg.name %>.js'
				}
			}
    },
		
		copy: {
			main: {
				files: [{
					src: 'src/js/<%= pkg.name %>.js',
					dest: 'dist/js/<%= pkg.name %>.min.js'
				}],
			},
		},
    
    less: {
      development: {
        options: {
					
        },
        files: [{
          expand: true,
          cwd : 'src/css/',
          src : [ '*.less' ],
          dest : 'dist/css/',
          ext : '.min.css'
        }]
      },
      dist: {
        options: {
          cleancss: true
        },
        files: [{
          expand: true,
          cwd : 'src/css/',
          src : [ '*.less' ],
          dest : 'dist/css/',
          ext : '.min.css'
        }]
      }
    },

    autoprefixer: {
      dist: {
        options: {
          cascade : true
        },
        files: [{
          expand: true,
          cwd : 'dist/css/',
          src : [ '**/*.css' ],
          dest : 'dist/css/',
          ext : '.min.css',
        }]
      }
    }
  });
	
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-less'   );
  grunt.loadNpmTasks( 'grunt-autoprefixer'   );
	grunt.loadNpmTasks( 'grunt-contrib-copy'   );

  grunt.registerTask( 'default', ['uglify:dist', 'less:dist', 'autoprefixer']);
  grunt.registerTask( 'dev',     ['copy', 'less:development', 'autoprefixer']);

};