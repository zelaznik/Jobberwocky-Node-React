var routes = (r) => ([

    {href: '/products',  icon: 'se7en-home',    label:    'Products'},
    {href: '/users',     icon: 'se7en-feed',    label:    '  Users '},
    {href: '/messages',  icon: 'se7en-envelope', label:   ' Messages'},

    r.dropdown({icon: 'se7en-star', label: 'UI Features'}, (r) => [
        {href: '/buttons',     label: 'Buttons'},
        {href: '/fontawesome', label: 'Font Awesome Icons'},
        {href: '/glyphicons',  label: 'Glyphicons'}
    ]),

    r.dropdown({icon: 'se7en-forms', label: 'Forms'}, (r) => [
        {href: '/form-components', label: 'Form Components'},
        {href: '/form-advanced', label: 'Advanced Forms'},
        {href: '/xeditable', label: 'X-Editable'},
        {href: '/file-upload', label: 'Multiple File Upload'},
        {href: '/dropzone-file-upload', label: 'Dropzone File Upload'}
    ]),

    r.dropdown({icon: 'se7en-tables', label: 'Tables'}, (r) => [
        {href: '/tables', label: 'Basic Tables'},
        {href: '/datatables', label: 'DataTables'},
        {href: '/datatables-editable', label: 'Editable Datatables'}
    ]),

    {href: '/charts', icon: 'se7en-charts', label: 'Charts'},

    r.dropdown({icon: 'se7en-pages', label: 'Pages'}, (r) => [
        {href: '/messages', label: 'Messages'},
        {href: '/calendar', label: 'Calendar'},
        {href: '/timeline', label: 'Timeline'},
        {href: '/login', label: 'Login1'},
        {href: '/login', label: 'Login2'},
        {href: '/signup1', label: 'Sign Up 1'},
        {href: '/messages', label: 'Messages/Inbox'},
        {href: '/pricing', label: 'Pricing/Tables'},
        {href: '/signup2', label: 'Sign Up 2'},
        {href: '/404-page', label: '404 Page'},
        {href: '/500-page', label: '500 Page'}
    ]),

    {href: '/gallery', icon: 'se7en-gallery', label: 'Gallery'}

    /* {href: '/feed', icon: 'se7en-feed', label: 'Feed'},
       {href: '/flag', icon: 'se7en-flag', label: 'Flag'},
       {href: '/gear', icon: 'se7en-gear', label: 'Gear'} */
]);

export default routes;
