hood.ie
=======

This is the [Hoodie](http://hood.ie) website. It is built with yeoman 1.0.0-beta.4

Workflow
--------

The workflow has changed completely:

There is now only a gh-pages branch. In that, there is `/build`, do all your work and run grunt from there.

To deploy:

  1. From inside `/build` copy `/dist` back to root: `cp -r dist/* ../`
  2. Push

In short:

````
cd build
grunt build
cp -r dist/* ../
git add ..
git commit -m "…"
git push
````

Jekyll then serves the index.html in root at hood.ie
