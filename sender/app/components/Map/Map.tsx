/** @jsxImportSource @emotion/react */
"use client";
import { Art } from "@/app/types";
import { css } from "@emotion/react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import { Image } from "../Image";
import { PortableText } from "@portabletext/react";

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
  if (arts.length === 0) return <></>;
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
          <Marker
            position={[art.position.lat, art.position.lng]}
            key={art.title}
          >
            <Popup
              maxWidth={1000}
              maxHeight={1000}
              css={css`
                @media screen and (max-width: 900px) {
                  min-width: 85dvw;
                }
              `}
            >
              <div
                css={css`
                  min-width: 30dvw;
                  min-height: 30dvh;
                  display: grid;
                  grid-template-columns: 3fr 3fr;
                  @media screen and (max-width: 900px) {
                    min-width: 85dvw;
                  }
                `}
              >
                <div
                  css={css`
                    position: relative;
                    height: 100%;
                  `}
                >
                  <Image {...art} />
                </div>
                <div
                  css={css`
                    margin-left: 1rem;
                  `}
                >
                  <h2
                    css={css`
                      margin-top: 0;
                    `}
                  >
                    {art.title}
                  </h2>
                  <PortableText value={art.description} />
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
