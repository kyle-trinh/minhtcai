import { Helmet } from 'react-helmet-async';
import { profileImage } from '../assets';

export default function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={profileImage} />
      <meta property='og:url' content='https://minhtcai.github.io/' />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={profileImage} />
      {/* End Twitter tags */}
      <meta name='robots' content='index, follow' />
    </Helmet>
  );
}
