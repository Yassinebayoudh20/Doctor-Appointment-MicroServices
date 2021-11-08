FROM java:8
EXPOSE 8086
ADD /target/gestion-ordonnance-1.0.jar ordonnance-service
ENTRYPOINT ["java","-jar","ordonnance-service","-web -webAllowOthers -tcp -tcpAllowOthers -browser"]