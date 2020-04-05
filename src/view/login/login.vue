<template>
  <div class="login">
    <div class="left">
      <div class="title">
        <img src="@/assets/img/logo.png" alt />
        <span class="titleName">黑马面面</span>
        <span class="titleLine">|</span>
        <span class="titleName2">用户登录</span>
      </div>
    </div>
    <div class="right">
      <img src="@/assets/img/login_banner_ele.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

 <style lang="less">
.login {
  display: flex;
  // 主轴布局
  justify-content: space-around;
  // 侧轴居中
  align-items: center;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  .left {
    width: 478px;
    height: 550px;
    padding: 43px;
    background: rgba(245, 245, 245, 1);

    .titleName {
      font-size: 24px;
      font-weight: 400;
      color: rgba(12, 12, 12, 1);
      margin-left: 15px;
      margin-right: 15px;
    }
    .titleLine{
      color:#ccc;
      font-size: 24px;
    }
    .titleName2 {
      font-size: 22px;
      margin-left: 15px;
    }
  }
}
</style>>

