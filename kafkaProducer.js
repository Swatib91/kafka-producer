import { kafka } from './kafkaClient.js';
var init = async () => {
    const producer = kafka.producer();
    console.log("Connecting Producer .... ");
    await producer.connect(); 
    console.log("Producer Connected !");
    await producer.send({
        topic: 'rider-update',
        messages: [
            {
                partition: 0,
                key: 'rider-data', 
                value: JSON.stringify({ name: "Swati Bhaip",
                        fromLocation: "al karama",
                        toLocation: "al nhada 1",
                        restaurantName: "Spice Affair",
                        deliveryStatus: true })
            }
        ]
    });
    producer.disconnect();
};
init();