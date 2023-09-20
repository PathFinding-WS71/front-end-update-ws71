import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import { i18n } from "@/locales/i18n";

import "primeflex/primeflex.css";

import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import Password from "primevue/password";
import Card from "primevue/card";
import Ripple from "primevue/ripple";
import ProgressBar from "primevue/progressbar";
import Menubar from "primevue/menubar";
import Panel from "primevue/panel";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import FileUpload from "primevue/fileupload";
import Toast from "primevue/toast";
import Avatar from "primevue/avatar";
import Calendar from "primevue/calendar";
import SplitButton from "primevue/splitbutton";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";
import AutoComplete from "primevue/autocomplete";
import Message from "primevue/message";
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import Tag from "primevue/tag";

const app = createApp(App);

app.use(PrimeVue, {ripple: true});
app.use(router);
app.use(i18n);

app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component("pv-checkbox", Checkbox);
app.component('pv-input-text', InputText);
app.component('pv-input-mask', InputMask);
app.component('pv-password', Password);
app.component('pv-card', Card);
app.component('pv-panel', Panel);
app.component('pv-text-area', Textarea);
app.component('pv-dropdown', Dropdown);
app.component('pv-file-upload', FileUpload);
app.component('pv-toast', Toast);
app.component('pv-progressbar', ProgressBar);
app.component('pv-menubar', Menubar);
app.component('pv-avatar',Avatar);
app.component('pv-calendar', Calendar);
app.component('pv-split-button', SplitButton);
app.component('pv-data-table', DataTable);
app.component('pv-column', Column);
app.component('pv-column-group', ColumnGroup);
app.component('pv-row', Row);
app.component('pv-auto-complete', AutoComplete);
app.component('pv-message', Message);
app.component('pv-data-view', DataView);
app.component('pv-data-view-layout-options', DataViewLayoutOptions);
app.component('pv-tag', Tag);
app.directive('pv-ripple', Ripple);

app.mount('#app');
