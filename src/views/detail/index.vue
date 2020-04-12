<template>
    <div style="background: #e2e2e2">
        <!-- 头部标题 -->
        <van-nav-bar
            title="商品详情"
            left-text="返回"
            right-text="购物车"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
        <section>
            <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </section>
        <!-- 商品详情内容 -->
        <section class="detail-cont">
            <p class="price">￥3888</p>
            <p class="title">APPLE/苹果11， 6.1寸银灰色，256G苹果8，最新款免运费（保佑）</p>
            <p class="botm">
                <van-row gutter="20">
                    <van-col span="8">
                        <van-icon name="like-o" /> 推荐1111
                    </van-col>
                    <van-col span="8">
                        <van-icon name="gift-o" /> 送给TA
                    </van-col>
                    <van-col span="8">
                        <van-icon name="friends-o" /> 帮我选
                    </van-col>
                </van-row>
            </p>
        </section>
        <section class="detail-cont">
            <p class="cont"><span>7天无理由退货 · 运费险</span><van-icon name="arrow" size="40px" /></p>
            <p class="cont"><span>请选择 机身颜色，套餐类型，存储容量</span><van-icon name="arrow" size="40px" /></p>
        </section>
        <!-- 选择商品型号 -->

        <!-- 底部 -->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
            <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
            <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
        </van-goods-action>
    </div>
</template>

<script>
    export default {
          data() {
            return {
                show: false,
                goodsId: '',
                sku: {
                    // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                    // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                    tree: [
                        {
                        k: '颜色', // skuKeyName：规格类目名称
                        v: [
                            {
                            id: '30349', // skuValueId：规格值 id
                            name: '红色', // skuValueName：规格值名称
                            imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                            previewImgUrl: 'https://img.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
                            },
                            {
                            id: '1215',
                            name: '蓝色',
                            imgUrl: 'https://img.yzcdn.cn/2.jpg',
                            previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
                            }
                        ],
                        k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        }
                    ],
                    // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                    list: [
                        {
                            id: 2259, // skuId，下单时后端需要
                            price: 100, // 价格（单位分）
                            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
                            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                            stock_num: 110 // 当前 sku 组合对应的库存
                        }
                    ],
                    price: '1.00', // 默认价格（单位元）
                    stock_num: 227, // 商品总库存
                    collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                    none_sku: false, // 是否无规格商品
                    messages: [
                        {
                        // 商品留言
                        datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                        multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                        name: '留言', // 留言名称
                        type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                        required: '1', // 是否必填 '1' 表示必填
                        placeholder: '' // 可选值，占位文本
                        }
                    ],
                    hide_stock: false // 是否隐藏剩余库存
                },
                goods: {
                    // 默认商品 sku 缩略图
                    picture: 'https://img.yzcdn.cn/1.jpg'
                },
                messageConfig: {
                    // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
                    uploadImg: () => {
                        return new Promise((resolve) => {
                        setTimeout(() => resolve('https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
                        });
                    },
                    // 最大上传体积 (MB)
                    uploadMaxSize: 3,
                    // placeholder 配置
                    placeholderMap: {
                        text: 'xxx',
                        tel: 'xxx',
                    },
                    // 初始留言信息
                    // 键：留言 name
                    // 值：留言内容
                    initialMessages: {
                        留言: '留言信息'
                    }
                }
            };
        },
        methods: {
            onAddCartClicked() {
                alert('add')
            },
            onBuyClicked() {
                alert('buy')
            },
            onClickIcon () {

            },
            onClickButton () {

            },
            onClickLeft () {
                this.$router.go(-1)
            },
            onClickRight () {

            }
        }
    }
</script>

<style lang="less" scoped>
.detail-cont {
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 10px;
    background: #fff;
    .botm {
        padding: 10px 0 0;
        margin: 0;
    }
    .price {
        font-size: 18px;
        padding: 0;
        margin: 0;
        font-weight: 600;
        color: #f00;
    }
    .title {
        font-size: 14px;
        padding: 0;
        margin: 0;
        font-weight: 600;
    }
    .cont {
        height: 40px;
        line-height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
    }
    .van-col {
        text-align: center;
    }
}
.van-image {
    display: block;
}
</style>