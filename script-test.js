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
  ];
  const colors = ["#8EB8EF", "#4C7BB9", "#25558F"];
  const yearlist = ["2020年", "2022年", "2023年"];
  var citys = document.querySelectorAll(".city");
  var years = document.getElementsByClassName("year-container");
  var clickCount = 0;
  var container = document.getElementsByClassName("container");


  container.addEventListener("click", function () {
    clickCount++;
    clickPointer = clickCount % 2;

    console.log("###clickcount:" + clickCount);

    if (clickPointer === 0) {
      citys.forEach(function (div, i) {
        div.innerHTML = rank2022[i];
      });
      years.forEach(function (div) {
        div.innerHTML = yearlist[1];
      });
      years.style.background = colors[1];

      console.log("2022");
    }
    if (clickPointer === 1) {
      citys.forEach(function (div, i) {
        div.innerHTML = rank2020[i];
      });
      years.forEach(function (div) {
        div.innerHTML = yearlist[0];
      });
      years.style.background = colors[0];

      console.log("2020");
    }
  });
});
