FROM java:8
EXPOSE 8088
ADD /target/gestion-suivi-1.0.jar suivi-service
ENTRYPOINT ["java","-jar","suivi-service","-web -webAllowOthers -tcp -tcpAllowOthers -browser"]