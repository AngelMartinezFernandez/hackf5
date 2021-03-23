<template>
  <div class="card m-4">
    <div class="col align-self-center">
      <h1 class="d-flex justify-content-center">Calendario</h1>
      <h5 class="d-flex justify-content-center">{{ user.name }}</h5>
    </div>
    <div class="col align-self-center">
      <div>
        <h1>
          <i class="arrow left"> </i> Marzo 2021 <i class="arrow right"></i>
        </h1>
        <button class="btn btn-primary btn-group-lg">
          <ol>
            <li class="day-name">Lun</li>
            <li class="day-name">Mar</li>
            <li class="day-name">Mié</li>
            <li class="day-name">Jue</li>
            <li class="day-name">Vie</li>
            <li class="day-name">Sáb</li>
            <li class="day-name">Dom</li>
            <li class="first-day">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
          </ol>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Profile",
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style scoped>
ol {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  list-style: none;
  padding: 0;
}
.first-day {
  grid-column-start: 5;
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-bottom: 10px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
</style>