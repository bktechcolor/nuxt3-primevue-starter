export function useNavigationMenu() {
  const separator = h('hr')

  const menu = computed(() => {
    return [
      {
        href: '/',
        title: 'Home',
        icon: 'pi pi-fw pi-home',
      },
      {
        component: markRaw(separator),
      },
      {
        title: 'PrimeVue',
        icon: 'pi pi-prime',
        child: [
          { href: '/admin/prime/datatable', title: 'DataTable' },
          { href: '/admin/prime/messages', title: 'Messages' },
        ],
      },
      {
        title: 'Forms',
        icon: 'pi pi-check-square',
        child: [
          { href: '/admin/form', title: 'Basic' },
          { href: '/admin/form/toggle', title: 'Edit / View' },
        ],
      },
      {
        title: 'UI',
        icon: 'pi pi-image',
        child: [
          { href: '/admin/ui/uno', title: 'UnoCSS' },
          { href: '/admin/ui/icons', title: 'Icons' },
          { href: '/admin/ui/tiptap', title: 'TipTap' },
        ],
      },
      {
        title: 'Data',
        icon: 'pi pi-server',
        child: [
          { href: '/admin/data/stores', title: 'Stores' },
          { href: '/admin/data/i18n', title: 'Localization' },
          { href: '/admin/data/server', title: 'Server' },
        ],
      },
      {
        title: 'Content',
        icon: 'pi pi-book',
        child: [
          { href: '/admin/cms/markdown', title: 'Markdown' },
          { href: '/admin/cms/component', title: 'Component' },
        ],
      },

    ]
  })

  return { menu }
}
