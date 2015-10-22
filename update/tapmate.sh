home=/opt/
apphome=/root/nitroustap/
meteorhome=/root/nitroustap/tapmate/
settings=/root/nitroustap/tapmate/youtapsettings.json
appname="tapmate"
bundlename="tapmate.tar.gz"

####################

####################

####################

METEOR_SETTINGS=$(cat $settings)


ROOT_URL='http://128.199.196.222:3000'
MONGO_URL='mongodb://youtap_meteor_com:e969b053-2a77-cc57-c7f7-1df7a849c6bb@production-db-b1.meteor.io,production-db-b2.meteor.io,production-db-b3.meteor.io/youtap_meteor_com?autoReconnect=true'
MONGO_OPLOG_URL='mongodb://youtap_meteor_com:e969b053-2a77-cc57-c7f7-1df7a849c6bb@production-db-b1.meteor.io,production-db-b2.meteor.io,production-db-b3.meteor.io/youtap_meteor_com?autoReconnect=true'
MAIL_URL='smtp://postmaster%40sandbox77539.mailgun.org:2l9s4cmzqic2@smtp.mailgun.org:587'
PORT=3000
###################

cd $apphome


git fetch --all
git reset --hard origin/master

cd $meteorhome

mkdir -p $appname

meteor build --server http://128.199.196.222:3000/ $home$appname/bundle

cd $home$appname/bundle
tar -xvf $bundlename
cd bundle/programs/server
npm install
cd .. 
cd ..
cd ..
pm2 stop $appname

rm -rf $home$appname/app
mkdir -p $home$appname/app

mv bundle/ ../app/

cd $home$appname/app/bundle

mv ./main.js ./$appname.js

export MONGO_URL=$MONGO_URL
export ROOT_URL=$ROOT_URL
export MAIL_URL=$MAIL_URL
export PORT=$PORT
export METEOR_SETTINGS="$METEOR_SETTINGS"
pm2 flush $appname
pm2 start $appname.js

exit
