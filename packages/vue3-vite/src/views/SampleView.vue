<template>
  <div class="sample">
    <v-container>
      <v-row>
        <h1>This is sample page</h1>
      </v-row>
      <v-row>
        <v-col cols="6"> abcde </v-col>
        <v-col cols="6"> uvxyz </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .sample {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
