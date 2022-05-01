# A simple RestAPI node app to dockerize
This is a small RestAPI node app which will be executed from a docker container. Its uses a free API available on https://randomuser.me/api. Please follow the below steps.

## Requirements
- Install [Nodejs](https://nodejs.org)
- Intsall [Yarn](https://yarnpkg.com/)
- Install [Docker](https://www.docker.com/)

### Steps to run the app on localhost
- Clone this repo
- Install dependencies by running `yarn install`
- Run the app on your localhost by running `yarn dev`
- Now open the browser and enetr `http://localhost:4000/api`. You could use [Postman](https://www.postman.com/) or any other Rest client as well. You should be able to see something like below image as the response.

<img width="706" alt="Screen Shot 2022-05-01 at 7 53 52 pm" src="https://user-images.githubusercontent.com/52057697/166140968-21180fd6-ec41-4e3e-ab46-56df6e995d61.png">

### Steps to run the app on Docker

#### In the repo, there is a `Dockerfile` which has the instructions to create the Docker image. 

- The first line in the file is `FROM node:18-alpine`, which specifies the base image to be the [official Node.js Alpine Linux image](https://hub.docker.com/_/node). Alpine Linux is used here due to its small size, which helps a lot when transporting images from one machine to the other.
- Second line is `WORKDIR /app`, which sets the working directory to `/app`.
- Next lines are to install your application's dependencies: a crucial step for building your Docker image.

  <img width="292" alt="Screen Shot 2022-05-01 at 8 07 19 pm" src="https://user-images.githubusercontent.com/52057697/166141376-8d8f0c7c-fdc2-4b0c-b994-e01d5180fd2e.png">
- Next line `EXPOSE 4000` is to expose the port that the application will run on through, in this case it's port 4000.
- And finally the command `CMD yarn start` to start the application.

#### Docker image
- Now we have all the instructions in `Dockerfile`, we can build the Docker image by running `docker build . -t randomuser`. For more details on building docker images, plesae visit the [documentation](https://docs.docker.com/engine/reference/commandline/build/) on Docker website.
- To see the new Docker image, run the command `docker images`. You should be able to see the image details like the image below.

  <img width="494" alt="Screen Shot 2022-05-01 at 8 50 14 pm" src="https://user-images.githubusercontent.com/52057697/166142733-a6a4d847-5971-48f9-b97b-764d0c671b4e.png">

#### Running Docker Image in a Container
- You can use the command `docker run` to run the image.
- For more details, please visit the official [documentation](https://docs.docker.com/engine/reference/run/) on Docker website.
- To run the Docker image which we have created, please run the command `docker run -p 4000:4000 randomuser`.
- You can open the browser and enter `http://localhost:4000/api` to see that your localhost is being served from the Container.

### Steps to run the app on production with Docker
- You need to have a `docker-compose.yml` file in your repsitory
- For more details please visit https://docs.docker.com/compose/

### Sharing docoker images
- The most popular method to share Docker images are using the `docker push` command to push the image to the official Docker registry and retrieving it through the `docker pull` command.
- You should have a free account at Docker Hub to do that.
- Please visit [Docker Hub](https://hub.docker.com/) to sign up
- Check the documentation available for [`docker push`](https://docs.docker.com/engine/reference/commandline/push/) and [`docker pull`](https://docs.docker.com/compose/reference/pull/)
