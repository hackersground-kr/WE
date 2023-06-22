import { useEffect } from "react";
import styled from "styled-components";
import Header from "../../../Layout/Header";

function KakaoMap() {
  useEffect(() => {
    const mapscript = () => {
      let container = document.getElementById("map");

      navigator.geolocation.getCurrentPosition(
        (position) => {
          let { latitude, longitude } = position.coords;

          let options = {
            center: new kakao.maps.LatLng(latitude, longitude),
            level: 4,
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
              lat: latitude - 0.005,
              lng: longitude - 0.005,
            },
            {
              title: "통기타 연주 클래스",
              lat: latitude - 0.003,
              lng: longitude - 0.003,
            },
          ];
          const imageSrc = "/logo.png";
          const imageSize = new kakao.maps.Size(64, 69);
          const imageOption = { offset: new kakao.maps.Point(27, 69) };

          overlayData.forEach((data) => {
            const { title, lat, lng } = data;

            const markerImage = new kakao.maps.MarkerImage(
              imageSrc,
              imageSize,
              imageOption
            );
            const markerPosition = new kakao.maps.LatLng(lat, lng);

            const marker = new kakao.maps.Marker({
              position: markerPosition,
              image: markerImage,
            });

            marker.setMap(map);

            const content = `
              <div style="padding: 5px 10px; border-radius:20%; margin-top:20px">
                <a href="https://map.kakao.com/link/map/11394059"style="text-decoration:none;color:rgb(88, 61, 48);font-weight:800" target="_blank">
                  <span class="title" >${title}</span>
                </a>
              </div>
            `;

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
      <div
        id="map"
        style={{
          width: "1000px",
          height: "1000px",
        }}
      ></div>
    </>
  );
}

export default KakaoMap;
