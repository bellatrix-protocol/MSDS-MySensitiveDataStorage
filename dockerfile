FROM node:16-alpine AS development
ENV NODE_ENV development

RUN apk add --no-cache git

# Add a work directory
WORKDIR /MSDS-MySensitiveDataStorage

# # Cache and Install dependencies
COPY package.json .
ENV PATH /MSDS-MySensitiveDataStorage/node_modules/.bin:$PATH

RUN yarn install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# start the app
CMD [ "yarn", "start" ]