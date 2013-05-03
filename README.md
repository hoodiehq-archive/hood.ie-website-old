hood.ie
=======

This is the Hoodie website. It is built with yeoman 1.0.0-beta.4

Workflow
--------

On branch master:
````
$ git pull
$ grunt server
// do your thing
$ grunt
$ git add .
$ git commit -m "message"
$ git push
// delete the remote gh-pages branch, because pulling it is painful, pointless and, in fact, usually impossible
$ git push origin --delete gh-pages
// push the "/dist" directory to the "gh-pages" branch
$ git subtree push --prefix dist origin gh-pages
// done
````

I combine those last two in an alias called *deployDistToPages* for convenience.

Important
---------

**Please don't work directly in the gh-pages branch**

- Master contains the whole dev environment. Please always stay in master.
- The "gh-pages" branch is for deployment only and only contains the "/dist" directory.

Subtree/dist deployment taken from here: https://github.com/yeoman/yeoman/wiki/Deployment
