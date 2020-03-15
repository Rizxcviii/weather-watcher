export default function Getbacktheme(weathertype) {
    if (weathertype==='Clouds'){
        return {backtheme:'https://s3-us-west-2.amazonaws.com/axiomimagesthumbs-or/proxy/original/WA005_102-00003.jpg',}
    }
    else if (weathertype==='Rain'){
        return {backtheme: 'https://i.redd.it/emsyyg2m77ny.png',}
    }
    else if (weathertype==='Sun'){
        return {backtheme: 'https://www.xmple.com/wallpaper/blue-yellow-gradient-linear-1920x1080-c2-ffffe0-00bfff-a-45-f-14.svg',}
    }
    else {
        return {}
    }
}