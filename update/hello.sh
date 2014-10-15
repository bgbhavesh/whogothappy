#Meteor 0.9.4
home=/opt/
apphome=/root/hello/
meteorhome=/root/hello/
appname="hello"
bundlename="hello.tar.gz"

####################

ROOT_URL='http://128.199.196.222:8000'
MONGO_URL='mongodb://oplogUser:123456@cockney.1.mongolayer.com:10032,cockney.0.mongolayer.com:10032/WORDdance'
MONGO_OPLOG_URL='mongodb://oplogUser:123456@cockney.1.mongolayer.com:10032,cockney.0.mongolayer.com:10032/local?authSource=WORDdance'
MAIL_URL='smtp://postmaster%40sandbox77539.mailgun.org:2l9s4cmzqic2@smtp.mailgun.org:587'
PORT=8000
###################

cd $apphome


git fetch --all
git reset --hard origin/master

cd $meteorhome

mkdir -p $appname
meteor build $home$appname/bundle
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

wait-for-mongo $MONGO_URL
wait-for-mongo $MONGO_OPLOG_URL

export MONGO_URL=$MONGO_URL
export ROOT_URL=$ROOT_URL
export MAIL_URL=$MAIL_URL
export MONGO_OPLOG_URL=$MONGO_OPLOG_URL
export PORT=$PORT

node main.js

exit
