Docker build .
Docker build -t image-name .                         //Make a build of an dockerfile
Docker image rm image-id / image-name
Docker rmi image-id / image-name
Dockert rm container-id / container-name
docker image ls                                       // command to find all docker images in system
docker images											// command to find all docker images in system
docker exec -it container-name bash //inside container
docker ps //start docker container
docker ps -a //all dockert container with disabled
docker rm container-name -f
docker -v ${pwd}:/app -p 3000:3000 -d container-name image-name //for windows
docker -v $(pwd):/app -p 3000:3000 -d container-name image-name //for mac

nodemon -L index.js //package.json file

docker pull ritikparikh/hello-docker
docker run hello-docker
docker run ubuntu   //pull and run ubuntu on docker
docker ps           // runnung instance
docker ps -a		// all docker processs(instances) including stooped also
docker run -it ubuntu // (it is intractive)   to run continuslly it open ubuntu shell promt
docker container rm -f $(docker container  ls -aq) //all container will remove frm this
docker image rm -f $(docker image  ls -q) //all image remove from this
 