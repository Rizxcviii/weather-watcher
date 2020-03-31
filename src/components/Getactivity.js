export default function Getactivity(weathertype, currenttemp) {
    console.log("FUFWIHFQOWHF ", weathertype, " ", currenttemp)

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
                    maxTemp: 4,
                    activity: "going for a jog",
                    image:'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1488012853000/photosp/af7ddf1c-c71c-430f-bf8e-3027d0fd4c8c/stock-photo-bed-watching-coffee-modern-latte-wide-laptop-cozy-neutral-af7ddf1c-c71c-430f-bf8e-3027d0fd4c8c.jpg',
                    short: 'park',
                },
                {
                    minTemp: 5,
                    maxTemp: 18,
                    activity:"doing something with your life",
                    image:'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190923103050-underscored-coding-bundle-course.jpg',
                    short: 'cemetery',
                },
                {
                    minTemp: 18,
                    maxTemp: 999,
                    activity:"playing indoor badminton",
                    image:'https://www.tabletenniscoach.me.uk/wp-content/uploads/2018/10/badminton-racket.jpg',
                    short: 'badminton',
                }
            ],
        },
        {
            weather: 'Rain',
            activities: [
                {
                    minTemp: -10,
                    maxTemp: 4,
                    activity:"watching some Netflix",
                    image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/young-woman-jogging-through-the-fall-park-rear-shot-royalty-free-image-700592770-1538491624.jpg',
                    short: 'cinema',
                },
                {
                    minTemp: 5,
                    maxTemp: 18,
                    activity:"cooking something new",
                    image:'https://janeskitchenmiracles.com/wp-content/uploads/2017/02/Depositphotos_13461823_m-2015.jpg',
                    short: 'restaurants',
                },
                {
                    minTemp: 18,
                    maxTemp: 999,
                    activity:"exploring your city",
                    image:'https://www.traveldudes.org/sites/default/files/styles/image_node_main/public/exploringanewcity.jpg',
                    short: 'museums',
                }
            ],
        },
        {
            weather: 'Clear',
            activities: [
                {
                    minTemp: -999,
                    maxTemp: 5,
                    activity:"playing football",
                    image:'https://dc-mp7static.mlsdigital.net/images/08_29_2018_AudiField_XD_02_DSC01388.jpg?LLN.49ZLIIoa_6WcEZijiLI9Cf.Q.rwf',
                    short: 'football+pitch'
                },
                {
                    minTemp: 5,
                    maxTemp: 12,
                    activity:"going for a swim",
                    image:'https://www.thesun.co.uk/wp-content/uploads/2018/09/NINTCHDBPICT000435207229.jpg',
                    short: 'swimming+pool'
                },
                {
                    minTemp: 13,
                    maxTemp: 999,
                    activity:"getting some ice cream",
                    image:'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555926096/shape/mentalfloss/ice-cream-truck-history.png?itok=xclPtbUT',
                    short: 'ice+cream',
                }
            ]
        }
    ]

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
        return {activity: "I DON'T KNOW", image: ''};
    }

    // if (weathertype === 'Clouds') {
    //     if (currenttemp >= -10 && currenttemp <= 4){
    //         return {activity:"Cloud drawing", image:'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1488012853000/photosp/af7ddf1c-c71c-430f-bf8e-3027d0fd4c8c/stock-photo-bed-watching-coffee-modern-latte-wide-laptop-cozy-neutral-af7ddf1c-c71c-430f-bf8e-3027d0fd4c8c.jpg'}
    //     }
    //     else if (currenttemp >= 5 && currenttemp <= 18 ){
    //         return {activity:"Coding", image:'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190923103050-underscored-coding-bundle-course.jpg'}
    //     }
    //     else if (currenttemp > 18){
    //         return {activity:"Badminton", image:'https://www.tabletenniscoach.me.uk/wp-content/uploads/2018/10/badminton-racket.jpg'}
    //     }
    //     else{
    //         return {activity:"null", image:'null'}
    //     }
    // }
    // else if(weathertype === 'Sun'){
    //     if (currenttemp >= -10 && currenttemp <= 4){
    //         return {activity:"Jogging", image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/young-woman-jogging-through-the-fall-park-rear-shot-royalty-free-image-700592770-1538491624.jpg'}
    //     }
    //     else if (currenttemp >= 5 && currenttemp <= 18 ){
    //         return {activity:"football", image:'https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg'}
    //     }
    //     else if (currenttemp > 18){
    //         return {activity:"exploring your city", image:'https://www.traveldudes.org/sites/default/files/styles/image_node_main/public/exploringanewcity.jpg'}
    //     }
    //     else{

    //     }
    // }
    // else if(weathertype === 'Rain'){
    //     if (currenttemp <= 4){
    //         return {activity:"Football", image:''}
    //     }
    //     else if (currenttemp >= 5 && currenttemp <= 12 ){
    //         return {activity:"reading a book", image:'https://imgs.classicfm.com/images/106128?width=6000&crop=16_9&signature=VfJeSnw8tEetODPBnZzZVhE3lIU='}
    //     }
    //     else if (currenttemp >= 13){
    //         return {activity:"Football", image:''}
    //     }
    //     else{
    //         return {activity:"Procastinating", image:''}
    //     }
    // }
    // else {
    //     return {activity:"I DON'T KNOW", image:''}
    // }
}