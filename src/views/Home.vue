<template>
  <home-landing>
    <welcome-screen />
    <steps-screen />
    <getdocs-screen />
    <rates-screen />
  </home-landing>
</template>
<script>
import HomeLanding from "@/layouts/HomeLanding";
import WelcomeScreen from "@/components/core/Home/WelcomeScreen";
import StepsScreen from "@/components/core/Home/StepsScreen";
import GetdocsScreen from "@/components/core/Home/GetdocsScreen";
import RatesScreen from "@/components/core/Home/RatesScreen";
export default {
  components: {
    HomeLanding,
    WelcomeScreen,
    StepsScreen,
    GetdocsScreen,
    RatesScreen
  }
};
</script>
