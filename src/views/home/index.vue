<template>
    <div>
        <van-search 
            v-model="value"
            placeholder="请输入搜索关键词"
            @search="onSearch"
            show-action
            shape="round"
            background="#4fc08d">
            <template #action>
                <div @click="$router.push({path: 'login'})" style="color: #fff;">{{rightMsg}}</div>
            </template>    
        </van-search>
        <van-swipe :loop='false' class="my-swipe" >
            <van-swipe-item v-for="(banner, index) in bannerList" :key="index">
                <img v-lazy="banner.imgUrl" />
            </van-swipe-item>
        </van-swipe>
        <h2 class="module-title">模块一</h2>
        <van-grid icon-size="200">
            <!-- <van-grid-item :icon="value.imgUrl"  :text="value.name" /> -->
            <van-grid-item
                v-for="(value,index) in module1"
                @click="$router.push({path: '/detail'})"
                :key="index" :icon="value.imgUrl" :text="value.name">
                <!-- <van-image lazy-load :src="value.imgUrl" />
                <p>{{value.name}}</p> -->
            </van-grid-item>
        </van-grid>
        <h2 class="module-title">模块二</h2>
        <van-grid icon-size="220px" :column-num="3">
            <van-grid-item
                v-for="(value,index) in module2"
                @click="$router.push({path: '/detail'})"
                :key="index" :icon="value.imgUrl" :text="value.name">
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                value: '',
                rightMsg: this.$store.state.user.userInfo.name || '登录',
                bannerList: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],
                module1: [],
                module2: [],
            }
        },
        created () {
            this.$store.dispatch('product/getPageInfo').then(() => {
                this.bannerList = this.$store.state.product.bannerList;
                this.module1 = this.$store.state.product.module1;
                this.module2 = this.$store.state.product.module2;
            })
        },
        methods: {
            onSearch(val) {
                this.$router.push({path: '/list'})
            },
            goDetail() {
                this.$router.push({path: '/detail'})
            }
        }
    }
</script>

<style lang="less">
.my-swipe {
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
    img{
        width: 100%;
        height: 100%;
    }
    .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
}
.module-title {
    margin: 0;
    padding: 10px;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
    text-align: left;
}
</style>