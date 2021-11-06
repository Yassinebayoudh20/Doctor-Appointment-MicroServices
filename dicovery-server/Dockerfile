FROM java:8
EXPOSE 9001
ADD /target/dicovery-server-0.0.1-SNAPSHOT.jar discover-server-1.0.jar
ENTRYPOINT ["java","-jar","discover-server-1.0.jar"]