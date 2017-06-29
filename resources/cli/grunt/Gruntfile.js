module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            main: {
                src: [
                    '../../assets/main/sass/app.scss',
                ],
                dest: '../../assets/main/css/app.css'
            },
        },
        concat: {
            options: {
                separator:  ';\n' ,
            },
            main: {
                src: [
                    '../../assets/main/js/vendor/jquery-1.11.3.min.js',
                    '../../assets/main/js/vendor/jquery.easing-1.3.js',

                    '../../assets/main/js/vendor/segment.min.js',
                    '../../assets/main/js/vendor/ease.min.js',


                    '../../assets/main/js/vendor/angular.min.js',
                    '../../assets/main/js/vendor/readmore.min.js',
                    '../../assets/main/js/vendor/angular-busy.min.js',
                    '../../assets/main/js/vendor/angular-confirm.js',
                    '../../assets/main/js/vendor/angular-sanitize.min.js',
                    '../../assets/main/js/vendor/autocomplete.js',
                    '../../assets/main/js/vendor/ng-tags-input.min.js',
                    '../../assets/main/js/vendor/textAngular.min.js',
                    '../../assets/main/js/vendor/textAngular-rangy.min.js',
                    '../../assets/main/js/vendor/textAngular-sanitize.min.js',
                    '../../assets/admin/js/vendor/angular-file-upload.min.js',
                    '../../assets/main/js/vendor/angular-socialshare.min.js',

                    '../../assets/main/js/vendor/royalslider/jquery.royalslider.min.js',

                    '../../assets/main/js/vendor/ui-bootstrap.min.js',
                    '../../assets/main/js/vendor/bootstrap-colorpicker-module.js',

                    '../../assets/main/js/vendor/cart-summary.js',
                    '../../assets/main/js/vendor/add-to-bag.js',
                    '../../assets/main/js/vendor/woocommerce.js',

                    '../../assets/main/js/app.js',
                    '../../assets/main/js/shams.js',

                    '../../assets/main/js/angular-custom/public.common.js',
                    '../../assets/main/js/angular-custom/custom.paging.js',
                    '../../assets/main/js/angular-custom/custom.product.js',
                ],
                dest: '../../../public/assets/js/main.js'
            },
            admin: {
                src: [
                    '../../assets/admin/js/custom.admin.js',
                    '../../assets/admin/js/vendor/angular-file-upload.min.js',
                    '../../assets/admin/js/vendor/bootstrap.min.js',
                    '../../assets/admin/js/vendor/jquery.min.js',
                    '../../assets/admin/js/vendor/metisMenu.min.js',
                    '../../assets/admin/js/vendor/ng-rateit.min.js',
                   // '../../assets/admin/js/vendor/ui-bootstrap-tpls-2.0.2.min.js',

                ],
                dest: '../../../public/assets/js/admin.js'
            },
            maincss: {
                src: [
                    '../../assets/main/css/autocomplete.css',
                    '../../assets/main/css/colors.css',
                    '../../assets/main/css/global.css',
                    '../../assets/main/css/modal.css',
                    '../../assets/main/css/ng-tags-input.min.css',
                    '../../assets/main/css/styles.css',
                    '../../assets/main/css/wysiwyg.style.css',
                    '../../assets/main/js/vendor/royalslider/royalslider.css',
                    '../../assets/main/css/app.css',

                    '../../assets/main/css/woocommerce.css',

                ],
                dest: '../../../public/assets/css/main.css'
            },
            admincss: {
                src: [
                    '../../assets/admin/css/*.css',
                ],
                dest: '../../../public/assets/css/admin.css'
            },
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                //preserveComments: 'all',
            },
            all: {
                files: {
                    //'../../../public/assets/js/main.js': ['<%= concat.main.dest %>'], // TODO - breaks ang scaffolding?
                    //'../../../public/assets/js/admin.js': ['<%= concat.admin.dest %>']
                }
            },
        },
        cssmin: {
            main: {
                options:{
                    keepSpecialComments:0
                },
                files: {
                    '../../../public/assets/css/main.css': ['<%= concat.maincss.dest %>'],
                    '../../../public/assets/css/admin.css': ['<%= concat.admincss.dest %>']

                }
            },
        },

        //jshint: {
        //    files: ['gruntfile.js', '../../public/media/js/binumi/packages/*.js'],
        //    options: {
        //        // options here to override JSHint defaults
        //        globals: {
        //            jQuery: true,
        //            console: true,
        //            module: true,
        //            document: true
        //        }
        //    }
        //},
        watch: {
            js: {
                files: ['<%= concat.main.src %>', '<%= concat.admin.src %>'],
                tasks: ['js']
            },
            css: {
                files: ['../../assets/main/css/*', '../../assets/admin/css/*', '../../assets/main/sass/**/*'],
                tasks: ['css']
            },
        },
        apidoc: {
            ideaing_api: {
                src: "../../application/modules/api/",
                dest: "../../doc/api/"
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-closure-tools');

    //grunt.registerTask('jshint', ['jshint']);
    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'cssmin']);
    grunt.registerTask('js', ['concat:main', 'concat:admin', 'uglify:all']);
    grunt.registerTask('css', ['sass', 'concat:maincss','concat:admincss','cssmin']);
    grunt.registerTask('admincss', ['concat:admincss','cssmin']);
    grunt.option('force', true);



};
