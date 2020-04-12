import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Image, Lazyload, Form, Field, Button, 
  Search, Swipe, SwipeItem, Grid, GridItem, Toast, NavBar, List, Overlay, Loading, 
  GoodsAction, GoodsActionButton, GoodsActionIcon, Sku, Col, Row, Icon } from 'vant';

import 'lib-flexible'
import './common/permission.js'

Vue.use(Image);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(List);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Sku);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Overlay);
Vue.use(Loading);
Vue.use(Lazyload, {
  lazyComponent: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
