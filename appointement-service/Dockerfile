FROM java:8
EXPOSE 9003
ADD /target/appointement-service-0.0.1-SNAPSHOT.jar appointement-service
ENTRYPOINT ["java","-jar","appointement-service","-web -webAllowOthers -tcp -tcpAllowOthers -browser"]