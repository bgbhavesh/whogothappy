home=/opt/
apphome=/root/sixteensmiles/
meteorhome=/root/sixteensmiles/
appname="sixteensmiles"
bundlename="sixteensmiles.tar.gz"
hostmeteor="sixteensmiles.meteor.com"
####################

ROOT_URL='http://128.199.196.222:8000'
MONGO_URL='mongodb://localhost:27017/sixteensmiles'

MONGO_OPLOG_URL='mongodb://bookmark:123456@paulo.mongohq.com:10017/local?authSource=WORDdance'
MAIL_URL='smtp://postmaster%40sandbox77539.mailgun.org:2l9s4cmzqic2@smtp.mailgun.org:587'
PORT=8000

###'mongodb://bookmark:123456@paulo.mongohq.com:10017/youtap'  
###################

cd $apphome


git fetch --all
git reset --hard origin/master

cd $meteorhome

#rm -rf $home$appname
mkdir -p $home$appname

meteor remove-platform android
meteor remove-platform ios
meteor build $home$appname/bundle #--server http://128.199.196.222:8000
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

export MONGO_URL=$MONGO_URL
export ROOT_URL=$ROOT_URL
export MAIL_URL=$MAIL_URL
export PORT=$PORT
export METEOR_ENV="production"

mv ./main.js ./$appname.js

pm2 start $appname.js

cd $meteorhome
meteor deploy $hostmeteor

exit
