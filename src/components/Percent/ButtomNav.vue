<template>
    <div class="buttom">
        <div class="nav">
            <div class="ButtomNav__menu">
                <ul class="nav_list">
                    <li class="nav__item">
                        <router-link class="nav__link" to="">
                            <img :src=img.home class="item" alt="">
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="nav__link" to="Percent">
                            <img :src=img.Percent class="item" alt="">
                        </router-link>
                    </li>
                    <li class="nav__item_s">
                        <div class="add" to="">
                            <img src="@/assets/svg/add-bold.svg" class="item_s" alt="">
                        </div>
                    </li>
                    <li class="nav__item">
                        <router-link class="nav__link" to="Notification">
                            <img :src=img.Notification class="item" alt="">
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="nav__link" to="user_Home">
                            <img :src=img.user_Home class="item" alt="">
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ButtomNav',
    data() {
        return {
            img: {
                home: require('@/assets/svg/home.svg'),
                Percent: require('@/assets/svg/Percent.svg'),
                Notification: require('@/assets/svg/Notification.svg'),
                user_Home: require('@/assets/svg/user_Home.svg')

            }
        }
    },
    mounted() {
        let name = this.$route.name
        console.log(name)
        switch (name) {
            case 'home':
                this.img.home = require('@/assets/svg/home' + '_active.svg');
                break
            case 'Percent':
                console.log(123)
                this.img.Percent = require('@/assets/svg/Percent' + '_active.svg');
                break;
            case 'Notification':
                this.img.Notification = require('@/assets/svg/Notification' + '_active.svg');
                break;
            case 'user_Home':
                this.img.user_Home = require('@/assets/svg/user_Home' + '_active.svg');
                break;
            default:
                break;

        }

    }
}
</script>
<style lang="less" scoped>
.buttom {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;

    .nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-inline: .48rem;


        .ButtomNav__menu {
            position: fixed;
            width: 100%;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 4px 20px hsla(207, 24%, 35%, .1);
            transform: bottom .3s;

            .nav_list {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: .80rem;

                .nav__item {
                    height: 2.1rem;
                    display: flex;
                    align-items: center;
                    // margin-left: .1rem;

                    .nav__link {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        row-gap: .08rem;

                        .item {
                            width: .48rem;
                            height: .48rem;
                        }
                    }

                }

                .nav__item_s {
                    width: 1.2rem;
                    height: 2.1rem;
                    display: flex;
                    align-items: flex-start;

                    .add {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        row-gap: .08rem;

                        .item_s {
                            display: flex;
                            align-self: flex-start;
                            width: 1.28rem;
                            height: 1.28rem;
                            border-radius: .8186rem;
                            background: #928fff;
                        }
                    }

                }


            }
        }

    }
}
</style>