# hood.ie

#### This was the first Website [Hoodie](http://hood.ie) ever had. It's now been replaced with [our new one](https://github.com/hoodiehq/hood.ie). Thank you for the music, good ol' friend!

### Workflow

#### * Reminder: no work should be committed directly into the gh-pages branch, the deploy process will handle this. *

Clone the repository and `cd` into the project directory:

    $ git clone git@github.com:hoodiehq/hood.ie.git && cd hood.ie
    
Install the development node modules:

    $ npm install
    
Develop your new feature/bug fix in the usual way, the suggested workflow is to:

* Branch off master into a feature branch
* Develop your feature/bug fix
* Run `grunt build` to dry run the build process, the built site will be available in the build folder to check over
* Commit your amendments
* Push your branch to the remote repository
* Create a pull request to merge your amendments into master

Once those amendments are merged into master they will need to be deployed to the gh-pages branch to be updated on the site, this can be done by anyone as long as they have updated their local version of master and have the required node modules installed ( `npm install`). Deploy by running the following command:

    $ grunt deploy

The deploy process does the following:

* Copies the src folder contents into the build folder
* Concats, uglifies and minifies the relevant files and amend the references to point at those newly created files in the `.html` files
* Pushes the contents of the build folder to the gh-pages branch of the current origin (will always be hoodiehq/hood.ie unless you've forked off).
