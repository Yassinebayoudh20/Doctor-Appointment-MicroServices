FROM java:8
EXPOSE 9000
ADD /target/demo-0.0.1-SNAPSHOT.jar zuul-gateway.jar
ENTRYPOINT ["java","-jar","zuul-gateway.jar"]