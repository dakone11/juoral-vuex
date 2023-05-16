export default {
  name: "daybook",
  component: () =>
    import(
      /* webpackChunkName: "about" */ "@/modules/daybook/layouts/DaybookLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/modules/daybook/views/NoEntrySelected"
        ),
    },
    {
      path: ":id",
      name: "entry",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/modules/daybook/views/EntryView.vue"
        ),
    },
  ],
};
