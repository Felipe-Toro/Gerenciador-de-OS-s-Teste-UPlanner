<template>
  <div>
    <div
      class="text-black text-center"
      style="font-size:4em; flex flex-center; padding-top:0.5em;"
    >
      Service Order
    </div>
    <div>
      <div class="q-pa-md" style="width: 20%; display: inline; text-center">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <span style="width: 20%; display: inline-block">
            <q-input filled v-model="nome" label="Nome" />
          </span>
          <span style="width: 20%; display: inline-block">
            <q-input filled v-model="telefone" label="Telefone" />
          </span>
          <span style="width: 20%; display: inline-block">
            <q-input filled v-model="endereco" label="Enedereço" />
          </span>
          <span style="width: 20%; display: inline-block">
            <q-input filled v-model="email" label="E-mail" />
          </span>

          <div style="padding-top: 30%; margin-left: 50%">
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nome: null,
      telefone: null,
      endereco: null,
      email: null
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
    },

    onReset() {
      this.nome = null;
      this.telefone = null;
      this.endereco = null;
      this.email = null;
    }
  }
};
</script>

<style></style>
