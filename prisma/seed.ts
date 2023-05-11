const {PrismaClient} = require("@prisma/client");
import {faker} from "@faker-js/faker";

async function seedFakerUserWithComments() {
    const email = faker.internet.email();
    const title = faker.lorem.words(3);

    const userInDB = await prisma.user.upsert({
        where: {email: email},
        update: {},
        create: {
            email: email,
            name: faker.name.firstName(),
            image: faker.image.avatar(),
            posts: {
                create: {
                    title: title,
                    content: faker.lorem.lines(2),
                    city: "Bogota",
                    neighborhood: "La estrada",
                    comments: {
                        create: [
                            {
                                content: faker.lorem.lines(2),
                                author: {connect: {email: email}},
                            },
                            {
                                content: faker.lorem.lines(2),
                                author: {connect: {email: email}},
                            },
                            {
                                content: faker.lorem.lines(2),
                                author: {connect: {email: email}},
                            },
                        ],
                    },
                },
            },
        },
    });
    console.log({alice: userInDB});
}

const prisma = new PrismaClient();

async function main() {
    for (var i = 0; i < 10; i++) {
        await seedFakerUserWithComments();
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
