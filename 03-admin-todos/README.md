# Development
Stept to start running the development app

* 1.- Getting the database up and running
```
docker compose up -d
```

* 2.- Create a copy of .env.template and rename the .env.template to .env

* 3.- Replace the environment variables

* 4.- Excecute ``` npm install ```

* 5.- Excecute ``` npm run dev ```

* 6.- Excecute these prisma commands:
```
npx prisma migrate dev
npx prisma generate
```

* 7.- Excecute SEED to [create the database](localhost:3000/api/seed)

# Prisma commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```