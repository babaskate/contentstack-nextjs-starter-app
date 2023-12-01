import React from 'react';
import {
  FeatureHighlight,
  PageSections,
  RenderScooterProps
} from "../typescript/component";

export default function RenderScooterComponents(props: RenderScooterProps) {
  const { scooterComponent, entryUid, contentTypeUid, locale } = props;

  const {
    hero_banner,
    title,
    page_sections 
  } = scooterComponent;
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
        <div style={{margin: "50px"}}>
            <p>{title}</p>
            <p dangerouslySetInnerHTML={{ __html: hero_banner.description }} />
            {page_sections?.map((section: PageSections, key: number) => {
              if (section.feature_highlights) {
                  return section.feature_highlights.feature_highlight.map((item: FeatureHighlight, key: number) => {
                    return <p key={`feature-highligh-${key}`}>{item.title}</p>
                  })
              }

              if (section.testimonials) {
                return <p key={`testimonials-${key}`}>{section.testimonials.title}</p>
              }
            })}
        </div> 
    </div>
  );
}
