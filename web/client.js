import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'xb6eb6uk',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2022-01-31',
})

export default client
