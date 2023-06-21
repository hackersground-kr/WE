import { useEffect } from "react";
import styled from "styled-components";
import Header from "../../../Layout/Header";

const { kakao } = window;

function KakaoMap() {
  useEffect(() => {
    const mapscript = () => {
      let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

      navigator.geolocation.getCurrentPosition(
        (position) => {
          let { latitude, longitude } = position.coords;

          let options = {
            //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표. 현재 위치로 설정됩니다.
            level: 3, //지도의 레벨(확대, 축소 정도)
          };
          const map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

          const markerData = [
            {
              title: "place1",
              lat: latitude + 0.001,
              lng: longitude + 0.001,
            },
            {
              title: "place2",
              lat: latitude + 0.0025,
              lng: longitude + 0.0025,
            },
            {
              title: "place3",
              lat: latitude - 0.0001,
              lng: longitude - 0.0001,
            },
            {
              title: "place4",
              lat: latitude - 0.0005,
              lng: longitude - 0.0005,
            },
            {
              title: "place5",
              lat: latitude - 0.0025,
              lng: longitude - 0.0025,
            },
          ];

          markerData.forEach((el) => {
            // marker 생성
            new kakao.maps.Marker({
              map: map,
              position: new kakao.maps.LatLng(el.lat, el.lng),
              title: el.title,
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
