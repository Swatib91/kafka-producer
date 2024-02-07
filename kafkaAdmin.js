import { kafka } from './kafkaClient.js';

// create admin to setup infra like topics, partitions
 var init  = async ()  => {
    const admin = kafka.admin();
    console.log("Admin connecting .....");
    admin.connect();
    console.log("Admin connected !");

    // create topics
    console.log("creating topics rider-update");
    await admin.createTopics({
        topics : [
            {
                topic: "rider-update",
                numPartitions: 2
            }
        ]
    });
    console.log("topics created rider-update !");
    // Disconnect admin
    console.log("Admin disconnecting .....");
    admin.disconnect();
}

init();