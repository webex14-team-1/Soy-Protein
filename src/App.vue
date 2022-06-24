<template>
  <div class="article">
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="side">
      <div class="side-backimage"></div>
      <div class="side-bar">
        <ul>
          <li><router-link to="/" class="routerlink">Home</router-link></li>
          <li>
            <router-link to="/custom" class="routerlink">Customize</router-link>
          </li>
          <li>
            <router-link to="/favorite" class="routerlink"
              >Favorite</router-link
            >
          </li>
          <li>
            <router-link to="/trivia" class="routerlink">Trivia</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<!-- <div class="side">
      <div class="side-backimage"></div>
      <div class="side-bar">
        <ul>
          <li><a href="#">TOP</a></li>
          <li><a href="#message">Our Message</a></li>
          <li><a href="#custom">Customize</a></li>
          <li><a href="#favorite">Favorite Custom</a></li>
          <li><a href="#trivia">Trivia Quiz</a></li>
        </ul>
      </div>
    </div> -->
<script></script>
<style>
html {
  height: 100%;
}
body {
  color: #020c3f;
  overflow-x: hidden;
  margin: 0px;
  padding: 0;
  height: 100%;
}
.article {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  background-color: #faf6f2;
  position: relative;
  height: 100%;
  min-height: 100%;
}
.main {
  margin: 0;
  padding: 0;
  width: 84%;
  height: 100%;

  background-color: #faf6f2;
}
.side {
  width: 16%;
  height: 100%;
  min-height: 100%;
  overflow-y: hidden;
  position: relative;
  background-color: #faf6f2;
  box-sizing: border-box;
  height: 100vh;
}
@keyframes slideIn3 {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
  }
  40%,
  100% {
    opacity: 1;
  }
}
.side-bar {
  margin: 0;
  width: 16%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.01);
  position: fixed;
  top: 0;
  z-index: 30;
  text-align: center;
  animation-name: slideIn3;
  animation-duration: 2.5s;
}
.side-bar ul {
  margin-top: 40px;
}

.side-bar li {
  list-style: none;
  font-size: 20px;
  height: 50px;
  padding-right: 40px;
}

/* @keyframes slideIn3 {
  0% {
    transform: translateX(20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
  }
  40%,
  100% {
    opacity: 1;
  }
} */
.side-backimage {
  margin: 0;
  width: 100%;
  height: 540px;
  background-color: #f5ede6;
  position: absolute;
  z-index: 20;
  /* animation-name: slideIn3;
  animation-duration: 1.5s; */
}
.routerlink {
  color: #020826;
  text-decoration: none;
  font-size: 26px;
  line-height: 100px;
}
</style>
