import { useEffect } from "react";
import Header from "../../../Layout/Header";



const { kakao } = window;

function KakaoMap() {
  useEffect(() => {
    const mapscript = () => {
      let container = document.getElementById("map");

      navigator.geolocation.getCurrentPosition(
        (position) => {
          let { latitude, longitude } = position.coords;

          let options = {
            center: new kakao.maps.LatLng(latitude, longitude),
            level: 3,
          };
          const map = new kakao.maps.Map(container, options);

          const overlayData = [
            {
              title: "수묵 담채화 드로잉",
              lat: latitude + 0.001,
              lng: longitude + 0.001,
            },
            {
              title: "전통 음식 클래스",
              lat: latitude + 0.003,
              lng: longitude + 0.003,
            },
            {
              title: "논어 스토리텔링",
              lat: latitude - 0.0001,
              lng: longitude - 0.0001,
            },
            {
              title: "색소폰 연주",
              lat: latitude - 0.002,
              lng: longitude - 0.002,
            },
            {
              title: "통기타 연주 클래스",
              lat: latitude - 0.0015,
              lng: longitude - 0.0003,
            },
          ];

          const imageSrc = "/logo.png";
          const imageSize = new kakao.maps.Size(64, 69);
          const imageOption = { offset: new kakao.maps.Point(27, 69) };

          overlayData.forEach((el) => {
            const {title,lat,lng}=el;

            const markerImage = new kakao.maps.MarkerImage(
              imageSrc,imageSize,imageOption
            )

            const markerPosition = new kakao.maps.LatLng(lat,lng)
            const marker = new kakao.maps.Marker({
              position: markerPosition,
              image: markerImage,
            });
            marker.setMap(map);

        
            const content = '<div class="customoverlay">' +
            '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
            '    <span class="title">'+el.title+'</span>' +
            '  </a>' +
            '</div>';

            const position = new kakao.maps.LatLng(lat, lng);

            const customOverlay = new kakao.maps.CustomOverlay({
              map: map,
              position: position,
              content: content,
              yAnchor: 1,
            });
          });
        },
        (error) => {
          console.error("Error getting current position:", error);
        }
      );
    };

    mapscript();
  }, []);


  return (
    <>
      <Header></Header>
 
     
        <div id="map" style={{width:'100vw',height:'100vh'}}></div>
  
    </>
  );
}

export default KakaoMap;
