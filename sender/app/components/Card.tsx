/** @jsxImportSource @emotion/react */
"use client";
import { Art } from "@/app/types";
import { Image } from "../components/Image";
import { css } from "@emotion/react";

export function ArtCard(art: Art) {
  return (
    <article
      css={css`
        width: 80dvw;
        height: 20dvh;
        display: grid;
        grid-template-columns: 1fr 3fr;
        position: relative;
        box-shadow: 2.7px 5.4px 5.4px hsl(0deg 0% 0% / 0.42);
        border-radius: 10px;
        margin-bottom: 1em;
        @media screen and (max-width: 900px) {
          height: 12dvh;
        }
      `}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <Image art={art} />
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <h2>{art.title}</h2>
      </div>
    </article>
  );
}
