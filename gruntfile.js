'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    /**
     *  shell commands to clean and build
     *  removes build and .tmp folder then copies src folder contents to build
     */
    shell: {
      options: {
        stdout: true
      },
      clean: {
        command: 'rm -rf build .tmp'
      },
      build: {
        command: 'cp -r src build && cp CNAME build'
      }
    },

    /**
     *  prepares usemin references in the referenced files ready for concat,
     *  uglify and cssmin
     */
    useminPrepare: {
      options: {
        dest: 'build'
      },
      html: ['build/index.html', 'build/intro.html', 'build/sponsoring.html']
    },

    /**
     *  runs concat, uglify and cssmin on resources in referenced files
     */
    usemin: {
      html: ['build/index.html', 'build/intro.html', 'build/sponsoring.html']
    },

    /**
     *  create an md5 hash of each file referenced to append to the filename,
     *  allowing for long cache times
     */
    rev: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 8
      },
      css: {
        src: ['build/styles/hoodie.min.css']
      },
      js: {
        src: ['build/scripts/hoodie.min.js']
      }
    },

    /**
     * push the referenced folder to the repository's gh-pages branch
     */
    'gh-pages': {
      options: {
        base: 'build'
      },
      src: ['**']
    }

  });

  grunt.registerTask('clean', ['shell:clean', 'shell:build'])
  grunt.registerTask('build', ['clean', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'rev', 'usemin']);
  grunt.registerTask('deploy', ['build', 'gh-pages']);

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-rev');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-gh-pages');

};
