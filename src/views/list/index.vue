<template>
    <div>
        <van-nav-bar
            title="商品列表"
            left-text="返回"
            right-text="购物车"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <van-grid :column-num="2" icon-size=220>
                 <van-grid-item @click="$router.push({path: '/detail'})" v-for="(value, index) in productList" :key="index" text="文字">
                    <van-image :src="value.imgUrl" />
                    <p>{{value.name}}</p>
                </van-grid-item>
            </van-grid>
        </van-list>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                productList: []
            };
        },
        created () {
            this.$store.dispatch('product/getProductList').then(() => {
                this.productList = this.$store.state.product.productList;
            })
        },
        methods: {
            onLoad() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                if(this.productList.length < 40) {
                    this.$store.dispatch('product/getProductList').then(() => {
                        this.loading = false;
                        this.productList = this.$store.state.product.productList;
                    })
                }else{
                    this.finished = true;
                }
            },
            onClickLeft() {
                this.$router.go(-1)
            },
            onClickRight() {
                this.$toast('按钮');
            }
        }
    }
</script>

<style lang="less" scoped>

</style>