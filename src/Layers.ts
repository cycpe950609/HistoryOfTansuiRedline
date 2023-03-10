import L from "leaflet";
import MetroLayer from "./data/MetroInfo";
import RailwayLayer from "./data/RailwayInfo";
import StationLayer from "./stationLayer";
import VillageLayersGroup , { VillageLayer }  from "./villageLayer";
import village1915Data from "./data/village1915.geojson";
import village2022Data from "./data/village2022.geojson";
import { Population1915, Population1997 } from "./data/Population";


export const baseMaps = {
    現代底圖: L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }),
    明治堡圖: L.tileLayer(
        "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM20K_1904-jpg-{z}-{x}-{y}",
        {
            maxZoom: 19,
            attribution:
                '&copy; <a href="https://gis.sinica.edu.tw/tileserver/wmts">中央研究院臺灣百年歷史地圖 WMTS 服務</a>'
        }
    )
};

export const overlayMaps = {
    堡庄分界: new VillageLayer(village1915Data,Population1915,"#6d6d6d","#8f8f8f",false),
    // L.tileLayer(
    //     "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=Admin_1901c-png-{z}-{x}-{y}",
    //     {
    //         maxZoom: 19,
    //         attribution:
    //             '&copy; <a href="https://gis.sinica.edu.tw/tileserver/wmts">中央研究院臺灣百年歷史地圖 WMTS 服務</a>'
    //     }
    // ),

    村里分界:  new VillageLayer(village2022Data,Population1997,"#6d6d6d","#8f8f8f",false),
    
    // L.geoJSON(village2022Data,{
    //     style:{
    //         color:"#6d6d6d",
    //         opacity:0.5
    //     },
    //         onEachFeature : (feature: GeoJSON.Feature, layer : L.Layer) => { 
    //             if(feature.properties)
    //             {
    //                 layer.bindTooltip(feature.properties["VILLNAME"],{className: "village-labels",permanent:true,direction:"center"});
    //             }
    //         } 
    //     })
    台鐵淡水線: RailwayLayer,
    捷運淡水線: MetroLayer,
    鐵路變化: new StationLayer(),

    // 堡庄1915人口: new VillageLayer(village1915Data,Population1915),
    // 村里1997人口: new VillageLayer(village2022Data,Population1997),

    堡庄1915人口: new VillageLayersGroup(village1915Data,Population1915),
    村里1997人口: new VillageLayersGroup(village2022Data,Population1997),

};
