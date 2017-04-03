Angular / Spring Boot Starter Project
--------------------------------------

This project provides a simple starter for Angular, Spring Boot projects.  Angular is built using the angular-cli.  The Spring Boot backend uses Maven as the build tool.  

**The specific dependencies in the pom.xml file include:**

 - spring-boot-starter-web
 - spring-boot-actuator
 - spring-boot-test
 - spring-boot-devtools
 - lombok (to avoid writing getters and setters)

**Starter project milestones:**

 - Syncs frontend and backend
 - Prefixes all RestControllers with /api/
 - Adds a CORs mapping for localhost:4200 to support Angular2 development mode (for dev-web profile)
 - Provides an Eclipse run configuration that enables the dev-web profile
 - Out of the box, the application will display version info received from the server

**Running the application:**

Option 1:

	// in backend
    mvn spring-boot:run

This is the simplest but slowest way to run the application.  You won't even need node or npm installed (initially) to run the application this way because as part of the build process npm and node are installed. 

Option 2:

	// in frontend
    ng serve
    // in Eclipse IDE
    Eclipse run configuration: main - angular2-spring-boot-starter

Option 2 is preferred during development.  You can work on both the backend and the  frontend and the servers will automatically refresh after you save changes.  This will provide rapid results.

Option 3:

    // in backend
    mvn package
    java -jar target/[jar file name]

If you want to work with the fat jar, you can use option 3.

