FROM java:8
EXPOSE 9002
ADD /target/user-auth-service-0.0.1-SNAPSHOT.jar auth-service.jar
ENTRYPOINT ["java","-jar","auth-service.jar","-web -webAllowOthers -tcp -tcpAllowOthers -browser"]