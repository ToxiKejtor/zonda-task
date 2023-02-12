import { test, vi, expect } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import OrderbookTable from "@/components/OrderbookTable.vue";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({ components, directives });
const wrapper = mount(OrderbookTable, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn,
      }),
      vuetify,
    ],
  },
  props: {
    title: "title",
    book: [
      {
        rate: 11111,
        amount: 3,
        value: 5000,
        offers: 5,
      },
    ],
  },
});

test("is visible", () => {
  expect(wrapper.isVisible()).toBeTruthy();
});

test("receive props", () => {
  expect(wrapper.find("h3").text()).toBe("title");
  expect(wrapper.findAll("tbody tr")).toHaveLength(1);
  expect(wrapper.find("th:nth-child(2)").text()).toContain("BTC");
  expect(wrapper.find("th:nth-child(3)").text()).toContain("PLN");
});
