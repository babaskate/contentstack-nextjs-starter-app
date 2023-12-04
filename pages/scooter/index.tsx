import React, { useState, useEffect } from 'react';
import { onEntryChange } from '../../contentstack-sdk';
import RenderScooterComponents from '../../components/render-scooter-components';
import { getScooterRes } from '../../helper';
import Skeleton from 'react-loading-skeleton';
import { ScooterProps, Context } from "../../typescript/pages";

export default function Scooter(props: ScooterProps) {

  const { page, entryUrl } = props;

  const [getEntry, setEntry] = useState(page);

  async function fetchData() {
    try {
      const entryRes = await getScooterRes(entryUrl);
      if (!entryRes) throw new Error('Status code 404');
      setEntry(entryRes);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, [page]);

  return getEntry ? (
    <RenderScooterComponents
      scooterComponent={getEntry}
      contentTypeUid="scooter_page"
      entryUid={getEntry.uid}
      locale={getEntry.locale}
      />
  ) : (
    <Skeleton count={3} height={400} />
  );
}

export async function getServerSideProps(context: Context) {
  try {
    const entryRes = await getScooterRes(context.resolvedUrl);
    return {
      props: {
        entryUrl: context.resolvedUrl,
        page: entryRes,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
