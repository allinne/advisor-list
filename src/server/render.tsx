import ReactDOMServer from 'react-dom/server';

import { fetchAdvisors } from '../api-client';

import App from '../components/App';

const serverRender = async () => {
  const advisors = await fetchAdvisors();

  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={advisors} />,
  );

  return { initialMarkup, initialData: advisors };
};

export default serverRender;
