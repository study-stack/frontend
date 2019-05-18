<template>
  <home-landing>
    <welcome-screen />
    <steps-screen />
  </home-landing>
</template>
<script>
import HomeLanding from "@/layouts/HomeLanding";
import WelcomeScreen from "@/components/core/Home/WelcomeScreen";
import StepsScreen from "@/components/core/Home/StepsScreen";
export default {
  components: {
    HomeLanding,
    WelcomeScreen,
    StepsScreen
  }
};
</script>
