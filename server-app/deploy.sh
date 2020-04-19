#!/bin/bash

# verify that the required Cloud Foundry variables are set
invocation_error=0

# - APP_NAME: Name of the application
if [ -z ${APP_NAME+x} ]; then echo 'Error: Environment variable APP_NAME is undefined.'; invocation_error=1; fi
# - CF_KEY: IBM Cloud API key
if [ -z ${CF_KEY+x} ]; then echo 'Error: Environment variable CF_KEY is undefined.'; invocation_error=1; fi
# - CF_ORG: IBM Cloud/Cloud Foundry organization name
if [ -z ${CF_ORG+x} ]; then echo 'Error: Environment variable CF_ORG is undefined.'; invocation_error=1; fi
# - CF_SPACE: IBM Cloud/Cloud Foundry space name
if [ -z ${CF_SPACE+x} ]; then echo 'Error: Environment variable CF_SPACE is undefined.'; invocation_error=1; fi
# - CLOUDANT_ID: IBM Cloudant ID
if [ -z ${CLOUDANT_ID+x} ]; then echo 'Error: Environment variable CLOUDANT_ID is undefined.'; invocation_error=1; fi
# - CLOUDANT_IAM_APIKEY: IBM Cloudant API key
if [ -z ${CLOUDANT_IAM_APIKEY+x} ]; then echo 'Error: Environment variable CLOUDANT_IAM_APIKEY is undefined.'; invocation_error=1; fi

# set optional Cloud Foundry variables if they are not set
# - CF_API: IBM Cloud API endpoint (default to US-South region)
if [ -z ${CF_API+x} ]; then export CF_API='https://api.ng.bluemix.net'; fi

# Messanger and Facebook
if [ -z ${PAGE_ID+x} ]; then echo 'Error: Environment variable PAGE_ID is undefined.'; invocation_error=1; fi
if [ -z ${APP_ID+x} ]; then echo 'Error: Environment variable APP_ID is undefined.'; invocation_error=1; fi
if [ -z ${PAGE_ACCESS_TOKEN+x} ]; then echo 'Error: Environment variable PAGE_ACCESS_TOKEN is undefined.'; invocation_error=1; fi
if [ -z ${APP_SECRET+x} ]; then echo 'Error: Environment variable APP_SECRET is undefined.'; invocation_error=1; fi
if [ -z ${VERIFY_TOKEN+x} ]; then echo 'Error: Environment variable APP_NAME is undefined.'; invocation_error=1; fi

if [ ${invocation_error} -eq 1 ]; then echo 'Something went wrong, check for previous errors.'; exit 1; fi

# login and set target
./Bluemix_CLI/bin/bluemix config --check-version false
./Bluemix_CLI/bin/bluemix api $CF_API
./Bluemix_CLI/bin/bluemix login --apikey $CF_KEY
./Bluemix_CLI/bin/bluemix target -o $CF_ORG -s $CF_SPACE

./Bluemix_CLI/bin/bluemix cf push --no-start

./Bluemix_CLI/bin/bluemix cf set-env $APP_NAME CLOUDANT_ID $CLOUDANT_ID
./Bluemix_CLI/bin/bluemix cf set-env $APP_NAME CLOUDANT_IAM_APIKEY $CLOUDANT_IAM_APIKEY
./Bluemix_CLI/bin/bluemix cf set-env $APP_NAME PAGE_ID $PAGE_ID
./Bluemix_CLI/bin/bluemix cf set-env $APP_NAME APP_ID $APP_ID
./Bluemix_CLI/bin/bluemix cf set-env $APP_NAME PAGE_ACCESS_TOKEN $PAGE_ACCESS_TOKEN
./Bluemix_CLI/bin/bluemix cf set-env $APP_NAME APP_SECRET $APP_SECRET
./Bluemix_CLI/bin/bluemix cf set-env $APP_NAME VERIFY_TOKEN $VERIFY_TOKEN

./Bluemix_CLI/bin/bluemix cf start $APP_NAME