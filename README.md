Angular / Spring Boot Starter Project
--------------------------------------

This project provides a simple starter for Angular, Spring Boot projects.  Out of the box, this starter syncs the frontend and backend and makes a simple REST call to the Spring Boot server.  Angular is built using the angular-cli.  The Spring Boot backend uses Maven as the build tool.  

**The specific dependencies in the pom.xml file include:**

 - spring-boot-starter-web
 - spring-boot-actuator
 - spring-boot-test
 - spring-boot-devtools
 - lombok (If you've never used Lombok before then you will have to register it with Eclipse. Just download then double click the jar!))

**Starter project milestones:**

 - Syncs frontend and backend
 - Prefix development mode api calls with http://localhost:8080 via angular-cli proxy configuration
 - Out of the box, the application will display version info received from the server

**There are several ways to run the application.  I recommend option 2 during development:**

Option 1:

	// in backend
    mvn spring-boot:run

This is the simplest but slowest way to run the application.  You won't even need node or npm installed (initially) to run the application this way because as part of the build process npm and node are installed. 

Option 2:

	// in frontend
    npm start
    // in Eclipse IDE
    Eclipse run configuration: main - angular-spring-boot-starter

This is the preferred way to run the application during development. You can work on both the backend and the frontend and the servers will automatically refresh after you save changes.  This will provide rapid results.

Option 3:

    // in backend
    mvn package
    java -jar target/[jar file name]

If you want to work with the fat jar, you can use option 3.

