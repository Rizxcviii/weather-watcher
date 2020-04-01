export default function Getbacktheme(weathertype) {
    if (weathertype==='Clouds'){
        return {backtheme:'https://torange.biz/photofx/180/10/black-white-cloudy-sky-180837.jpg',}
    }
    else if (weathertype==='Rain'){
        return {backtheme: 'https://i.redd.it/emsyyg2m77ny.png',}
    }
    else if (weathertype==='Clear'){
        return {backtheme: 'https://www.xmple.com/wallpaper/gradient-blue-white-linear-1920x1080-c2-87ceeb-f5fffa-a-90-f-14.svg',}
    }
    else {
        return {backtheme: 'https://img1.goodfon.com/original/2560x1440/9/6f/minimalizm-gradient-background.jpg',}
    }
}