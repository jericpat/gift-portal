import { ResourceEditor } from 'giftpub'

export default function Publisher({ lfs, organisationId, datasetId }) {

  const config = {
    datasetId: datasetId,
    api: 'http://127.0.0.1:5000',
    lfs: lfs,
    authToken: 'be270cae-1c77-4853-b8c1-30b6cf5e9228',
    organisationId: organisationId,
    resourceId: '',
  }
  // eslint-disable-next-line react/react-in-jsx-scope
  return <ResourceEditor config={config} resource="" />
}

Publisher.getInitialProps = async (ctx) => {
  return {
    lfs: process.env.GIFTLESS_SERVER,
    organisationId: process.env.ORGANISATION_REPO,
    datasetId: ctx.query.id,
  }
}