<template>
  <div class="maintain">
     <div class="container"  width="100%" height="100%">
        <div class="content">
            <div class="Uicon">
                <img class="UiconImg" src="@/assets/maintain/table_icon_01_yellow.png" alt="">
            </div>
            <center>
                <img src="@/assets/maintain/maintenance_logo.png"/>
            </center>
            <div class="title"><p>即將上線</p><p>Coming Soon</p></div>
        </div>
    </div>
  </div>
</template>
<style>
  .maintain {
    height: 100%;
    width: 100%;
    padding: 0px;
    margin: 0px;
    background-image: url('~@/assets/maintain/bg.png');
  }

  body {
      margin: 0;
      padding: 0;
      width: 100%;
      color: #B0BEC5;
      display: table;
      font-weight: 100;
      font-family: 'Lato';
  }

  .container {
      text-align: center;
      display: block;
      margin: auto;
      /* background-image: url('~@/assets/maintain/bg.png'); */
  }

  .content {
      text-align: center;
      display: inline-block;
      margin-top: 10%;
  }

  .title {
      margin-bottom: 40px;
      font-weight: 990;
      color: white;
  }

  .title > p {
      margin: 5px;
      font-size: 2rem;
  }

  center img  {
      height: 7vh;
      margin-bottom: 60px;
  }

  .Uicon img {   
      -webkit-animation: rotate 2s linear infinite;
      -moz-animation: rotate 2s linear infinite;
      -ms-animation: rotate 2s linear infinite;
      -o-animation: rotate 2s linear infinite;
      animation: rotate 2s linear infinite;
  }

  .UiconImg, .title > p {
      -webkit-filter: drop-shadow(0px 0px 5px #93c2fc);
      filter: drop-shadow(0px 0px 5px #93c2fc);
      -webkit-animation: filter 3s linear infinite both;
      animation: filter 3s linear infinite both;
  }

  @keyframes rotate {
      from {
          -ms-transform: rotateY(0deg);
          -moz-transform: rotateY(0deg);
          -webkit-transform: rotateY(0deg);
          -o-transform: rotateY(0deg);
          transform: rotateY(0deg);
      }
      to {
          -ms-transform: rotateY(360deg);
          -moz-transform: rotateY(360deg);
          -webkit-transform: rotateY(360deg);
          -o-transform: rotateY(360deg);
          transform: rotateY(360deg);
      }
  }

</style>