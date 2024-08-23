import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "fd3tziy7",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
  token:
    "skhBpbbwsmn16igrhDyBmHEoU9DoZkQxIZKLFxWzzTfSiWNxTsC2IcR7AkPVQQIkHD8eAXUHpTDUWaXZTlOubZa9z3h7yjsF1ZIrE1EGsVEItauKfKXkCfuHLrjimqLNltSO5mb1ypViOo5Xuc4F9AIZPGs9RBFXlNh8yEtvn00yend64Mpy",
});
