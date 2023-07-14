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
                cursor: pointer;
              `}
            >
              <Image art={art} onClick={() => setImageGalleryIsOpen(true)} />
              <FullscreenIcon />
            </div>
            <TextContent {...art} />
          </GridWrapper>
        </Popup>
      </Marker>
      <LightBox
        open={imageGalleryIsOpen}
        setOpen={setImageGalleryIsOpen}
        slides={[
          {
            src: art.image.url,
            blurDataURL: art.image.lqip,
            width: art.image.dimensions.width,
            height: art.image.dimensions.height,
          },
        ]}
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

function FullscreenIcon() {
  return (
    <div
      css={css`
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 0.5em;
        border-radius: 5px;
        line-height: 0;
        pointer-events: none;
      `}
    >
      <svg
        stroke="white"
        fill="white"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
        ></path>
      </svg>
    </div>
  );
}
