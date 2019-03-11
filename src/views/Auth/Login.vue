<template>
  <auth-layout>
    <v-container>
      <div class="c-auth">
        <h2 class="c-auth__title">Вход</h2>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-flex xs12>
            <v-text-field
              label="Username"
              v-model="username"
              :rules="requiredRule"
              outline
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              :rules="requiredRule"
              outline
              required
            ></v-text-field>
          </v-flex>
          <div class="c-auth__controllers">
            <v-flex xs12>
              <v-btn
                color="info"
                class="c-auth__button"
                type="submit"
                @click.prevent="create"
                :disabled="!valid"
                >Войти</v-btn
              >
            </v-flex>
            <v-flex xs12>
              <router-link class="c-auth__link" to="/forgot"
                >Забыли пароль?</router-link
              >
            </v-flex>
          </div>
        </v-form>
      </div>
    </v-container>
  </auth-layout>
</template>
<script>
import AuthLayout from "@/layouts/AuthLayout";
export default {
  components: {
    AuthLayout
  },
  data() {
    return {
      valid: true,
      username: "",
      password: "",
      requiredRule: [v => !!v || "Поле обязательно для заполнения"]
    };
  },
  methods: {
    auth() {
      const valid = this.$refs.form.validate();
      if (!valid) return;
    }
  }
};
</script>
