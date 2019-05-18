<template>
  <home-landing>
    <welcome-screen />
    <steps-screen />
    <getdocs-screen />
  </home-landing>
</template>
<script>
import HomeLanding from "@/layouts/HomeLanding";
import WelcomeScreen from "@/components/core/Home/WelcomeScreen";
import StepsScreen from "@/components/core/Home/StepsScreen";
import GetdocsScreen from "@/components/core/Home/GetdocsScreen";
export default {
  components: {
    HomeLanding,
    WelcomeScreen,
    StepsScreen,
    GetdocsScreen
  }
};
</script>
