# To enable ssh & remote debugging on app service change the base image to the one below
# FROM mcr.microsoft.com/azure-functions/node:3.0-appservice
FROM mcr.microsoft.com/azure-functions/node:3.0

ENV AzureWebJobsScriptRoot=/code \
    AzureFunctionsJobHost__Logging__Console__IsEnabled=true

COPY . /code

WORKDIR /code

RUN npm install -g @nestjs/cli

RUN cd /code && \
    npm install && \
    npm run build
