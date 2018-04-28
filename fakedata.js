const faker = require('faker');
const db = require('./db.js');

{
    id: 0,
    createdAt: "2018-04-10T13:16:31.413Z",
    updates: [{
        title: String,
        body: String,
        date: Date,
        likes: Number,
        comments: [{
            userId: Number,
            avatar: String,
            username: String,
            date: Date,
            body: String,
        }],
    }],
        comments: []
    }


var commentsArray = [];
//faker to create fake comments (51 comments)
for (var i = 0; i < 51; i++) {
    var fakeComment = {
        userId: faker.random.number(),
        avatar: faker.image.avatar(),
        username: faker.internet.userName(),
        date: faker.date.recent(),
        body: faker.random.words(),
    }
    commentsArray.push(fakeComment);
}
//sort comment dates by time (newest first)
const sortComments = () => {
    
}
//insert into object
//hardcode updates

{
    "id": 0,
    "createdAt" : "2018-01-19T13:16:31.413Z",
    "updates" : [{
            "_id": ObjectId("5ade9d416ce0284ad88d8026"),
            "title": "Garden Brand Games",
                "body": "Itaque ut at ab accusantium suscipit. Magni tempore id et quisquam itaque beatae quibusdam deleniti qui. Aliquid dolor sint voluptatem dolore. Labore voluptas suscipit est tempora recusandae animi sint nam. Sunt eum quasi ipsum consequatur quis. Ut doloribus perspiciatis nihil aspernatur ratione.\n \rModi sed saepe et sed velit laboriosam. Vero modi inventore in ex fugiat eaque accusamus. Rerum unde molestias voluptatem quae mollitia perspiciatis quasi natus et. Culpa in tempora laboriosam neque tempora vel deserunt sint.\n \rQuaerat ut cupiditate asperiores nostrum vero. Ducimus nostrum rerum est et sed. Est ut est quas et hic iure perspiciatis non quod. Tempore molestias accusamus a. Et accusamus eius qui illo soluta culpa molestias. Cumque ipsa facere.",
                "date": ISODate("2018-01-05T10:02:51.899Z"),
                "likes": 43808,
                "comments": [
                    {
                        "_id": ObjectId("5ade9d416ce0284ad88d8028"),
                        "userId": 8765,
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/perfectflow/128.jpg",
                        "username": "Laila55",
                        "date": ISODate("2018-04-23T07:02:40.983Z"),
                        "body": "Consectetur facilis unde magnam quasi libero ipsam."
                    },
                    {
                        "_id": ObjectId("5ade9d416ce0284ad88d8027"),
                        "userId": 58679,
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kaysix_dizzy/128.jpg",
                        "username": "Luther26",
                        "date": ISODate("2018-04-23T11:30:18.853Z"),
                        "body": "Praesentium voluptatem ipsam et soluta reprehenderit error."
                    }
                ]
                    },
                    {
                        "_id": ObjectId("5ade9d416ce0284ad88d8023"),
                        "title": "Savings Account",
                        "body": "Eos qui porro velit. Itaque a illum est ea rerum voluptatem et autem at. Enim illum similique expedita atque consequatur. Ea facilis quas cum ad maiores voluptas omnis et. Accusantium molestias sit dolorem dolores.\n \rEum omnis ea expedita quis enim. Et error sequi sit unde et. Laborum quisquam aut libero.\n \rNisi veniam voluptas dicta iure quia. Quo dignissimos exercitationem ea aut tenetur voluptatibus mollitia quod. Ut odio ut est. Officia illo debitis alias deleniti sit ducimus a. Doloremque ducimus qui autem. Dolorem veritatis similique qui dignissimos voluptas id sint.",
                        "date": ISODate("2017-11-15T17:09:09.479Z"),
                        "likes": 41304,
                        "comments": [
                            {
                                "_id": ObjectId("5ade9d416ce0284ad88d8025"),
                                "userId": 86605,
                                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kianoshp/128.jpg",
                                "username": "Walker18",
                                "date": ISODate("2018-04-23T11:58:06.390Z"),
                                "body": "Eaque quis rem sunt vel."
                            },
                            {
                                "_id": ObjectId("5ade9d416ce0284ad88d8024"),
                                "userId": 38031,
                                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrxloka/128.jpg",
                                "username": "Ivah.Jerde",
                                "date": ISODate("2018-04-23T16:28:28.867Z"),
                                "body": "Voluptates iusto non quibusdam similique."
                            }
                        ]
                    },
                    {
                        "_id": ObjectId("5ade9d416ce0284ad88d8020"),
                        "title": "indexing program Interactions",
                        "body": "Consequuntur laudantium nisi saepe voluptatem accusamus. Mollitia consequatur laudantium voluptatum. Facere similique vitae. Distinctio deserunt qui fugit quos eum quibusdam eos asperiores. Aliquam sit dicta.\n \rUt error aut. Nihil dolorem eveniet aut a cum sunt sint iste. Quo nemo ex accusantium harum explicabo quae sit expedita doloribus.\n \rQuas distinctio est est aut nulla possimus illo hic ut. Ut eum rerum excepturi ipsam dignissimos rem nam quibusdam. Facilis accusamus suscipit exercitationem qui esse cum. Magnam illo dolores a reiciendis recusandae voluptate. Enim dolores error voluptatum doloremque totam ipsam ut quod. Ratione debitis aut in provident.",
                        "date": ISODate("2017-12-19T11:18:01.957Z"),
                        "likes": 64635,
                        "comments": [
                            {
                                "_id": ObjectId("5ade9d416ce0284ad88d8022"),
                                "userId": 72561,
                                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/herbigt/128.jpg",
                                "username": "Filiberto_Runte",
                                "date": ISODate("2018-04-23T05:39:11.937Z"),
                                "body": "Assumenda eum fugit similique eveniet."
                            },
                            {
                                "_id": ObjectId("5ade9d416ce0284ad88d8021"),
                                "userId": 8457,
                                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/Skyhartman/128.jpg",
                                "username": "Elza.Muller60",
                                "date": ISODate("2018-04-23T20:58:46.385Z"),
                                "body": "Perspiciatis nisi aut."
                            }
                        ]
                    }
                ],
                    "comments" : [
                        {
                            "_id": ObjectId("5ade9d416ce0284ad88d802b"),
                            "userId": 60441,
                            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/felipecsl/128.jpg",
                            "username": "Margarita.Huels68",
                            "date": ISODate("2018-04-24T01:15:44.634Z"),
                            "body": "Frozen generate"
                        },
                        {
                            "_id": ObjectId("5ade9d416ce0284ad88d802a"),
                            "userId": 65437,
                            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/magoo04/128.jpg",
                            "username": "Aurelie_Bernier44",
                            "date": ISODate("2018-04-23T03:44:30.211Z"),
                            "body": "Cotton Home Practical"
                        },
                        {
                            "_id": ObjectId("5ade9d416ce0284ad88d8029"),
                            "userId": 95745,
                            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/cboller1/128.jpg",
                            "username": "Koby38",
                            "date": ISODate("2018-04-23T05:58:12.110Z"),
                            "body": "intranet"
                        }
                    ],
                        "__v" : 0
}