import React, { useEffect, useState } from 'react';

type ContentProps = {
  projectKey: string;
};

const RepoVersion: React.FC<ContentProps> = (props) => {
  const { projectKey } = props;
  const [version, setVersion] = useState<string | null | undefined>(undefined);
  useEffect(() => {
    if (version === undefined) {
      (async () => {
        try {
          const res = await fetch(
            `https://api.github.com/repos/GrandlineX/${projectKey}/tags`
          );
          const json = await res.json();

          if (Array.isArray(json) && json.length > 0) {
            console.log(json);
            setVersion(json.find((c) => !c.name.startsWith('v'))?.name || '');
          }
        } catch (e) {
          console.error(e);
          setVersion(null);
        }
      })();
    }
  });
  return (
    <span className="glx-repo--app-verison">{version || 'no version'}</span>
  );
};

export default RepoVersion;
