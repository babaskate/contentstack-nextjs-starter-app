import React from 'react';
import { RenderScooterProps } from "../typescript/component";

export default function RenderScooterComponents(props: RenderScooterProps) {
  const { scooterComponent, entryUid, contentTypeUid, locale } = props;

  const {
    hero_banner
  } = scooterComponent;
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
        <div style={{margin: "50px"}} dangerouslySetInnerHTML={{ __html: hero_banner.description }} />
    </div>
  );
}
