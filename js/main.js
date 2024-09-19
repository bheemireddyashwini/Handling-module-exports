import { init } from "./init.js";

// Initialize the elements

import { day, month, year, output } from "./elements.js";

import { checkValid } from "./updater.js";
import { update } from "./updater.js";
checkValid();
update();
init();
