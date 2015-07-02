module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

	  uglify: {
	    options: {
	      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	    },
	    build: {
	      src: 'src/<%= pkg.name %>.js',
	      dest: 'build/<%= pkg.name %>.min.js'
	    }
	  },

	  htmlmin: {                                     // Task 
    dist: {                                      // Target 
      options: {                                 // Target options 
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files 
        'index.html': 'index.html',     // 'destination': 'source' 
      }
    },
    dev: {                                       // Another target 
      files: {
        'index.html': 'index.html',
      }
    }
  },

  jshint: {
    all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'js/**/*.js']
  },

  sass: {                              // Task 
    dist: {                            // Target 
      options: {                       // Target options 
        style: 'expanded'
      },
      files: {                         // Dictionary of files 
        'styles.css': 'styles.scss',       // 'destination': 'source' 
      }
    }
  },

   cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'css/',
      src: ['*.css', '!*.min.css'],
      dest: 'css/',
      ext: '.min.css'
    }]
  }
}


});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// Load the plugin that provides the "Html-min" task.
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	// Load the plugin that provides the "jshint" task.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// Load the plugin that provides the "jshint" task.
	grunt.loadNpmTasks('grunt-contrib-sass');
	// Load the plugin that provides the "jshint" task.
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Default task(s).
  grunt.registerTask('default', ['uglify'],['htmlmin'],['jshint'],['sass'],['cssmin']);

};