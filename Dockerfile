FROM node:18-alpine

# create work directory in app folder
WORKDIR /app

# install required packages for node image
# RUN apk --no-cache add openssh g++ make python3 git

# copy over package.json files
COPY package.json /app/
COPY yarn.lock /app/

# install all depencies
RUN yarn install 

# copy over all files to the work directory
ADD . /app

# build the project
RUN yarn build

# expose the host and port 3000 to the server
EXPOSE 3000

# run the build project with node
ENTRYPOINT ["node", ".output/server/index.mjs"]