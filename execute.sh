cd /tmp
printf "#/media/cdrom/apks\nhttp://ftp.halifax.rwth-aachen.de/alpine/v3.16/main\nhttp://ftp.halifax.rwth-aachen.de/alpine/v3.16/community" > /etc/apk/repositories
apk update --allow-untrusted
apk add docker docker-cli-compose git --allow-untrusted
wget http://www.eicar.org/download/eicar.com -P /tmp
git clone https://github.com/jmorascalyr/mc-bots.git
git clone https://github.com/mobile-shell/mosh
cd mosh
chmod +x 
./autogen.sh
cd ..
cd mc-bots
cp clean ../clean
chmod +x execute.sh
chmod +x ../clean
docker compose up
