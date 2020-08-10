<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Your Orders
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      :breakpoint="400"
    >
      <q-scroll-area
        style="height: calc(100% - 150px); margin-top: 150px; border-right: 0px solid #ddd"
        class="bg-primary"
      >
        <q-list>
          <q-item clickable v-ripple style="margin-top:50%">
            <q-item-section avatar style="color:white">
              <q-icon name="add_box" />
            </q-item-section>

            <q-item-section style="color:white">
              New order
            </q-item-section>
          </q-item>

          <q-item active clickable v-ripple style="margin-top:50%">
            <q-item-section avatar style="color:white">
              <q-icon name="library_books" />
            </q-item-section>

            <q-item-section style="color:white">
              Library
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple style="margin-top:50%">
            <q-item-section avatar style="color:white">
              <q-icon name="power_settings_new" />
            </q-item-section>

            <q-item-section style="color:white">
              Logout
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="bg-primary absolute-top" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Seu nome</div>
          <div>Seu E-mail</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  }
};
</script>
