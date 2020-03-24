import { NbMenuItem } from '@nebular/theme';

// dashboard's language is turkish, therefore titles will also be in turkish.
// to prevent complications, paths are also kept in turkish.

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Panel',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Yönet',
    group: true,
  },
  {
    title: 'Yevmiye Defteri',
    icon: 'layout-outline',
    children: [
      {
        title: 'Hareketler',
        link: '/pages/accounting/activities',
      },
      {
        title: 'Raporlar',
        link: '/pages/yevmiye-defteri/raporlar',
      },
      {
        title: 'Hesap Tipleri',
        link: '/pages/yevmiye-defteri/hesap-tipleri',
      },
    ],
  },
  {
    title: 'Üye İşlemleri',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Üye Girişi',
        link: '/pages/uye-girisi/uye-girisi',
      },

      {
        title: 'Üye Listesi',
        link: '/pages/uye-girisi/uye-listesi',
      },

      {
        title: 'Gruplar',
        link: '/pages/üye-girisi/gruplar',
      },
      {
        title: 'Raporlar',
        link: '/pages/üye-girisi/raporlar',
      },
    ],
  },
  {
    title: 'Envanter',
    icon: 'layout-outline',
    children: [
      {
        title: 'Envanter Girişi',
        link: '/pages/envanter/envanter-girisi',
      },
      {
        title: 'Envanter Listesi',
        link: '/pages/envanter/envanter-listesi',
      },
    ],
  },

  {
    title: 'Karar Defteri',
    icon: 'layout-outline',
    children: [
      {
        title: 'Yeni Karar Girişi',
        link: '/pages/karar-defteri/yeni-karar-girisi',
      },
      {
        title: 'Karar Listesi',
        link: '/pages/karar-defteri/karar-listesi',
      },
    ],
  },

  {
    title: 'Kampanyalar',
    icon: 'layout-outline',
    children: [
      {
        title: 'Kampanya Girişi',
        link: '/pages/kampanyalar/yeni-kampanya-girisi',
      },
      {
        title: 'Kampanya Listesi',
        link: '/pages/kampanyalar/kampanya-listesi',
      },
    ],
  },
  {
    title: 'Dernek Bilgileri',
    icon: 'layout-outline',
    link: '/pages/dernek-bilgileri',
  },
  {
    title: 'Hesap',
    icon: 'lock-outline',
    children: [
      {
        title: 'Profil',
        link: '/hesap/profil',
      },
      {
        title: 'Şifre Değiştir',
        link: '/hesap/sifre-degistir',
      },
    ],
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Model Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
