<template>
   <div>
      <nav>
         <ul>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">이거는 nav다ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ</a></li>
         </ul>
      </nav>
   </div>
</template>

<script>
   export default {
      name: "NavBar"
   }
</script>

<style scoped lang="scss">
   nav{
      width: 100%;
      height: 40px;
      ul {
         display: flex;
         justify-content: space-around;
         li{
            list-style-type: none;
            float: right;
            line-height: 50px;
            padding-right: 4.8%;
            height: 50px;
            a{
               text-decoration: none;
               color: black;
            }
            a:hover{
               color: green;
            }
         }
      }
   }

</style>
