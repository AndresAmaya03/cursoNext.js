# Development
Stept to start running the development app

* 1.- Getting the database up and running
```
docker compose up -d
```

* 2.- Rename the .env.template to .env

* 3.- Replace the environment variables

* 4.- Excecute SEED to [create the database](localhost:3000/api/seed)

* 4.- Prisma commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```