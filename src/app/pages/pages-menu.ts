import { NbMenuItem } from "@nebular/theme";

/* dashboard's language is turkish, therefore titles will also be in turkish.
** to prevent consistency on code, paths are not kept as turkish. 
**/

export const MENU_ITEMS: NbMenuItem[] = [
  // {
  //   title: "Panel",
  //   icon: "home-outline",
  //   link: "/pages/iot-dashboard",
  // },
  // {
  //   title: "Kamera",
  //   icon: "video-outline",
  //   link: "/pages/camera",
  // },
  {
    title: "Yönet",
    group: true,
  },

  {
    title: "Aileler",
    icon: "people-outline",
    children: [
      {
        title: "Aile Listesi",
        link: "/pages/families/family-list",
      },
      {
        title: "Aile Girişi",
        link: "/pages/families/family-adding",
      },
      // {
      //   title: "Saha Hareketleri",
      //   link: "/pages/families/field-activity-list"
      // }
    ],
  },

  // {
  //   title: "Muhasebe",
  //   icon: "file-text-outline",
  //   children: [
  //     {
  //       title: "Hareketler",
  //       link: "/pages/accounting/activity-list",
  //     },
  //     {
  //       title: "Hareket Girişi",
  //       link: "/pages/accounting/activity-adding",
  //     },
  //     {
  //       title: "Hesap Tipleri",
  //       link: "/pages/accounting/account-types",
  //     },
  //   ],
  // },
  // {
  //   title: "Kampanyalar",
  //   icon: "gift-outline",
  //   children: [
  //     {
  //       title: "Kampanya Listesi",
  //       link: "/pages/campaigns/campaign-list",
  //     },
  //     {
  //       title: "Kampanya Girişi",
  //       link: "/pages/campaigns/campaign-adding",
  //     },
  //   ],
  // },
  {
    title: "Üye İşlemleri",
    icon: "edit-2-outline",
    children: [
      {
        title: "Üye Listesi",
        link: "/pages/members/member-list",
      },
    ],
  },
  // {
  //   title: "Envanter",
  //   icon: "archive-outline",
  //   children: [
  //     {
  //       title: "Envanter Listesi",
  //       link: "/pages/inventory/inventory-list",
  //     },
  //     {
  //       title: "Stok Girişi",
  //       link: "/pages/inventory/stash-adding",
  //     },
  //     {
  //       title: "Stok Hareketleri",
  //       link: "/pages/inventory/stash-change-request-list",
  //     }
  //   ],
  // },

  // {
  //   title: "İhtiyaçlar",
  //   icon: "shopping-cart-outline",
  //   children: [
  //     {
  //       title: "İhtiyaç Listesi",
  //       link: "/pages/needs/need-list",
  //     },
  //     {
  //       title: "İhtiyaç Girişi",
  //       link: "/pages/needs/need-adding",
  //     },
  //     {
  //       title: "İhtiyaç Hareketleri",
  //       link: "/pages/needs/need-request-list",
  //     }
  //   ],
  // },


  // {
  //   title: "Karar Defteri",
  //   icon: "checkmark-circle-outline",
  //   children: [
  //     {
  //       title: "Yeni Karar Girişi",
  //       link: "/pages/karar-defteri/yeni-karar-girisi",
  //     },
  //     {
  //       title: "Karar Listesi",
  //       link: "/pages/karar-defteri/karar-listesi",
  //     },
  //   ],
  // },

  {
    title: "Hesap",
    icon: "lock-outline",
    children: [
      {
        title: "Çıkış",
        link: "/auth/logout",
      },
    ],
  },
];
