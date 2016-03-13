FROM node:4.4.0
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]
