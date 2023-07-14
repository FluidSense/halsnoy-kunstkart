/** @jsxImportSource @emotion/react */
"use client";

import { Art } from "@/app/types";
import { css } from "@emotion/react";
import { PortableText } from "@portabletext/react";
import { Marker, Popup } from "react-leaflet";
import { Image } from "../Image";
import { PropsWithChildren, useState } from "react";
import LightBox from "./Lightbox";

export default function ArtPopup(art: Art) {
  const [imageGalleryIsOpen, setImageGalleryIsOpen] = useState(false);
  return (
    <>
      <Marker position={[art.position.lat, art.position.lng]}>
        <Popup
          maxWidth={1000}
          maxHeight={1000}
          css={css`
            max-width: 95dvw;
            @media screen and (max-width: 900px) {
              min-width: 85dvw;
            }
          `}
        >
          <GridWrapper>
            <div
              css={css`
                position: relative;
                height: 100%;
              `}
            >
              <Image art={art} onClick={() => setImageGalleryIsOpen(true)} />
            </div>
            <TextContent {...art} />
          </GridWrapper>
        </Popup>
      </Marker>
      <LightBox
        open={imageGalleryIsOpen}
        setOpen={setImageGalleryIsOpen}
        slides={[{ src: art.image.url }]}
      />
    </>
  );
}

function GridWrapper(props: PropsWithChildren) {
  return (
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
      {props.children}
    </div>
  );
}

function TextContent(art: Art) {
  return (
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
  );
}
