## Google Cloud Instructions

### Updating the Server.js file
`docker build -t app .` inside C:\Source\iCustomStitch
`docker tag app us-east1-docker.pkg.dev/icustomstitch/icustomstitch/server`
`docker push us-east1-docker.pkg.dev/icustomstitch/icustomstitch/server`

### Updating everything else
Go to google cloud dashboard, open cloud shell
`npm run build`

`gcloud app deploy`

gcloud exists in C:\Users\jason\AppData\Local\Google\Cloud SDK>   