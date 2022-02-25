module.exports = function(grunt) {
    grunt.initConfig({
        // tasks:{}

        // Now we wiil add another task watch by using command => grunt-contrib-watch

        /* Funcatonalities of grunt 
        * Continueously watch for any changes and file and if there are changes in any- file it will automatically perform a certain task defined.
        * It also provied live relaode feature.
        * We need to add live reload script to html file to work.
        * 
        * TO SEE THE CHANGES RUN COMMAND => grunt watch
        */
        watch:{
            //sub-task - we will automate the uglify task.
            uglify:{
                files:'src/js/script.js',  // Look for changes in this file
                tasks:['uglify'], // if there are any changes than perform this task
                options:{
                    livereload: 35729 // default port that grunt uses. 
                }
            },
            cssmin:{
                files:'src/css/style.css', // Look for changes in this file
                tasks:['cssmin'], // if there are any changes than perform this task
                options:{
                    livereload:true // we do not need to give the port no. everytime
                }
            },

            /**
             * Since we are applying live reload of js and css but at the end they are goint to affect our html so we are need to add live reload to it as well. 
             */

            all:{
                files:'**/*/html', // search for any html file in the folder.
                options:{
                    livereload:true
                }
            }
           
        },

        // Task-1 uglify - to minify the js (decrease the file size) command=> grunt-contrib-uglify
        uglify:{
            build:{
                files:{
                // Destination : src
                'build/js/script.min.js':['src/js/script.js']
                }
            }
        },
        // Task-2 min-css - to minify css file (decrease the file size) command=> grunt-contrib-cssmin
        cssmin:{
            build:{
                    src:'src/css/style.css',
                    dest:'build/css/style.mis.css'                
            }
        }
    });
    // define any custom tasks or alaises

    grunt.registerTask('jsmin',['uglify']);   // now when we run command "grunt uglify". we can use its alaise as jsmin. new command=> "grunt jsmin"

    // We can also run multiple tasks by single alias
    grunt.registerTask("minify"["uglify","cssmin"]);


    // load up task plugin
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

};