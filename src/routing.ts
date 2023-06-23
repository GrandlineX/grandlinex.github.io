import { useCallback, useState } from 'react';
import { usePathQueryMap } from '@grandlinex/react-components';

export enum Page {
  'App' = 'app',
  'Packages' = 'packages',
}

export function setPageUrl(page?: Page) {
  const { title } = document;
  let newPath = window.location.origin;

  if (page && page !== Page.App) {
    newPath += `?page=${page}`;
  }
  if (window.history.replaceState) {
    // prevents browser from storing history with each change:
    window.history.replaceState({ pageTitle: title }, title, newPath);
  } else {
    window.history.pushState({ pageTitle: title }, title, newPath);
  }
}

export type RoutingFunction = (page?: Page) => void;
export default function useRoutingHook(): {
  page: Page;
  setPage: RoutingFunction;
} {
  const q = usePathQueryMap();
  const [page, setPage] = useState<Page>((q.get('page') as Page) ?? Page.App);

  const sPage = useCallback(
    (p?: Page) => {
      setPage(p ?? Page.App);
      setPageUrl(p);
    },
    [page, setPage]
  );

  return {
    page,
    setPage: sPage,
  };
}
