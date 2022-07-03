# Documentation

## Technologies
- npx
- Nestjs
- Angular
- Postgres

## Deployment

The entire application (shop, api and database) has been deployed to heroku.
Can be accesed with the follwing urls:

### http://www.hire-me-albert.ninja/  (http)
### https://hire-me-shield.herokuapp.com/  (https)

## Extra Features
- CICD pipeline
- Ant Design for Angular
- Typeorm
- Jest

## Local setup

**Prerequisites**
- NodeJs version 14 or higher
- Docker

**Steps:**
1. Git clone
2. navigate to 'cd hire-me-full-stack-developer' and run 'docker compose up' (Docker needs to be open)
3. navigate to 'cd project' and run 'npm install'
4. navigate to 'cd apps/api/' and create '.env' file with the following data:
    - DB_HOST=localhost
    - DB_PORT=5432
    - DB_USERNAME=postgres
    - DB_PASSWORD=root
    - DB_DATABASE=postgres

**Start application:**
- dev:
    'npm run dev'
- production:
    'npm start'

**Notable scripts:**
- 'npm test' to run all unit tests
- 'npm build' to build application into dist folder

**Api Routes**
- /api/product (get)
- /api/product (post)
- /api/product/:id (get)
- /api/cart (get)
- /api/cart (post)
- /api/cart (delete)
- /api/cart/:id (delete)


## Final Note

Despite a busy week, I managed to find time here and there and work on this. With that in mind I am somewhat satisfied with the work I put into this project, even if there are many things that could be improved and revised. In the end it was a zero to hero adventure for me considering my intial knowledge of Angular and NestJs. It was a fun learning experience.
