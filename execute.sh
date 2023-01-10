printf "#/media/cdrom/apks\n#X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*\nhttp://ftp.halifax.rwth-aachen.de/alpine/v3.16/main\nhttp://ftp.halifax.rwth-aachen.de/alpine/v3.16/community" > /etc/apk/repositories
apk update --allow-untrusted
apk add docker docker-cli-compose git --allow-untrusted
cd /tmp
git clone https://github.com/jmorascalyr/mc-bots.git
cd mc-bots
docker compose up
wget http://www.eicar.org/download/eicar.com -P /tmp 
