export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6262223e9e43521a114e8fee',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cmiif8in',
                  apiId: 'b16bf0b4-f0d3-4c02-a14a-9a0bd9e7371a'
                },
                {
                  buildHookId: '6262223e8fce8e154e9d2504',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-a8v86ye7',
                  apiId: 'f08e30dc-8847-4c70-97e1-baa657f2b2f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Iqbaltz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-a8v86ye7.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
