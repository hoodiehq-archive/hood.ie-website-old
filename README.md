hood.ie
=======

This is the Hoodie website. 

Note: 
-----

**Please don't work directly in the gh-pages branch**

- Master is the whole dev environment. Update normally with `$ git push`
- gh-pages is for deployment only and only contanins the /dist directory. Deploy to pages with `$ git subtree push --prefix dist origin gh-pages`
- If this fails completely, just delete the gh-pages branch in github (https://github.com/hoodiehq/hood.ie/branches) and then run the subtree command again

You can just stay on master the whole time.

Subtree/dist deployment from here: https://github.com/yeoman/yeoman/wiki/Deployment
