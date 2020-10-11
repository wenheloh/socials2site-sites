<template>
  <div id="contact-us" class="divContactUs">
    <div class="divContactUsGrid">
      <div>
        <select name="salutation" required>
          <option value="" selected disabled>Salutation</option>
          <option value="Mr.">Mr.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Ms.">Ms.</option>
        </select>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="email" placeholder="Email" required />
      </div>
      <div>
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea
          style="height: 100%"
          type="text"
          name="message"
          placeholder="Message"
          required
        ></textarea>
      </div>
    </div>
    <v-btn :loading="loading" @click="loading = true">Submit</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ContactUsComponent extends Vue {
  private loading: boolean = false;
}
</script>
