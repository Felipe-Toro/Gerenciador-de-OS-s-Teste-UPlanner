<template>
  <div class="fullscreen bg-white row">
    <div class="col-5 bg-primary">
      <div
        class="text-white text-center"
        style="font-size:6.25em; flex flex-center; padding-top:2.25em"
      >
        Your<br />
        Orders.
      </div>
      <div class="text-center" style="padding-top:25%">
        <q-btn
          outline
          rounded
          color="white"
          label="Sign in"
          size="30px"
          @click="tab = 'SignUp'"
        />
      </div>
    </div>
    <div class="col bg-white flex flex-center ">
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="SignUp" class="bg-white">
          <div
            class="text-primary text-center"
            style="font-size:50px; padding-top:10%;"
          >
            Hello, Friend!<br />
            Create Account
          </div>
          <div
            class="q-gutter-md"
            style="max-width: 280px; margin-left: 35%; padding-top:10%"
          >
            <q-input v-model="name" dense type="name" label="Name">
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
          </div>
          <div
            class="q-gutter-md"
            style="max-width: 300px; margin-left: 35%; padding-top:2%"
          >
            <q-input v-model="email" label="E-mail">
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
          </div>
          <div
            class="q-gutter-md"
            style="max-width: 300px; margin-left: 35%; padding-top:2%"
          >
            <q-input v-model="password" label="Password">
              <template v-slot:prepend>
                <q-icon name="https" />
              </template>
            </q-input>
          </div>
          <div class="text-center" style="padding-top:12%">
            <q-btn
              @click="signUp()"
              outline
              rounded
              color="primary"
              label="Sign up"
              size="30px"
            />
          </div>
        </q-tab-panel>
        <q-tab-panel name="SignIn" class="bg-white">
          <div
            class="text-primary text-center"
            style="font-size:50px; padding-top:10%;"
          >
            Welcome back!<br />
            Sign In to Your Orders
          </div>
          <div
            class="q-gutter-md"
            style="max-width: 280px; margin-left: 35%; padding-top:10%"
          ></div>
          <div
            class="q-gutter-md"
            style="max-width: 300px; margin-left: 35%; padding-top:2%"
          >
            <q-input v-model="email" label="E-mail">
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
          </div>
          <div
            class="q-gutter-md"
            style="max-width: 300px; margin-left: 35%; padding-top:2%"
          >
            <q-input v-model="password" label="Password">
              <template v-slot:prepend>
                <q-icon name="https" />
              </template>
            </q-input>
          </div>
          <div class="text-center" style="padding-top:12%">
            <q-btn
              @click="signIn()"
              outline
              rounded
              color="primary"
              label="Sign In"
              size="30px"
            />
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: "SignIn",
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      console.log(this.email);
      this.$router.push("/library");
    },
    signUp() {
      console.log(this.email);
      this.$router.push("/library");
    }
  }
};
</script>

<style></style>
