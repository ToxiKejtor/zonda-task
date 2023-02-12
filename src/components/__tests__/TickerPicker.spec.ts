import { test, vi, expect, beforeAll } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import TickerPicker from "@/components/TickerPicker.vue";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({ components, directives });
import { defineComponent } from "vue";

const TestComponent = defineComponent({
  components: { TickerPicker },
  template: "<Suspense><TickerPicker/></Suspense>",
});

const wrapper = mount(TestComponent, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn,
      }),
      vuetify,
    ],
  },
});

test("is visible", async () => {
  expect(wrapper.isVisible()).toBeTruthy();
});

test("has default value", async () => {
  expect(wrapper.text()).toContain("BTC-PLN");
});
