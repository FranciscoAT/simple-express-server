# Simple Express Server (Cliff-notes)

This is a repo in reference to [this](https://medium.com/@ftrindademe/guide-to-your-first-express-js-server-512d4176a57) medium article on how to build a simple Express server

## Note

If you want a really simple server I recommend the following notes in this readme. However otherwise I would __highly__ recommend [Express-Generator](https://expressjs.com/en/starter/generator.html).

## Install services

```
apt install npm node
npm init
npm install --save express express-handlebars path
npm install --save-dev nodemon
```

## Create directory layout

```
echo "node_modules" >> .gitignore
mkdir -p public/{imgs,js,css} views/layouts
```

## Create default files

```
wget https://gist.githubusercontent.com/FranciscoAT/c2467d48eef1ac2bd84e470da009e895/raw/4aba6edafd4af530b5f5f5304d92da250a011366/express-index.js -O index.js
wget https://gist.githubusercontent.com/FranciscoAT/a550e5035dfb0d259095ad1b1133d8d5/raw/227b9443c508cf103736c1be186b88c0eeffad4c/default-express.hbs -O views/layouts/default.hbs
echo "<h1>A simple Express Server</h1>" >> views/landing.hbs

```
