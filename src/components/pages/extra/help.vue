<template>
  <header>
    <Toolbar></Toolbar>
  </header>
  <main>
    <h1 class="text-center">Learn more about...</h1>
    <div class="accordion">
      <pv-accordion :activeIndex="0">
        <div class="accordion-item">
          <pv-accordion-tab>
            <template #header>
            <span class="flex align-items-center gap-2 w-full">
                <i class="pi pi-users"></i>
                <span class="font-bold white-space-nowrap">Communities</span>
            </span>
            </template>
            <p class="m-0">
              Create communities with the plus icon and fill in the blanks to create a custom community.
              <br/>The community will be displayed in the community tab. You can join a community by clicking on the
              join
              button.
            </p>
          </pv-accordion-tab>
        </div>
        <div class="accordion-item">
          <pv-accordion-tab>
            <template #header>
            <span class="flex align-items-center gap-2 w-full">
                <i class="pi pi-bolt"></i>
                <span class="font-bold white-space-nowrap">Activities</span>
            </span>
            </template>
            <p class="m-0">
              Similar to the community section, you can create activities with the plus icon and fill in the blanks to
              create a custom activity.
              <br/>Just fill all the required fields and your new activity will be displayed in the activity tab.
              You can check the activity details by clicking on the "Details" button.
            </p>
          </pv-accordion-tab>
        </div>
        <div class="accordion-item">
          <pv-accordion-tab>
            <template #header>
            <span class="flex align-items-center gap-2 w-full">
                <i class="pi pi-at"></i>
                <span class="font-bold white-space-nowrap">Accounts</span>
            </span>
            </template>
            <p class="m-0">
              Your account is safely stored in our database. In case you want to edit or delete your account, you can
              contact us directly by email.
            </p>
          </pv-accordion-tab>
        </div>
      </pv-accordion>
    </div>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import Toolbar from "@/components/shared/toolbar.component.vue";
import Footer from "@/components/shared/footer.component.vue";

export default {
  name: "help.component",
  components: {
    Toolbar,
    Footer
  },
}

</script>
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
}

main {
  margin-top: 150px;
  margin-bottom: 80px;
}

.accordion {
  margin: 40px auto;
  width: 30%;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>