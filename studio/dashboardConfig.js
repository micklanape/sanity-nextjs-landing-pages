export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e120f86247a8399eace0c56',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mq38e7ce',
                  apiId: '6d52ebed-63e4-41f4-b4ca-67702e68d644'
                },
                {
                  buildHookId: '5e120f872388ffaca0e1bd62',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-c7ia2jzo',
                  apiId: '385b2e6c-ee04-4992-98ea-65f90ed385e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/micklanape/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-c7ia2jzo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
