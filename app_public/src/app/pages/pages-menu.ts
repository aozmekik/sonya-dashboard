import { NbMenuItem } from '@nebular/theme';

// dashboard's language is turkish, therefore titles will also be in turkish.
// to prevent complications, paths are also kept in turkish.

export const MENU_ITEMS: NbMenuItem[] = [ // TODO. consider integrating. cameras.
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
    title: 'Muhasebe',
    icon: 'layout-outline',
    children: [
      {
        title: 'Hareketler',
        link: '/pages/accounting/activity-list',
      },
      {
        title: 'Hareket Girişi',
        link: '/pages/accounting/activity-adding',
      },
      {
        title: 'Hesap Tipleri',
        link: '/pages/accounting/activity-types',
      },
    ],
  },
  {
    title: 'Kampanyalar',
    icon: 'layout-outline',
    children: [
      {
        title: 'Kampanya Listesi',
        link: '/pages/campaigns/campaign-list',
      },
      {
        title: 'Kampanya Girişi',
        link: '/pages/campaigns/campaign-adding',
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
];
