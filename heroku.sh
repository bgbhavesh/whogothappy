##### DEPLOY VARIABLES #######
HEROKU_APP='tapmate'
ROOT_URL='https://'$HEROKU_APP'.herokuapp.com/'
MONGO_URL='mongodb://tapmate:tapmate@ds027779.mongolab.com:27779/tapmate'
MONGO_OPLOG_URL='mongodb://tapmate:tapmate@ds027779.mongolab.com:27779/tapmate'
MAIL_URL='smtp://postmaster%40sandbox77539.mailgun.org:2l9s4cmzqic2@smtp.mailgun.org:587'
METEOR_SETTINGS=$(cat ./settings.json)
nodeVersion="0.10.36" ## not all node version works with some meteor version

##### PUT HASH IF YOU DON"T WANT SOME ENV VAR #######
runSript="cd ./programs/server &&
npm install &&
cd ../../ &&
export MONGO_URL='"$MONGO_URL"' &&
export ROOT_URL='"$ROOT_URL"' &&
export MAIL_URL='"$MAIL_URL"' &&
export METEOR_SETTINGS='"$METEOR_SETTINGS"' &&
node ./main.js"


##### DON'T LOOK HERE IT'S ALL MY DOING #######
rm -rf ./.meteor/local/heroku
meteor build ./.meteor/local/heroku --server $ROOT_URL
dirName=${PWD##*/}

cd ./.meteor/local/heroku/
tar -xvzf $dirName.tar.gz
cd bundle



echo $runSript > ./run.sh

packageText='{
  "name": "'$HEROKU_APP'",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "sh ./run.sh"
  },
  "dependencies": {
  },
  "engines": {
    "node": "'$nodeVersion'"
  }
}'

echo $packageText > ./package.json

appText='{
  "name": "'$HEROKU_APP'",
  "description": "Trinisoft Technologies Pvt. Ltd. Official app.",
  "repository": "https://git.heroku.com/"'$HEROKU_APP',
  "keywords": ["node", "express", "trinisoft"],
  "image": "heroku/nodejs"
}'

echo $appText > ./app.json

git init
git remote add heroku https://git.heroku.com/$HEROKU_APP.git
git add -A
git commit -m "init"
git push heroku master --force

echo "Deploy complete"
echo "Sleeping for 5s and checking log"
sleep 5s
heroku logs

echo "Hurray check your app "$ROOT_URL" here"