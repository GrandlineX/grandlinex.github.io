const openNew = (
  projectKey: string,
  type: 'github' | 'docs' | 'sonar' | 'npm'
) => {
  let url = '';
  switch (type) {
    case 'sonar':
      url = `https://sonarcloud.io/project/overview?id=GrandlineX_${projectKey}`;
      break;
    case 'github':
      url = `https://github.com/GrandlineX/${projectKey}`;
      break;
    case 'docs':
      url = `https://grandlinex.github.io/${projectKey}`;
      break;
    case 'npm':
      url = `https://www.npmjs.com/package/@grandlinex/${projectKey}`;
      break;
    default:
  }
  window.open(url, '_blank');
};
export default openNew;
