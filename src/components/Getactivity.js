export default function Getactivity(weathertype, currenttemp) {
    // console.log("FUFWIHFQOWHF ", weathertype, " ", currenttemp)

    /*
    weatherActivities DS split into 2 elements per array object;
        weather --> the weather type,
        activities --> an array containing;
            minTemp,
            maxTemp,
            activity,
            image
    */

    let weatherActivities = [
        {
            weather: 'Clouds',
            activities: [
                {
                    minTemp: -10,
                    maxTemp: 5,
                    activity: "Let's go for a jog!",
                    image:'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1488012853000/photosp/af7ddf1c-c71c-430f-bf8e-3027d0fd4c8c/stock-photo-bed-watching-coffee-modern-latte-wide-laptop-cozy-neutral-af7ddf1c-c71c-430f-bf8e-3027d0fd4c8c.jpg',
                    short: 'park',
                },
                {
                    minTemp: 5,
                    maxTemp: 9,
                    activity:"Let's get to work and do some coding!",
                    image:'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190923103050-underscored-coding-bundle-course.jpg',
                    short: 'library',
                },
                {
                    minTemp: 9,
                    maxTemp: 14,
                    activity:"Cloudy, but we can squeeze in a golf match!",
                    image:'https://upload.wikimedia.org/wikipedia/commons/6/6e/Golfer_swing.jpg',
                    short: 'golf',
                },
                {
                    minTemp: 14,
                    maxTemp: 999,
                    activity:"Let's play some indoor badminton!",
                    image:'https://www.tabletenniscoach.me.uk/wp-content/uploads/2018/10/badminton-racket.jpg',
                    short: "leisure+center",
                }
            ],
        },
        {
            weather: 'Rain',
            activities: [
                {
                    minTemp: -10,
                    maxTemp: 5,
                    activity:"Cozy up and watch some Netflix!",
                    image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/young-woman-jogging-through-the-fall-park-rear-shot-royalty-free-image-700592770-1538491624.jpg',
                    short: 'cinema',
                },
                {
                    minTemp: 5,
                    maxTemp: 11,
                    activity:"Let's make some gains today!",
                    image:'https://lh3.googleusercontent.com/proxy/EUsLOw1-zLLsXe8EG_p50VOuUsjtSrQS61c_YrEtkARfnEO7RBOEFDD7iDtpEShWuHt0A6hnBmXGynHuzMELtSQxGcz2e3_4Q6IP5Zs-xxyOZVSUCfExC4999HMFUSaaHel0bfHP7-YGQnEE0h7IJ_2PdaQhK3jGvr69HzIrpC8',
                    short: 'gym',
                },
                {
                    minTemp: 11,
                    maxTemp: 18,
                    activity:"Try cooking something new!",
                    image:'https://www.homechef.com/assets/cards/fb-aa993535126ad787ae16b17ad7fbd817ecf163f9181757de81a5818f5f686ff2.jpg',
                    short: 'grocery',
                },
                {
                    minTemp: 18,
                    maxTemp: 999,
                    activity:"Let's explore the city today!",
                    image:'https://www.traveldudes.org/sites/default/files/styles/image_node_main/public/exploringanewcity.jpg',
                    short: 'museum',
                }
            ],
        },
        {
            weather: 'Clear',
            activities: [
                {
                    minTemp: -999,
                    maxTemp: 5,
                    activity:"Let's go play football!",
                    image:'https://dc-mp7static.mlsdigital.net/images/08_29_2018_AudiField_XD_02_DSC01388.jpg?LLN.49ZLIIoa_6WcEZijiLI9Cf.Q.rwf',
                    short: 'football+pitch'
                },
                {
                    minTemp: 5,
                    maxTemp: 11,
                    activity:"Basketball sounds fun!",
                    image:'https://cdn.shopify.com/s/files/1/0059/0056/6597/products/photo-id-2005248671813-men-playing-basketball-on-street.jpg?v=1563841133',
                    short: 'basketball+court'
                },
                {
                    minTemp: 11,
                    maxTemp: 18,
                    activity:"How about going for a swim?",
                    image:'https://www.thesun.co.uk/wp-content/uploads/2018/09/NINTCHDBPICT000435207229.jpg',
                    short: 'swimming+pool'
                },
                {
                    minTemp: 18,
                    maxTemp: 999,
                    activity:"Ever tried surfing?",
                    image:'https://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_californiasbestwaves_windansea_st_rf_9313807_1280x640.jpg',
                    short: 'beach',
                }
            ]
        }
    ];

    return function(){
        for (const element of weatherActivities) {
            if (element.weather === weathertype){
                for (const act of element.activities) {
                    if (currenttemp >= act.minTemp && currenttemp <= act.maxTemp) {
                        let activity = act.activity;
                        let image = act.image;
                        let short = act.short;
                        return {
                            activity,
                            image,
                            short,
                        };
                    }
                }
            }
        }
        return {activity: "Oops, I still have no idea about this weather. Maybe try again later!", image: 'activitynotfound.jpg'};
    }

}