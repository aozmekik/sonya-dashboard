import { NbMenuItem } from "@nebular/theme";

// dashboard's language is turkish, therefore titles will also be in turkish.
// to prevent complications, paths are also kept in turkish.

export const MENU_ITEMS: NbMenuItem[] = [
  // TODO. consider integrating. cameras.
  {
    title: "Panel",
    icon: "home-outline",
    link: "/pages/iot-dashboard",
  },
  {
    title: "Yönet",
    group: true,
  },
  {
    title: "Muhasebe",
    icon: "layout-outline",
    children: [
      {
        title: "Hareketler",
        link: "/pages/accounting/activity-list",
      },
      {
        title: "Hareket Girişi",
        link: "/pages/accounting/activity-adding",
      },
      {
        title: "Hesap Tipleri",
        link: "/pages/accounting/account-types",
      },
    ],
  },
  {
    title: "Kampanyalar",
    icon: "layout-outline",
    children: [
      {
        title: "Kampanya Listesi",
        link: "/pages/campaigns/campaign-list",
      },
      {
        title: "Kampanya Girişi",
        link: "/pages/campaigns/campaign-adding",
      },
    ],
  },
  {
    title: "Üye İşlemleri",
    icon: "edit-2-outline",
    children: [
      {
        title: "Üye Listesi",
        link: "/pages/members/member-list",
      },

      {
        title: "Üye Girişi",
        link: "/pages/members/member-adding",
      },
      {
        title: "Gruplar",
        link: "/pages/members/member-groups",
      },
      {
        title: "Raporlar",
        link: "/pages/members/member-reports",
      },
    ],
  },
  {
    title: "Envanter",
    icon: "layout-outline",
    children: [
      {
        title: "Envanter Listesi",
        link: "/pages/inventory/inventory-list",
      },
      {
        title: "Stok Girişi",
        link: "/pages/inventory/stash-adding",
      },
    ],
  },

  {
    title: "Karar Defteri",
    icon: "layout-outline",
    children: [
      {
        title: "Yeni Karar Girişi",
        link: "/pages/karar-defteri/yeni-karar-girisi",
      },
      {
        title: "Karar Listesi",
        link: "/pages/karar-defteri/karar-listesi",
      },
    ],
  },

  {
    title: "Dernek Bilgileri",
    icon: "layout-outline",
    link: "/pages/dernek-bilgileri",
  },
  {
    title: "Hesap",
    icon: "lock-outline",
    children: [
      {
        title: "Profil",
        link: "/hesap/profil",
      },
      {
        title: "Şifre Değiştir",
        link: "/hesap/sifre-degistir",
      },
    ],
  },
];
