import { baseUrl, External } from '../content';

function openNew(projectKey: string, type: External, projectGroup?: string) {
  let url = '';
  switch (type) {
    case External.sonar:
      url = `https://sonarcloud.io/project/overview?id=${
        projectGroup || 'GrandlineX'
      }_${projectKey}`;
      break;
    case External.github:
      url = `https://github.com/${projectGroup || 'GrandlineX'}/${projectKey}`;
      break;
    case External.docs:
      url = `${baseUrl}/${projectKey}`;
      break;
    case External.npm:
      url = `https://www.npmjs.com/package/@${
        projectGroup || 'grandlinex'
      }/${projectKey}`;
      break;
    default:
  }
  return url;
}
export default openNew;
