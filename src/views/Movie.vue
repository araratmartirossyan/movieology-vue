<template>
  <page>
    <template #prepend>
      <gs-icon icon="arrow-left" size="32" @click="$router.back()" />
    </template>

    <div className="wrap">
      <div className="cellphone-container" v-if="movieStore.movie">
        <div className="movie">
          <div
            className="movie-img"
            :style="{
              backgroundImage: `url(${movieStore.movie.Poster})`,
              backgroundSize: 'cover'
            }"
          />
          <div className="text-movie-cont">
            <div className="mr-grid">
              <div className="col1">
                <h2 className="title">{{ movieStore.movie.Title }}</h2>
                <ul className="movie-gen">
                  <li>{{ movieStore.movie.Rated }} /</li>
                  <li>{{ movieStore.movie.Runtime }} мин /</li>
                  <li>{{ movieStore.movie.Genre }}</li>
                </ul>
              </div>
            </div>
            <div className="mr-grid summary-row">
              <div className="col2">
                <h3>Описание:</h3>
              </div>
              <div className="col2">
                <div className="movie-likes">
                  <!-- <Icon28FavoriteOutline width="{20}" height="{20}" /> -->
                  <span>⭐ {{ movieStore.movie.imdbRating }}</span>
                </div>
              </div>
            </div>
            <div className="mr-grid">
              <div className="col1">
                <p className="movie-description">
                  {{ movieStore.movie.Plot }}
                </p>
              </div>
            </div>
            <div className="mr-grid actors-row">
              <div className="col1">
                <p className="movie-actors">
                  {{ movieStore.movie?.Actors?.split('...')[0] }}
                </p>
              </div>
            </div>

            <div class="actions-block" v-if="authStore.loggedIn">
              <el-icon
                @click="favoriteStore.addToFavorite(movieStore.movieId)"
                v-if="!favoriteStore.isFav"
              >
                <Star />
              </el-icon>
              <el-icon
                @click="favoriteStore.removeFromFavorite(movieStore.movieId)"
                v-else-if="favoriteStore.isFav"
              >
                <StarFilled />
              </el-icon>
              <el-icon>
                <Share />
              </el-icon>
            </div>

            <div className="back-btn">
              <el-button @click="back">Назад</el-button>
              <el-button @click="fetchAgain">
                <el-icon style="vertical-align: middle">
                  <VideoPlay />
                </el-icon>
                <span> Посоветовать еще </span>
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </page>
</template>

<script setup lang="ts">
// Components
import { ElButton, ElIcon } from 'element-plus'
import { VideoPlay, Star, StarFilled, Share } from '@element-plus/icons-vue'

// Vue Hooks
import { onMounted } from '@vue/runtime-core'
import { useRouter, useRoute } from 'vue-router'

// Stores
import { useAuthStore, useFavoriteStore, useMovieStore } from '@/stores'

// Hooks
import { usePreloader } from '@/hooks/usePreloader.hook'

const movieStore = useMovieStore()
const favoriteStore = useFavoriteStore()
const authStore = useAuthStore()

const { back } = useRouter()
const {
  params: { id }
} = useRoute()

onMounted(async () => {
  await movieStore.fetchMovie(id as string)
})

const fetchAgain = async () => {
  await usePreloader(movieStore.fetchSuggestedMovie)
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles';

@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800,300italic,400italic,600italic,700italic,800italic);

.cellphone-container {
  background-color: #1e1b26;
  padding-bottom: 20px;
}

.title {
  text-align: left;
}

.movie-img {
  width: 100%;
  height: 450px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 111 !important;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, black),
    color-stop(0.35, black),
    color-stop(0.5, black),
    color-stop(0.65, black),
    color-stop(0.85, rgba(0, 0, 0, 0.6)),
    color-stop(1, transparent)
  );
  position: relative;
}

.movie {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+39,1e1b26+53&0+38,1+55 */
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 38%,
    rgba(255, 255, 255, 0.06) 39%,
    rgba(30, 27, 38, 0.88) 53%,
    #1e1b26 55%
  );
  /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 38%,
    rgba(255, 255, 255, 0.06) 39%,
    rgba(30, 27, 38, 0.88) 53%,
    #1e1b26 55%
  );
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 38%,
    rgba(255, 255, 255, 0.06) 39%,
    rgba(30, 27, 38, 0.88) 53%,
    #1e1b26 55%
  );
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#1e1b26', GradientType=0);
  /* IE6-9 */
  background-size: contain;
  background-size: cover;
  width: 100%;
  display: block;
  border-radius: 8px;
}

.text-movie-cont {
  padding: 0px 12px;
  text-align: justify;
}

.text-movie-cont h2 {
  margin: 10px 0;
}

.action-btn {
  text-align: right;
}

.actions-block i {
  color: #fe4141;
  font-size: 32px;
  text-align: right;
  margin-right: 15px;
}

.summary-row {
  margin-top: 12px;
}

/* TYPOGRAPHY STARTS */
/* Fonts */
h1,
h2,
h3,
h4,
h5 {
  font-family: 'Montserrat', sans-serif;
  color: #e7e7e7;
  margin: 0px;
}

h1 {
  font-size: 36px;
  font-weight: 400;
}

h3 {
  font-size: 14px;
  font-weight: 400;
  color: #fe4141;
}

h5 {
  font-size: 12px;
  font-weight: 400;
}

.movie-gen,
.movie-likes {
  margin: 0px;
  padding: 0px;
}

.movie-gen li,
.movie-likes {
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #818181;
  width: auto;
  display: block;
  float: left;
  margin-right: 6px;
  font-weight: 600;
}

.movie-likes {
  color: #fe4141;
  float: right;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.movie-likes span {
  margin-left: 5px;
}

.movie-likes i {
  font-size: 14px;
  margin-right: 4px;
  position: relative;
  float: left;
  line-height: 1;
}

.movie-details {
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 300;
  color: #b4b4b4;
}

.movie-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  text-align: left;
}

.movie-actors {
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 300;
  color: #e7e7e7;
  text-align: left;
  font-style: italic;
}

/* TYPOGRAPHY ENDS */
/** GRID STARTS **/
.thegrid {
  margin: 0 auto;
}

.elements-distance,
.movie-details,
.movie-description,
.movie-actors {
  margin: 0px;
}

.mr-grid {
  width: 100%;
}

.mr-grid:before,
.mr-grid:after {
  content: '';
  display: table;
}

.mr-grid:after {
  clear: both;
}

.mr-grid {
  *zoom: 1;
}

.col1,
.col2 {
  margin: 0% 0.5% 0.5% 0.5%;
  padding: 1%;
  float: left;
  display: block;
}

/* Columns match, minus margin sum. E.G. margin-left+margin-right=1%, col2=50%-1% - added padding:1%*/
.col1 {
  width: 98%;
}

.col2 {
  width: 47%;
}

.back-btn {
  color: #fe4141;
  margin-top: 10px;
}

.back-btn button {
  border-color: #fe4141;
  color: #fe4141;
  background: none;

  &:hover,
  &:focus {
    color: #fe4141;
  }

  span {
    margin-left: $spacing-s;
  }
}
</style>
