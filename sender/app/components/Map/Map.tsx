/** @jsxImportSource @emotion/react */
"use client";
import { Art } from "@/app/types";
import { css } from "@emotion/react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import Popup from "./Popup";
import { streetArtFont } from "../streetArtFont";

export function Map() {
  const [arts, setArts] = useState<Art[]>([]);
  useEffect(() => {
    async function getArts() {
      //@ts-ignore
      const fetchedArts = (await (await fetch("/api/arts")).json()).data;
      setArts(fetchedArts);
    }
    getArts();
  }, []);
  if (arts.length === 0)
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <h1 className={streetArtFont.className}>Laster inn</h1>
      </main>
    );
  return (
    <div
      css={css`
        width: 100dvw;
        height: 100dvh;
      `}
    >
      <MapContainer
        center={[59.792746, 5.730127]}
        zoom={13}
        css={css`
          height: 100%;
          min-height: 100%;
        `}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {arts.map((art) => (
          <Popup {...art} key={art.title} />
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
