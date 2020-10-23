<template>
  <div class="divContactUs">
    <v-form
      ref="contactUsForm"
      @submit.prevent="onSubmit"
    >
      <v-row>
        <v-col cols="12" sm="6">
          <v-select
            v-model="salutation"
            :items="salutationOptions"
            :rules="[required]"
            label="Salutation"
            outlined
          />
          <v-text-field
            v-model="name"
            label="Name"
            :rules="[required, min(name, 3)]"
            outlined
          />
          <v-text-field
            v-model="email"
            label="Email"
            :rules="[required, isValidEmail]"
            outlined
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="subject"
            label="Subject"
            :rules="[required, max(subject, 30)]"
            outlined
          />
          <v-textarea
            v-model="message"
            label="Message"
            :counter="150"
            :rules="[required, min(message, 3), max(message, 150)]"
            outlined
          />
        </v-col>
      </v-row>
      <v-row>
        <v-btn :loading="loading" type="submit">
          Submit
        </v-btn>
        <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
      </v-row>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component } from "nuxt-property-decorator";
import ValidationUtils from "~/utils/ValidationUtils";

@Component
export default class ContactUsComponent extends ValidationUtils {
  private loading: boolean = false;

  private salutationOptions: string[] = [
    "Mr.", "Mrs.", "Ms."
  ];

  private salutation: string = "";
  private name: string = "";
  private email: string = "";
  private subject: string = "";
  private message: string = "";

  private async onSubmit() {
    this.loading = true;

    if (this.$refs.contactUsForm.validate()) {
      try {
        const token = await this.$recaptcha.getResponse();
        console.log("ReCaptcha token:", token);
        await this.$recaptcha.reset();
      } catch (error) {
        console.log("Login error:", error);
      }
    }

    this.loading = false;
  }

  private onError(error) {
    console.log("Error happened:", error);
  }

  private onSuccess(token) {
    console.log("Succeeded:", token);
    // here you submit the form
    // this.$refs.contactUsForm.submit();  <--- our case should be calling some API to post data?
  }

  private onExpired() {
    console.log("Expired");
  }
}
</script>
