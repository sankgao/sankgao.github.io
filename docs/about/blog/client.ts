import { defineClientConfig } from "@vuepress/client";
import { setupRunningTimeFooter } from "./components/footerRunningTime.ts";

export default defineClientConfig({
  setup() {
    setupRunningTimeFooter(
      new Date("2023-04-13"),
      {
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
        "/en/": "Running time: :day days :hour hours :minute minutes :second seconds",
      },
      true
    );
  },
});
