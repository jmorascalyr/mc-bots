from node:14-alpine3.16
RUN npm cache clear --force && npm install --prefer-dedupe mineflayer mineflayer-pathfinder mineflayer-pvp unique-names-generator success-motivational-quotes csv
