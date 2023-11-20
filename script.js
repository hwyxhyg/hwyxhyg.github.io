var citytext = "深圳";
document.addEventListener("DOMContentLoaded", function () {
  const rank2020 = [
    "深圳",
    "上海",
    "广州",
    "北京",
    "哈尔滨",
    "西安",
    "福州",
    "成都",
    "杭州",
    "长沙",
    "沈阳",
    "石家庄",
    "郑州",
    "天津",
    "武汉",
    "厦门",
    "昆明",
    "南京",
    "佛山",
    "贵阳",
    "重庆",
    "长春",
    "南宁",
    "青岛",
    "兰州",
    "常州",
    "合肥",
    "南昌",
    "大连",
    "无锡",
    "太原",
    "东莞",
    "乌鲁木齐",
    "苏州",
    "宁波",
    "洛阳",
    "徐州",
    "芜湖",
    "呼和浩特",
    "绍兴",
    "济南",
    "温州",
    "南通",
    "金华",
    "台州",
    "嘉兴",
  ];
  const rank2022 = [
    "深圳",
    "上海",
    "北京",
    "广州",
    "厦门",
    "福州",
    "长沙",
    "成都",
    "西安",
    "重庆",
    "东莞",
    "佛山",
    "杭州",
    "武汉",
    "沈阳",
    "郑州",
    "昆明",
    "南宁",
    "贵阳",
    "哈尔滨",
    "兰州",
    "合肥",
    "青岛",
    "常州",
    "南昌",
    "太原",
    "南京",
    "天津",
    "石家庄",
    "洛阳",
    "无锡",
    "苏州",
    "大连",
    "宁波",
    "长春",
    "乌鲁木齐",
    "芜湖",
    "徐州",
    "呼和浩特",
    "济南",
    "绍兴",
    "温州",
    "南通",
    "金华",
    "台州",
    "嘉兴",
  ];
  const rank2023 = [
    "深圳",
    "北京",
    "上海",
    "广州",
    "成都",
    "长沙",
    "厦门",
    "沈阳",
    "重庆",
    "太原",
    "哈尔滨",
    "杭州",
    "武汉",
    "兰州",
    "西安",
    "东莞",
    "昆明",
    "石家庄",
    "福州",
    "郑州",
    "南宁",
    "合肥",
    "贵阳",
    "常州",
    "南京",
    "洛阳",
    "苏州",
    "无锡",
    "天津",
    "佛山",
    "青岛",
    "长春",
    "大连",
    "乌鲁木齐",
    "南昌",
    "宁波",
    "南通",
    "徐州",
    "济南",
    "呼和浩特",
    "芜湖",
    "绍兴",
    "金华",
    "台州",
    "嘉兴",
    "温州",
  ];
  const colors = ["#8EB8EF", "#78A3DD", "#4C7BB9"];
  const yearlist = ["2020年", "2022年", "2023年"];
  var citys = document.querySelectorAll(".city");
  var ranks = document.querySelectorAll(".rank");
  var years = document.querySelector(".year-container p");
  var citybox = document.querySelectorAll(".citybox");
  var yearbox = document.getElementsByClassName("year-container ")[0];
  "container"[0];
  var clickCount = 0;

  //add add-border
  citybox.forEach(function (selected) {
    selected.addEventListener("click", function () {
      citybox.forEach(function (box) {
        if (box !== this) {
          box.classList.remove("add-border");
        }
      });
      this.classList.toggle("add-border");
      citytext = this.querySelectorAll("p")[1].textContent;
      console.log("#1" + citytext);
    });
  });

  //to update the citybox, not citytext
  function citystarupdater(citytext) {
    console.log("started");
    citybox.forEach(function (citybox) {
      var thiscitys = citybox.querySelectorAll("p");
      if (thiscitys.length > 1) {
        var thiscity = thiscitys[1].textContent;
        if (thiscity.includes(citytext)) {
          citybox.classList.add("add-border");
        } else {
          citybox.classList.remove("add-border");
        }
      }
    });
  }

  yearbox.addEventListener("click", function () {
    clickCount++;
    var clickPointer = clickCount % 3;
    //console.log("###clickcount:" + clickCount);
    if (clickPointer === 2) {
      ranks.forEach(function (div, i) {
        div.classList.add("tracking-in-expand");
      });
      citys.forEach(function (div, i) {
        div.innerHTML = rank2023[i];
        div.classList.add("tracking-in-expand");
      });
      yearbox.classList.add("flip-vertical-right");
      years.classList.add("tracking-in-expand");
      years.innerHTML = yearlist[2];
      yearbox.style.background = colors[2];
      citybox.forEach(function (div) {
        div.classList.add("flip-vertical-right");
        div.style.background = colors[2];
        citystarupdater(citytext);
        console.log("#4" + citytext);
      });
      //console.log("2022");
    }
    if (clickPointer === 1) {
      ranks.forEach(function (div, i) {
        div.classList.add("tracking-in-expand");
      });
      citys.forEach(function (div, i) {
        div.innerHTML = rank2022[i];
        div.classList.add("tracking-in-expand");
      });
      yearbox.classList.add("flip-vertical-right");
      years.classList.add("tracking-in-expand");
      years.innerHTML = yearlist[1];
      yearbox.style.background = colors[1];
      citybox.forEach(function (div) {
        div.classList.add("flip-vertical-right");
        div.style.background = colors[1];
        citystarupdater(citytext);
        console.log("#2" + citytext);
      });
      //console.log("2022");
    }
    if (clickPointer === 0) {
      ranks.forEach(function (div, i) {
        div.classList.add("tracking-in-expand");
      });
      citys.forEach(function (div, i) {
        div.innerHTML = rank2020[i];
        div.classList.add("tracking-in-expand");
      });
      yearbox.classList.add("flip-vertical-right");
      years.classList.add("tracking-in-expand");
      years.innerHTML = yearlist[0];
      yearbox.style.background = colors[0];
      citybox.forEach(function (div) {
        div.classList.add("flip-vertical-right");
        div.style.background = colors[0];
        citystarupdater(citytext);
        console.log("#3" + citytext);
      });
      //console.log("2020");
    }
    // remove anime
    function removeAnimationClass(element, className) {
      element.addEventListener(
        "animationend",
        function () {
          this.classList.remove(className);
        },
        { once: true }
      );
    }
    removeAnimationClass(yearbox, "flip-vertical-right");
    citybox.forEach(function (div) {
      removeAnimationClass(div, "flip-vertical-right");
    });
    citys.forEach(function (div) {
      removeAnimationClass(div, "tracking-in-expand");
    });
    ranks.forEach(function (div) {
      removeAnimationClass(div, "tracking-in-expand");
    });
    removeAnimationClass(years, "tracking-in-expand");
  });
});
